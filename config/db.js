const { MongoClient } = require('mongodb');
console.log(process.env.MONGO_HOST);
const url = process.env.MONGO_URL;


const connection = new MongoClient(url);
connection.connect();
console.log("Connected to MongoDB server");
const db = connection.db(process.env.MONGO_DB);

module.exports = db;