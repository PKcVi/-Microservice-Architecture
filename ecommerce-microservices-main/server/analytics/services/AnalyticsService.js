const Analytics = require('../models/Analytics');


  const AnalyticsService = {
    compileOrderItems : (orderItems) => {
      const productQuantityMap = {};
      const objectList = [];
      for (const orderId in orderItems) {
         const orderObject = orderItems[orderId];
         for (obj of orderObject){
          objectList.push(obj)
         }
      }
      objectList.forEach((orderObject) => {
        orderObject.items.forEach((itemArray) => {
          itemArray.forEach((item) => {
            const { productId, quantity } = item;
            if (productQuantityMap[productId]) {
              productQuantityMap[productId] += quantity;
            } else {
              productQuantityMap[productId] = quantity;
            }
          });
        });
      });

      const compiledItems = Object.entries(productQuantityMap).map(([productId, quantity]) => ({
        productId,
        quantity,
      }));    
      return compiledItems;
    },
    
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


module.exports = AnalyticsService;
