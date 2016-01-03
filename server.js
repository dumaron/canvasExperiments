var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('./'));
app.use(require('body-parser').urlencoded({ extended: true, limit: '50mb' }));

app.get('/', function (req, res) {
    res.sendFile('./html/index.html', { root: __dirname});
});

// app.post('/save', function(req, res) {
//     var name = new Date().getTime() + '.png';
//     fs.writeFile('results/' + name, req.body.base64, 'base64');
//     res.sendStatus(200);
// });

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
