const { MongoClient } = require('mongodb');
const dbConfig = require('./db.config.js');

const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}`;

const connection = new MongoClient(url);
connection.connect();
console.log("Connected to MongoDB server");
const db = connection.db(dbConfig.DB);

module.exports = db;