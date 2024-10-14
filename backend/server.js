const express = require('express');
const app = express();

app.get('/api', function (req, res) {
    res.json({ message: "succesfulResponse", author: "El puto jefe", date: new Date(), status: 200 });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});