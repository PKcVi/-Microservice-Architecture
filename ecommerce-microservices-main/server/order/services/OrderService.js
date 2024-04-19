const Order = require('../models/Order');
const CartItem = require('../models/CartItem');

const OrderService = {
  createOrder: async (userEmail,items, totalAmount, paymentId,) => {
    try {
      const order = new Order({ userEmail, items, totalAmount, paymentId, });
      await order.save();

      await CartItem.deleteMany({ userEmail });

      return order;
    } catch (error) {
      console.error('Error in createOrder:', error);
      throw error;
    }
  },
  getOrders: async (userEmail,) => {
    try {
      const query = {
        userEmail: userEmail,
      };  
      const orderItems = await Order.find(query);
      return orderItems;
    } catch (error) {
      console.error('Error in getAllItemsManagable:', error);
      throw error;
    }
  },
};

module.exports = OrderService;
