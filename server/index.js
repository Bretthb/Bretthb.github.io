const express = require("express");

const app = express();


app.get('/api', (req,res) => {
    res.send('hello world');
});



app.listen(1234);

