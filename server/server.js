const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Producto} = require('./models/producto.js');

var session = require('express-session');
var Cart = require('./models/cart.js');
var cookieParser = require('cookie-parser');

var app = express();
var router = express.Router();
app.set('view engine', 'jade');
app.use(express.static('public'));
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});



app.get('/', function (req, res) {
      Producto.find().then((prod) => {
          res.render('index', { productos : prod});
      }, (e) => {
        res.status(400).send(e);
      });
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


app.get('/add/:id', function(req, res) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Producto.findById(productId).then((prod) => {
    if (!prod) {
      return res.status(404).send();
    }
    cart.add(prod, productId);
    req.session.cart = cart;
    res.redirect('/');
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

app.patch('/prodMod/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Producto.findByIdAndUpdate(id, {$set:body}, {new: true}).then((prod) =>{
    if (!prod) {
      return res.status(404).send();
    }
    res.send({prod});
  }).catch((e) =>{
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log('Inicio puerto ', port);
});
