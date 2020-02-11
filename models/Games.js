const db = require('../db/db.js')

module.exports = {

    insert : async (name,mode) =>{
        const sql = `insert into Game (mode, name, currentPlayerId, status, createdAt) values
        (?,?,null,draft,?)`

        db.run(sql,[mode,name,new Date()], err => {
            if (err) {
                return console.error(err.message);
            }
        
            console.log("Nouveau Game ajouté")
        })
    },

    get : async (id) =>{
        const sql = `select * from Game where id = ?`

        const result = db.run(sql,[id], (err,rows) => {
            if (err) {
                return err.message;
            }
            return rows
        })

        return result
    }
}
