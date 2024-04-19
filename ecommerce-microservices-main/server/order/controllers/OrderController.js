const OrderService = require('../services/OrderService');

const OrderController = {
  createOrder: async (req, res) => {
    try {
      const { userEmail, items, totalAmount, paymentId } = req.body;
      const order = await OrderService.createOrder(userEmail, items, totalAmount, paymentId);

      res.status(201).json({ order });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getOrders: async (req, res) => {
    try {
      const { userEmail } = req.body;
      const orderItems = await OrderService.getOrders(userEmail);
      res.status(201).json({ orderItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

};

module.exports = OrderController;
