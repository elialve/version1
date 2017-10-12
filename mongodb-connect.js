// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log

MongoClient.connect('mongodb://localhost:27017/Shopping', (err, db) => {
  if (err) {
    return console.log('Error al conectar MongoDB server');
  }
  console.log('Conectado a MongoDB server');
  // Agregar
  // db.collection('Productos').insertOne({
  //   nombre: 'Msi GeForce-GTX-1060',
  //   precio: 450000,
  //   completed: false
  // }, (err, result) =>{
  //   if (err) {
  //     return console.log('Error al insertar producto', err);
  //   }
  //   console.log('Producto Insertado correctamente');
  // })
  //Listar/Buscar
  // db.collection('Productos').find().toArray().then((docs) => {
  //   console.log('Productos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Error no se puede listar', err);
  // });
  // //Eliminar Muchos
  // db.collection('Productos').deleteMany({nombre: 'Msi GeForce-GTX-1060'}).then((result) =>{
  //   console.log(result);
  // });
  // //Eliminar Uno
  // db.collection('Productos').deleteOne({nombre: 'Msi GeForce-GTX-1080'}).then((result) =>{
  //   console.log(result);
  // });
  //Buscar uno y luego Elimina
  // db.collection('Productos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // // Buscar id y eliminar uno
  // db.collection('Productos').findOneAndDelete({
  //   _id: new ObjectID("59de6a0c5bd1ab4c78e5ce4e")
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });
  db.collection('Productos').findOneAndUpdate({
    _id: new ObjectID('59de6c17af1af944a45e6e5b')
  }, {
    $set: {
      completed:true
    },
    $inc: {
      precio: 1
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
