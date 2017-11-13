var mongoose = require('mongoose');
const validator = require('validator');
var Pedido =  mongoose.model('Pedido', {
  email: {
    type : String,
    required: true,
    trim: true,
    minlength: 1,
    validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      }
  },
  productos:{

  },
  precioTotal:{

  }
});



module.exports = {Pedido};
