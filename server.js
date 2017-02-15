var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();


//View engine
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, './dist')));
//app.use(express.static(path.join(__dirname, 'src/app')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/api/v1/', todos);


app.listen(3000, function () {
  console.log('Server Started at port 3000');
});
