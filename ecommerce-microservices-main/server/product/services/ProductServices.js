
const Product = require('../models/Product');

const ProductService = {
  addItem: async (req) => {
    try {
      const { title, categories, description, price, quantity, userEmail } = req.body;
      const images = req.files.map(file => ({ url: file.filename }));

      const newItem = new Product({ title, categories, description, price, quantity, images, userEmail });
      await newItem.save();

      return newItem;
    } catch (error) {
      console.error('Error in addItem:', error);
      throw error;
    }
  },

  getAllItems: async (category, searchQuery) => {
    try {
      const query = {};
        if (category) {
        query.categories = [category];
      }
        if (searchQuery) {
        query.$or = [
          { title: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
        ];
      }
  
      const items = await Product.find(query);
      return items;
    } catch (error) {
      console.error('Error in getAllItems:', error);
      throw error;
    }
  },
  

  getAllItemsManagable: async (userEmail) => {
    try {
      const query = {
        userEmail: userEmail,
      };  
      const items = await Product.find(query);
      return items;
    } catch (error) {
      console.error('Error in getAllItemsManagable:', error);
      throw error;
    }
  },
  getCategory: async (productId) => {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      const { categories } = product;



      return { categories }; 
    } catch (error) {
      console.error('Error in gettinngCategory:', error);
      throw error;
    }
  },
  

  getProductDetailsById: async (productId) => {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      const { images, title, price } = product;


      return { images, title, price }; 
    } catch (error) {
      console.error('Error in getProductDetailsById:', error);
      throw error;
    }
  },
  updateItem: async (productId, updatedInfo) => {
    try {
      const { title, description, price, quantity } = updatedInfo;

      const updatedItem = await Product.findByIdAndUpdate(
        productId,
        { title, description, price, quantity },
        { new: true }
      );

      return updatedItem;
    } catch (error) {
      console.error('Error in updateItem:', error);
      throw error;
    }
  },


  deleteItem: async (req) => {
    try {
      const { productId } = req.body;
      const deletedItem = await Product.findByIdAndDelete(productId);

      return deletedItem;
    } catch (error) {
      console.error('Error in deleteItem:', error);
      throw error;
    }
  },

  decreaseQuantity: async (productId, quantityToDecrease) => {
    try {
      const product = await Product.findById(productId);

      if (!product) {
        throw new Error('Product not found');
      }

      if (product.quantity < quantityToDecrease) {
        throw new Error('Not enough quantity to decrease');
      }

      product.quantity -= quantityToDecrease;
      await product.save();

      return product;
    } catch (error) {
      console.error('Error in decreaseQuantity:', error);
      throw error;
    }
  },
};

module.exports = ProductService;
