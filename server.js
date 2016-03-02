var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({secret: 'mcgregor'}));
var bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(path.join('./client')));
app.use(bodyParser.json());
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
app.listen(8000, function(){
    console.log('You are on 8000, enjoy your ride.');
})