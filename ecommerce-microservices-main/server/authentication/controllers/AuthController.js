const AuthServices = require('../services/AuthServices');
const bcrypt = require('bcrypt');

const AuthController = {
  signupClient: async (req, res) => {
    try {
      const { fullname, password, email } = req.body;
      const client = await AuthServices.signupClient(fullname, password, email);
      res.status(201).json({ client });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  signupVendor: async (req, res) => {
    try {
      const { fullname, password, email, shopName, shopCountry } = req.body;
      const vendor = await AuthServices.signupVendor(fullname, password, email, shopName, shopCountry);
      res.status(201).json({ vendor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  signinClient: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await AuthServices.signinClient(email, password);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  signinVendor: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await AuthServices.signinVendor(email, password);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getVendorInfo: async (req, res) => {
    try {
      const email = req.body.userEmail;
      const vendor = await AuthServices.getVendorInfo(email);
      res.status(200).json({ vendor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateVendorInfo: async (req, res) => {
    try {
      const { userEmail, updatedInfo } = req.body;
      const { fullname, shopName } = updatedInfo;
      const updatedVendor = await AuthServices.updateVendorInfo(userEmail, fullname, shopName);
      res.status(200).json({ updatedVendor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getClientInfo: async (req, res) => {
    try {
      const email = req.body.userEmail;
      const client = await AuthServices.getClientInfo(email);
      res.status(200).json({ client });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateClientInfo: async (req, res) => {
    try {
      const { userEmail, updatedInfo } = req.body;
      const { fullname, shopName } = updatedInfo;
      const updatedVendor = await AuthServices.updateVendorInfo(userEmail, fullname, shopName);
      res.status(200).json({ updatedVendor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = AuthController;
