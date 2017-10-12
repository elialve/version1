var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('index', { title: ' Pagina', message: 'Bienvenidos'});
});
app.get('/paralax', function (req, res) {
  res.render('paralax', { title: ' Pagina', message: 'Bienvenidos'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
