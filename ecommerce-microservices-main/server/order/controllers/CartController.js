const CartService = require('../services/CartService');

const CartController = {
  addToCart: async (req, res) => {
    try {
      const { userEmail, productId, quantity } = req.body;
      const cartItem = await CartService.addToCart(userEmail, productId, quantity);
      res.status(200).json({ cartItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getItemCount: async (req, res) => {
    try {
      const { userEmail } = req.body;
      const itemCount = await CartService.getItemCount(userEmail);
      res.status(200).json({ itemCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllItems: async (req, res) => {
    try {
      const { userEmail } = req.body;
      const cartItems = await CartService.getAllItems(userEmail);
      res.status(200).json({ cartItems });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  removeItem: async (req, res) => {
    try {
      const { userEmail, productId } = JSON.parse(req.body.body);
      await CartService.removeItem(userEmail, productId);
      res.status(200).json({ message: 'Item removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

};

module.exports = CartController;
