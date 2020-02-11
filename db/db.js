const sqlite = require('sqlite3')
const db = new sqlite.Database('bdd_dart', err => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Connexion avec bdd_dart établie avec succès")
})

const sql_player = `create table if not exists Player(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        gameWin INTEGER,
        gameLose INTEGER,
        createdAt DATE
    );`


const sql_game = `create table if not exists Game(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100) NOT NULL,
        mode VARCHAR(100) NOT NULL,
        currentPlayerId INTEGER,
        status VARCHAR(100),
        createdAt DATE
    );`

const sql_game_player = `create table if not exists GamePlayer(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        playerId INTEGER,
        gameId INTEGER,
        remainingShot INTEGER,
        score INTEGER,
        rank INTEGER,
        order INTEGER,
        inGame BOOLEAN,
        createdAt DATE
    );`

const sql_game_shot = `create table if not exists GameShot(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        playerId INTEGER,
        gameId INTEGER,
        multiplicator INTEGER,
        sector INTEGER,
        createdAt DATE
    );`



db.run(sql_player, err => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Table Player créé avec succès")
})

db.run(sql_game, err => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Table Game créé avec succès")
})

db.run(sql_game_player, err => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Table GamePlayer créé avec succès")
})

db.run(sql_game_shot, err => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Table GameShot créé avec succès")
})



module.exports = db
