const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Producto} = require('./models/producto.js');
var {User} = require('./models/user.js');

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
          res.render('index', {
            title: 'Home',
            productos : prod
          });
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
app.get('/detalle/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
    Producto.findById(id).then((prod) => {
      if (!prod) {
        return res.status(404).send();
      }
      res.render('detalle', { productos : prod});
    }).catch((e) => {
      res.status(400).send();
    });
});
// Carrito de compras

app.get('/add/:id/:num', function(req, res) {
  setTimeout(function(){
    var productId = req.params.id;
    var num = req.params.num;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Producto.findById(productId).then((prod) => {
      if (!prod) {
        return res.status(404).send();
      }
      cart.add(prod, productId);
      req.session.cart = cart;
      if (num ==1) {
          res.redirect("/");
      }
      if (num == 2) {
        res.redirect("/detalle/"+productId);
      }
    }).catch((e) => {
      res.status(400).send();
    });
  },2000);

});

app.get('/cart', function(req, res) {
  if (!req.session.cart) {
    return res.render('cart', {productos: null,title: 'Carrito'});
  }
  var cart = new Cart(req.session.cart);
  res.render('cart', {productos: cart.getItems(),totalPrice: cart.totalPrice,title: 'Carrito'});
});


app.get('/remove/:id', function(req, res) {
  var productId = req.params.id;
  console.log(productId);
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.remove(productId);
  req.session.cart = cart;
  res.redirect('/');
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
// POST /users
app.post('/users', (req, res) => {
  var body =_.pick(req.body, ['email', 'password']);
  var user = new User(body);
  user.save().then((user) => {
    res.send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
})

app.listen(port, () => {
  console.log('Inicio puerto ', port);
});
