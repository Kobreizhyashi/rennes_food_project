import http, {Server} from 'http';
import {Express} from 'express';

export default class ServerLoader {
    public static init(app: Express): Server {
        if (process.env.NODE_ENV === 'test') {
            return app.listen();
        }

        const port = process.env.PORT;
        const server = http.createServer(app);

        server.listen(port, () => {
            console.log(`Server started !`);
        });

        return server;
    }
}
