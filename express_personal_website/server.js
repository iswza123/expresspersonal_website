var  express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views','./views');

var entrance = require('./index.js');


app.use('/',entrance);

app.listen(4040); 