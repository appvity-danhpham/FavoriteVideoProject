const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    var x = 1;
    var y = 2;
    var z = x + y;
    res.send('Hello World!')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));