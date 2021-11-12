import path from 'path';
import dotenv from 'dotenv';

import { ConfigurationInterface, EnvironmentType } from '../types/ConfigurationInterface';

export default class ConfigurationLoader {
    public static load(): ConfigurationInterface {
        const { parsed, error } = dotenv.config({
            path: process.env.NODE_ENV === 'production'
                ? path.resolve(path.join(process.cwd(), 'build'), '.env')
                : path.resolve(process.cwd(), '.env'),
        });

        if (error) {
            throw new Error(`Error while trying to work with config file : ${error}`);
        }

        if (!parsed) {
            throw new Error('Config file is empty.');
        }

        console.log('Configuration loaded !');

        return {
            environment: process.env.NODE_ENV as EnvironmentType,
            database: {
                user: parsed.DB_USER as string,
                password: parsed.DB_PASS,
                host: parsed.DB_HOST as string,
                port: parsed.DB_PORT,
                name: parsed.DB_NAME as string,
                auth: parsed.DB_AUTHDB as string,
                replicaSet: parsed.DB_REPLICASET as string,
            },
            secret: process.env.TOKEN_SECRET as string,
        };
    }
}
