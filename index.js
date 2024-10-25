const express = require('express');

const app = express();

app.use('/', express.static(__dirname));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/rockFestival.html');
});

app.listen(3000, () => {
    console.log('server start');
});