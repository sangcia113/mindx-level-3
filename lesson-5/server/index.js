const express = require('express');
require('dotenv').config();
const router = require('./routes/index');
const logRequestTime = require('./middlewares/request-time-mdw');
const app = express();
const PORT = process.env.PORT;

app.use('/api', logRequestTime, router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

const connectToDB = async () => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    return 'done.';
};

connectToDB();
