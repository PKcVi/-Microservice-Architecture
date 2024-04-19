const ProductService = require('../services/ProductServices');


const ProductController = {
  addItem: async (req, res) => {
    try {
      const newItem = await ProductService.addItem(req);
      const items = await ProductService.getAllItems();
      res.status(201).json({ item: newItem, items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getAllItems: async (req, res) => {
    try {
      const { category, searchQuery } = req.body;
      const items = await ProductService.getAllItems(category, searchQuery);

      res.status(200).json({ items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getCategory: async (req, res) => {
    try {
      const { compiledItems } = req.body;
      const categories = {
        'Womens fashion':0,
        'Mens fashion':0,
        'Bags and accessories':0,
        'Baby care':0,
        'Health care and beauty':0,
        'Electronic Accessories':0,
        'Home and lifestyle':0,
        'Art and crafts':0,
      };

      
      for (const item of compiledItems) {
        const category = await ProductService.getCategory(item.productId);
        const categoryName = category.categories[0];
        categories[categoryName] = categories[categoryName] + item.quantity;
      }

      res.status(200).json({ categories });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getAllItemsManagable: async (req, res) => {
    try {
      const {userEmail} = req.body;
      const items = await ProductService.getAllItemsManagable(userEmail);
      res.status(200).json({ items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductDetailsById: async (req, res) => {
    try {
      const { productId } = req.body;
      const productDetails = await ProductService.getProductDetailsById(productId);
      res.status(200).json({ productDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateItem: async (req, res) => {
    try {
      const { productId, updatedInfo } = req.body;
      const updatedItem = await ProductService.updateItem(productId, updatedInfo);
      const items = await ProductService.getAllItems();
      res.status(200).json({ item: updatedItem, items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },



  deleteItem: async (req, res) => {
    try {
      const deletedItem = await ProductService.deleteItem(req);
      const items = await ProductService.getAllItems();
      res.status(200).json({ item: deletedItem, items });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  decreaseQuantity: async (req, res) => {
    try {
      const itemlist = req.body.items;
      for (const item of itemlist) {
        await ProductService.decreaseQuantity(item.productId, item.quantity);
      }
      res.status(201);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = ProductController;
