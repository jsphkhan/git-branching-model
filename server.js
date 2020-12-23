const express = require('express');
const app = express();


app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.listen(3000, () => {
    console.log('server started at 3000');
});