const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, '0.0.0.0', (err) => {
    if(err) throw err
    console.log('The server is running on port ' + port)
})


