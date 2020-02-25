const Game = require('../game')
const inquirer = require('inquirer')


module.exports = class Tourdumonde extends Game{
    constructor(Players){
        super(Players)
        this.scores = []
    }

    play(){
        console.log("\nDésolé ce mode de jeu n'est pas encore disponible !\n")
    }
}

