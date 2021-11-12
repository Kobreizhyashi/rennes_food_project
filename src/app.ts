import Bootstrap from "./bootstrap";

const start = async (): Promise<any> => {
    await Bootstrap.init();
}

start();

export default start;
