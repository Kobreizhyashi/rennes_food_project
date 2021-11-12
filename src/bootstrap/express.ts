import {ConfigurationInterface} from "../types/ConfigurationInterface";
import express, {Express} from "express";
import helmet from "helmet";
import cors from 'cors';


export default class ExpressLoader {

    public static init({environment}: ConfigurationInterface): Express {
        const app = express();

        if (environment === "production") {
            app.use(cors())
            app.use(helmet())
        } else {
            app.use(cors({
                allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Headers', 'accept'],
                origin: '*',
                methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
                preflightContinue: false,
                credentials: true,
            }));
        }

        return app;
    }
}
