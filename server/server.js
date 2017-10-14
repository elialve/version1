var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Producto} = require('./models/producto.js');

var app = express();
app.set('view engine', 'jade');
app.use(express.static('public'));
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.render('index', { title: ' Pagina', message: 'Bienvenidos'});
});
//Agregar
app.post('/prodAdd', (req, res) => {
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
app.get('/prodList', (req, res) => {

    Producto.find().then((prod) => {
      res.send({prod});
    }, (e) => {
      res.status(400).send(e);
    });
})
//Buscar
app.get('/prodBuscar/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Producto.findById(id).then((prod) => {
      if (!prod) {
        return res.status(404).send();
      }
      res.send({prod});
    }).catch((e) => {
      res.status(400).send();
    });
});
//Eliminar
app.delete('/prodDel/:id',(req, res) =>{
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Producto.findByIdAndRemove(id).then((prod) =>{
    if (!prod) {
      return res.status(404).send();
    }
  res.send(prod);
  }).catch((e) => {
  res.status(400).send();
  });
});
app.listen(port, () => {
  console.log('Inicio puerto ', port);
});
