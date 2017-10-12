var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Producto} = require('./models/producto.js');

var app = express();

app.use(bodyParser.json());

//Agregar
app.post('/productos', (req, res) => {
  var prod = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    completed: req.body.completed
  });

  prod.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//Listar
app.get('/productos', (req, res) => {
    Producto.find().then((prod) => {
      res.send({prod});
    }, (e) => {
      res.status(400).send(e);
    });
})



app.listen(3000, () => {
  console.log('Inicio puerto 3000');
});
