import {config} from "dotenv";
config()

export default {
    serverHost: process.env.API_HOST,
    serverPort: process.env.API_PORT,
}


