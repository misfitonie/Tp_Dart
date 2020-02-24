const db = require('../db/db.js')


const schema = db.Schema({
    mode : String,
    name : String,
    currentPlayerId : Number,
    status : String,
    createdAt: Date
  }, {versionKey: false}); 
  
  let Game = db.model('Game', schema, 'games');


module.exports = {

    async insert(mode,name){
        let game = new Game({
            mode: mode,
            name: name,
            currentPlayerId: null,
            status: 'draft',
            createdAt: new Date()
        })
    
        return game.save()
    },

    async get(id){
        return Game.findOne({_id: id})
    },

    async getAll(){
        return Game.find({})
    },

    async delete(id){
        return Game.deleteOne({_id:id})
    },

    async patch(id,result){
        return Game.findOneAndUpdate({_id:id},result)
    }
}
