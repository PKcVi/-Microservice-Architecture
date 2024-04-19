const bcrypt = require('bcrypt');
const Client = require('../models/Client');
const Vendor = require('../models/Vendor');

const AuthServices = {
  signupClient: async (fullname, password, email) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const client = new Client({ fullname, password: hashedPassword, email });
    await client.save();
    return client;
  },

  signupVendor: async (fullname, password, email, shopName, shopCountry) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const vendor = new Vendor({ fullname, password: hashedPassword, email, shopName, shopCountry });
    await vendor.save();
    return vendor;
  },

  signinClient: async (email, password) => {
    const client = await Client.findOne({ email });
    if (!client) throw new Error('Invalid client credentials');

    const passwordMatch = await bcrypt.compare(password, client.password);

    if (!passwordMatch) throw new Error('Invalid client credentials');

    const token = 'example_token'; 
    return token;
  },

  signinVendor: async (email, password) => {
    const vendor = await Vendor.findOne({ email });
    if (!vendor) throw new Error('Invalid vendor credentials');

    const passwordMatch = await bcrypt.compare(password, vendor.password);

    if (!passwordMatch) throw new Error('Invalid vendor credentials');

    const token = 'example_token';
    return token;
  },
  
  getVendorInfo: async (email) => {
    const vendor = await Vendor.findOne({ email:email });
    return vendor;
  },

  updateVendorInfo: async (email, fullname, shopName) => {
    const vendor = await Vendor.findOne({ email:email });

    if (!vendor) {
      throw new Error('Vendor not found');
    }

    if (fullname) {
      vendor.fullname = fullname;
    }

    if (shopName) {
      vendor.shopName = shopName;
    }

    await vendor.save();
    return vendor;
  },
  getClientInfo: async (email) => {
    const client = await Client.findOne({ email:email });
    return client;
  },

  updateVendorInfo: async (email, fullname, password) => {
    const client = await Client.findOne({ email:email });

    if (!client) {
      throw new Error('Vendor not found');
    }

    if (fullname) {
      client.fullname = fullname;
    }

    if (password) {
      const saltRounds = 10;
      client.password = await bcrypt.hash(password, saltRounds);
    }

    await client.save();
    return client;
  },
};

module.exports = AuthServices;
