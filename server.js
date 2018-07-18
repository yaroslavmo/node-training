const express = require('express');

const app = express();

app.get('/:name', function (req, res) {
    let name = req.params.name;
    res.json({
        message: `hello ${name}`
    });
});


app.listen(3000, function () {
    console.log('Server started port 3000.')
});