const express = require('express');
const app = express();


app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.get('/users', (req, res) => {
    res.json({
        name: 'Joseph',
        id: 1
    });
});

app.listen(3000, () => {
    console.log('server started at 3000');
});