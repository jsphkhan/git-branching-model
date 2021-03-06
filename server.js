const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
    console.log('This is first middleware')
    return next()
    console.log('This is first-half middleware')
})
  
app.use((req, res, next) => {
    console.log('This is second middleware: ')
    next()
})
  
app.use((req, res, next) => {
    console.log('This is third middleware')
    return next()
})

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/', (req, res) => {
    res.send('Hello there');
});

app.get('/users', (req, res) => {
    res.json({
        name: 'Joseph',
        id: 1,
        city: 'Dubai'
    });
});

app.listen(3000, () => {
    console.log('server started at 3000');
});