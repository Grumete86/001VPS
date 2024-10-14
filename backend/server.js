const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end({ response: "succesfulResponse" });
})

app.listen(5000)