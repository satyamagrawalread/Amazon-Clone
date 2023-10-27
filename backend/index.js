require('dotenv').config();   // loads env variables from .env file into process.env
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./db/conn');

const Products = require('./models/productSchema');

const DefaultData = require('./defaultdata');
const cors = require('cors');
const router = require('./routes/router');

app.use(express.json());
app.use(cors());
app.use(router);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log('Server is listening on PORT:', PORT);
})

DefaultData();