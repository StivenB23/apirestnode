const dotenv = require('dotenv').config();
module.exports = {
    HOST: process.env.HOST || 'localhost',
    DATABASE: process.env.DATABASE || 'localhost',
    USER: process.env.USER || 'root',
    PASSWORD: process.env.PASSWORD || '',
  }