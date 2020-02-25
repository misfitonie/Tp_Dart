const inquirer = require('inquirer');
const Player = require('./engine/player')
const Tourdumonde = require('./engine/GameMode/Tourdumonde')
const Troiscentun = require('./engine/GameMode/Troiscentun')
const Cricket = require('./engine/GameMode/Cricket')
var Name = []

async function NbPlayer(){

  return await inquirer.prompt([
    {
      type: "number",
      message: "Combien de joueur ?",
      name: "NbPlayer",
      default: 1,
    }
  ]).then(response =>{
    return response.NbPlayer
  })
}


async function GetNamePlayer(){
  let pseudo = await inquirer.prompt([
    {
      type: "input",
      message: "Quel est votre nom/pseudo ?",
      name: "NamePlayer",
    }
  ]).then(response =>{
    return response.NamePlayer
  })
  Name.push(pseudo)  
}

async function GameMode(){

  return await inquirer.prompt([
    {
      type: "list",
      message: "Sélectionnez un mode de jeu",
      choices: ['tour du monde','301','cricket'],
      name: "GameMode",
    }

  ]).then(response =>{
    return response.GameMode
  })
}

async function start(){
  let nb = await NbPlayer()

  for (let i=0; i<nb; i++){
    await GetNamePlayer()
  }

  let TabPlayer = []

  for (let i=0; i<Name.length; i++){
    TabPlayer.push(new Player(Name[i]))
  }
  
  let mode = await GameMode()
  if(mode == "tour du monde"){
    let game = new Tourdumonde(TabPlayer)
    game.play()
  }
  else if(mode == "301"){
    let game = new Troiscentun(TabPlayer)
    game.play()
  }
  else if(mode == "cricket"){
    let game = new Cricket(TabPlayer)
    game.play()
  }
}

start()