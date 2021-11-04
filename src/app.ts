import express from 'express';

const app = express();
const port : number = 8080;

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.listen(port, () => {
    console.log(`Runnin' on ${port} 🚀`);
});