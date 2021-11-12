import ConfigurationLoader from './configuration';
import ExpressLoader from './express';
import ServerLoader from './server';

export default class Bootstrap {
    public static async init(): Promise<void> {
        // Configuration loading
        const config = ConfigurationLoader.load();
        // Express start
        const app = await ExpressLoader.init(config);
        // Server launch
        ServerLoader.init(app);
    }
}
