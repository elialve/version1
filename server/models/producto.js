 var mongoose = require('mongoose');

 var Producto =  mongoose.model('Producto', {
   nombre:{
     type: String,
     required: true,
     minlength: 1
   },
   precio:{
     type: Number,
     required: true,
     minlength: 1
   },
   completed:{
     type: Boolean,
     required: true,
   }
 });
 // // Paso2:Crear objeto
 //  var newProducto = new Producto({
 //    nombre: 'Msi GE62VR-7RF',
 //    precio: 200000,
 //    completed: false
 //  });
 // // Paso 3: Guardarlo en la base de datos
 //  newProducto.save().then((doc) => {
 //    console.log('Producto agregado', doc);
 //  }, (e) => {
 //    console.log('Error, producto no agregado');
 //  });

module.exports = {Producto};
