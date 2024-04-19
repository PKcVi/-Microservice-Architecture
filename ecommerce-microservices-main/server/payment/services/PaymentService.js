const Payment = require('../models/Payment');

const PaymentService = {
  createPayment: async (userEmail, paymentId, amount) => {
    try {
      const newPayment = new Payment({ userEmail, paymentId, amount });
      await newPayment.save();
      console
      return newPayment;
    } catch (error) {
      console.error('Error in createPayment:', error);
      throw error;
    }
  },

  executePayment: async (paymentId) => {
    try {
      const payment = await Payment.findOne({ paymentId });

      if (payment) {
        payment.status = 'Completed';
        await payment.save();

        return payment;
      } else {
        throw new Error('Payment not found');
      }
    } catch (error) {
      console.error('Error in executePayment:', error);
      throw error;
    }
  },

};

module.exports = PaymentService;
