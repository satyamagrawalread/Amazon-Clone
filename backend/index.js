require('dotenv').config();   // loads env variables from .env file into process.env
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log('Server is listening on PORT:', PORT);
})