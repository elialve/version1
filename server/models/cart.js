module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, price: 0};
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.precio * cartItem.quantity;

        this.totalItems++;
        this.totalPrice += cartItem.item.precio;
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    this.update = function(id,cant) {
      if(cant == 0) {
        this.remove(id);
      } else {
        this.totalPrice -= this.items[id].item.precio* this.items[id].quantity;
        this.items[id].quantity = cant;
        this.totalPrice += this.items[id].item.precio * cant;
        this.items[id].price = this.items[id].item.precio * cant;
      }
    };
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
      return arr;
    };
};
