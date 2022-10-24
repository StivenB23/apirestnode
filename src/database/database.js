const mysql = require('promise-mysql');
const config = require('../config')
const connection= mysql.createConnection({
    host: config.HOST,
    database: config.DATABASE,
    user: config.USER,
    password: config.PASSWORD,
    ssl: true
})

const getConecction = () =>{
    return connection;
}

module.exports = getConecction