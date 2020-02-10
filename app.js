const express = require('express')
const app = express()
const router = require('./routers/router.js')
const port = 3030
const path = require('path')
const methodOverride = require('method-override')

app.set('views', './views')
app.set('view engine', 'pug')
app.use('/',router);
app.use(express.static('./assets'))
app.use(methodOverride('_method'))

app.listen(port, function (){
    console.log('Lancé sur le port :'+ port)
})
