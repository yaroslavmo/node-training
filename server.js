const express = require('express');

const app = express();

app.use(express.json());

app.post('/:say', function (req, res) {
    let say = req.params.say;
    let {first, last} = req.body;
    let message = `${say} ${first} ${last}`;
    res.json({ message });
});

//

app.listen(3000, function () {
    console.log('Server started port 3000.')
});