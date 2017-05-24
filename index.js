var express = require("express");
var path = require("path");
var multer = require("multer");

var app = express();
var upload = multer({ dest: 'uploads/' });

app.set('port', process.env.PORT || 8080);

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.post('/getFileSize', upload.single('file'), function (req, res) {
    //console.log(req.file.size);
    res.json({
        "size": req.file.size
    });
});

app.listen(app.get('port'), function() {
    console.log("Listening on port " + app.get('port'));
});