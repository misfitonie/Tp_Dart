const Game = require('../game')
const inquirer = require('inquirer')

module.exports = class Troiscentun extends Game{
    constructor(Players) {
        super(Players)
    }
    

    async play(){


        let Endgame = false
        this.setInitScores()

        while(Endgame != true){
            for(let i=0; i<this.Players.length; i++){
                let player = this.Players[i]

                console.log("C'est au tour de "+player.PlayerName)
                console.log("Ton score est de :"+ this.Players[i].PlayerScore)

                if(player.PlayerCanShoot == true){

                    for(let j=0; j<3; j++){
                        
                        let beforeScore = this.Players[i].PlayerScore
                        let nextScore = 0

                        let sector = await this.SectorHited()
                        let multi = await this.MultiBonus()
                        if(multi == "x1"){
                            nextScore = beforeScore - sector
                            if(nextScore>1){
                                this.Players[i].PlayerScore = nextScore
                                console.log("Ton nouveau score est de :"+this.Players[i].PlayerScore)
                            }
                            else if(nextScore==1){
                                console.log("Perdu ! Vous ne pouvez plus tirez !")
                                this.Players[i].PlayerCanShoot = false
                            }
                            else if(nextScore<=0){
                                console.log("Score invalide ! Votre lancer n'est pas compté !")
                                console.log("Ton score est toujours de :"+this.Players[i].PlayerScore)
                            }
                        }
                        else if(multi == "x2"){
                            console.log(beforeScore)
                            nextScore = beforeScore - (sector*2)
                            console.log(nextScore)
                            if(nextScore>1){
                                this.Players[i].PlayerScore = nextScore
                                console.log("Ton nouveau score est de :"+this.Players[i].PlayerScore)
                            }
                            else if(nextScore==1){
                                console.log("Perdu ! Vous ne pouvez plus tirez !")
                                this.Players[i].PlayerCanShoot = false
                            }
                            else if(nextScore==0){
                                console.log("Bravo ! Vous avez gagné")
                            }
                            else{
                                console.log("Score invalide ! Votre lancer n'est pas compté !")
                                console.log("Ton score est toujours de :"+this.Players[i].PlayerScore)
                            }
                        }
                        else if(multi == "x3"){
                            nextScore = beforeScore - (sector*3)
                            if(nextScore>1){
                                this.Players[i].PlayerScore = nextScore
                                console.log("Ton nouveau score est de :"+this.Players[i].PlayerScore)
                            }
                            else if(nextScore==1){
                                console.log("Perdu ! Vous ne pouvez plus tirez !")
                                this.Players[i].PlayerCanShoot = false
                            }
                            else if(nextScore<=0){
                                console.log("Score invalide ! Votre lancer n'est pas compté !")
                                console.log("Ton score est toujours de :"+this.Players[i].PlayerScore)
                            }
                        }
                        if(this.Players[i].PlayerCanShoot == false){
                            break
                        }
                    }
                }
                if(this.Players[i].PlayerScore==0){
                    Endgame = true
                    this.endGame(player)
                    break
                }
            } 
        }
    }

    setInitScores(){
        for(let i=0; i<this.Players.length; i++){
           this.Players[i].PlayerScore=301
           this.Players[i]["PlayerCanShoot"] = true
        } 
    }

    endGame(player){
        console.log("Partie fini ! Merci d'avoir jouer !")
        console.log("Notre heureux gagant est "+player)
        console.table(this.Players.sort((a, b) => (a.PlayerScore > b.PlayerScore) ? 1 : -1))
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

    async MultiBonus(){
        return await inquirer.prompt([{
            type: "list",
            message: "Quel est multiplicateur de score ?",
            name: "multi",
            choices: ["x1","x2","x3"]
        }])
        .then(response =>{
            return response.multi
        })
    }

}

