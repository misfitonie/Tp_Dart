const mongoose = require('mongoose');
const mongo = 'mongodb://127.0.0.1:27017/bdd_dart'

mongoose.connect(mongo, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})

mongoose.connection.on("open", () => { 
  console.log('Connexion établie mon capitaine !') 
})

mongoose.connection.on('error', (err) => { 
  console.log('Erreur de connexion :', err)
})

module.exports = mongoose