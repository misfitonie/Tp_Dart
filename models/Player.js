const db = require('../db/db.js')

const schema = db.Schema({
    name: String,
    email : String,
    gameWin : Number,
    gameLost : Number,
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
    },

    async getAll(){
        return Player.find({})
    },

    async delete(id){
        return Player.deleteOne({_id:id})
    },

    async patch(id,result){
        return Player.findOneAndUpdate({_id:id},result)
    }


}