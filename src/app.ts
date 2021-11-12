import Bootstrap from "./bootstrap";

const start = async (): Promise<any> => {
    await Bootstrap.init();
}

start().then(_ => {
    console.log("project launched")
});

export default start;
