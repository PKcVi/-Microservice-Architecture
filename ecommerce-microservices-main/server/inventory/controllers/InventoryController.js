const axios = require('axios');

const InventoryController = {
  updateProduct: (req, res) => {
    const { productId, updatedInfo } = req.body.updatedProduct;

    axios.put('http://localhost:3002/products/updateProduct', { productId, updatedInfo })
      .then(productMicroserviceResponse => {
        if (productMicroserviceResponse.status === 200) {
          res.status(200).json({ success: true, updatedProduct: productMicroserviceResponse.data.item });
        } else {
          res.status(500).json({ success: false, error: 'Failed to update product' });
        }
      })
      .catch(error => {
        console.error('Error updating product in inventory microservice:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      });
  },
};

module.exports = InventoryController;
