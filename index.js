
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000; // Use 3000 as a default if PORT is not defined in the environment variables

app.get('/', (req, res) => {
    res.send('API Oxford 3000')
});

app.listen(port, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('The server is running on port ' + port);
});