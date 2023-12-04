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
