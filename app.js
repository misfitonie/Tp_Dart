const express = require('express')
const app = express()
const router = require('./routers/router.js')
const port = 3030

app.use('/',router);

app.listen(port, function (){
    console.log('Lancé sur le port :'+ port)
})
