const { AsyncLocalStorage } = require("async_hooks");
require('dotenv').config();

module.exports = {
    mongodb: {
        host: process.env.HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    }
}