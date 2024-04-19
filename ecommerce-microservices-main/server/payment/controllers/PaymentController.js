const PaymentService = require('../services/PaymentService');
const paypal = require('paypal-rest-sdk'); 

paypal.configure({
  mode: 'sandbox',
  client_id: 'AaG0FEuCziHPWTP7EvjPjGIu_UtMtPZq5vX8nUhF',
  client_secret: 'EFC7IXriNL0c7IxIWsiJjSbW7ADk3e0X_B2Qf4SeJlqiI9OFM8Bb5guF6W-IEOTRsaiK1Iq4qw3fziIp',
});

const PaymentController = {
  createPayment: async (req, res) => {
    try {
      const { userEmail, paymentId, amount } = req.body;

      const newPayment = await PaymentService.createPayment(userEmail, paymentId, amount);

      const createPaymentJson = {
        intent: 'sale',
        payer: {
          payment_method: 'paypal',
        },
        redirect_urls: {
          return_url: 'http://localhost:3000',
          cancel_url: 'http://localhost:3004/api/payment/cancel',
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: 'Payment for Services',
                  sku: 'item',
                  price: amount,
                  currency: 'USD',
                  quantity: 1,
                },
              ],
            },
            amount: {
              currency: 'USD',
              total: amount,
            },
            description: 'Payment for services provided',
          },
        ],
      };

      paypal.payment.create(createPaymentJson, function (error, payment) {
        if (error) {
          throw error;
        } else {
          console.log('Payment Created Successfully');
          console.log(payment);

          const approvalUrl = payment.links.find(link => link.rel === 'approval_url').href;
          res.json({ paymentId: newPayment.paymentId, approvalUrl });
        }
      });
    } catch (error) {
      console.error('Error in createPayment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  executePayment: async (req, res) => {
    try {
      const { paymentId } = req.body;

      const executedPayment = await PaymentService.executePayment(paymentId);

      res.status(200).json({ executedPayment });
    } catch (error) {
      console.error('Error in executePayment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

};

module.exports = PaymentController;
