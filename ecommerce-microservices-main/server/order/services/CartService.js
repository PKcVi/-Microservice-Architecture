const CartItem = require('../models/CartItem');

const CartService = {
  addToCart: async (userEmail, productId, quantity) => {
    try {
      let cartItem = await CartItem.findOne({ userEmail, productId });

      if (cartItem) {
        cartItem.quantity += quantity || 1;
      } else {
        cartItem = new CartItem({ userEmail, productId, quantity: quantity || 1 });
      }

      await cartItem.save();
      return cartItem;
    } catch (error) {
      console.error('Error in addToCart:', error);
      throw error;
    }
  },

  getItemCount: async (userEmail) => {
    try {
      const itemCount = await CartItem.aggregate([
        {
          $match: { userEmail },
        },
        {
          $group: {
            _id: null,
            totalQuantity: { $sum: '$quantity' },
          },
        },
      ]);
  
      return itemCount.length > 0 ? itemCount[0].totalQuantity : 0;
    } catch (error) {
      console.error('Error in getItemCount:', error);
      throw error;
    }
  },
  removeItem : async (userEmail, productId) => {
    try {
      await CartItem.findOneAndDelete({ userEmail:userEmail, productId:productId });
    } catch (error) {
      console.error('Error in removeItem:', error);
      throw error;
    }
  },

  getAllItems: async (userEmail) => {
    try {
      const cartItems = await CartItem.find({ userEmail });
      return cartItems;
    } catch (error) {
      console.error('Error in getAllItems:', error);
      throw error;
    }
  },

};

module.exports = CartService;
