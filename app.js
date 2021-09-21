const express = require('express');
let router = require('./router');

const app = express();


app.use(express.json())
app.use(router)

app.listen(9000)

module.exports = app;