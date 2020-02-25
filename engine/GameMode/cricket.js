const Game = require('../game')

class Cricket extends Game{
    constructor(id,mode,name,currentgameId,status,createdAt) {

        super(id,mode,name,currentgameId,status,createdAt)
    }
}