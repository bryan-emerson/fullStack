const express = require('express');
let router = require('./router');

const app = express();


app.use(express.json())
app.use(router)

//what happens if i comment this out? does server(nodemon) still work
app.listen(9000)

module.exports = app;