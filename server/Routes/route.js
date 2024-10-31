const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('running successfully')
})

module.exports = app;