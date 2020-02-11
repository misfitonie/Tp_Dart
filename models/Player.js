const db = require('../db/db.js')

const schema = db.Schema({
    mode: String, 
    name: String,
    currentPlayerId: null | String | Number,
    status: String,
    createdAt: Date
  }, {versionKey: false}); 
  
  let Player = db.model('Player', schema, 'players');

module.exports = {

    async insert(name,email){
        let player = new Player({
            name: name,
            email: email,
            gameWin: 0,
            gameLost: 0,
            createdAt: new Date()
        })
    
        return player.save()
    },

    async get(id){
        return Player.findOne({_id: id})
    }
}