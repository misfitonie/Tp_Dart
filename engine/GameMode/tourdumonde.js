const Game = require('../game')
const inquirer = require('inquirer')

module.exports = class Tourdumonde extends Game{
    constructor(Players){
        super(Players)
        this.scores = []
    }

    async play(){
        let Endgame = false

        this.setInitScores()

        while(Endgame != true){
            for(let i=0; i<this.Players.length; i++){
                let player = this.Players[i] 

                console.log("C'est au tour de "+player.PlayerName)
                console.log("prochaine cible: "+this.scores[i])

                for(let j=0; j<3; j++){
                    let sector = await this.SectorHited()
                    if(sector == this.scores[i]){
                        this.scores[i] = sector+1
                        this.Players[i].PlayerScore = player.PlayerScore+1
                    }
                    if(sector == 21){
                        break
                    }
                    console.log("prochaine cible: "+this.scores[i])
                }

                if(player.PlayerScore == 21){
                    Endgame = true
                    this.endGame(player.PlayerName)
                    break
                }
            }
        }

    }

    endGame(player){
        console.log("Partie fini ! Merci d'avoir jouer !")
        console.log("Notre heureux gagant est "+player)
        console.table(this.Players.sort((a, b) => (a.PlayerScore > b.PlayerScore) ? -1 : 1))
    }

    setInitScores(){
        for(let i=0; i<this.Players.length; i++){
           this.scores.push(1)
        } 
    }

    async SectorHited(){
        return await inquirer.prompt([{
            type: "number",
            message: "Quel secteur avez-vous touché ?",
            name: "sector",
        }])
        .then(response =>{
            return response.sector
        })
    }
}