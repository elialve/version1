const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Producto} = require('./models/producto.js');
var {User} = require('./models/user.js');
var {authenticate} = require('./middleware/authenticate');

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

app.get('/ajax', (req, res) => {
  res.render('ajax');
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
    var productId = req.params.id;
    var num = req.params.num;
    console.log('llegue');
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Producto.findById(productId).then((prod) => {
      if (!prod) {
        console.log(':C');
        return res.status(404).send();
      }
      console.log(prod);
      cart.add(prod, productId);
      req.session.cart = cart;
      if (num ==1) {
          res.render('cart2');
      }
      if (num == 2) {
        res.render('cart2');
      }
    }).catch((e) => {
      res.status(400).send();
    });
});

app.get('/cart', function(req, res) {
  if (!req.session.cart) {
    return res.render('cart', {productos: null,title: 'Carrito'});
  }
  var cart = new Cart(req.session.cart);
  if(!req.session.user){
    res.render('cart', {productos: cart.getItems(),totalPrice: cart.totalPrice,title: 'Carrito', usuario: null});
  }
  var user = new User(req.session.user);
  res.render('cart', {productos: cart.getItems(),totalPrice: cart.totalPrice,title: 'Carrito', usuario: user});
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
  var sessionUser = req.session;
  sessionUser.user = user;

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.render('pedido',{usuario: user});
  }).catch((e) => {
    res.status(400).send(e);
  });
})


app.get('/users/me',authenticate, (req, res) =>{
  res.send(req.user);
});

app.post('/users/login', (req, res) =>{
  var body =_.pick(req.body, ['email', 'password']);
  User.findByCrentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) =>{
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});


app.listen(port, () => {
  console.log('Inicio puerto ', port);
});
