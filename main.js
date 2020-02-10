var inquirer = require('inquirer');
var joueurs = [];


inquirer
  .prompt([
    {
    name : "nbJoueur",
    type: "number",
    message : "Sélectionnez le nombre de joueur"
    }
    
    
  ])
  .then(answers => { 
      for (let i = 0; i < answers.nbJoueur; i++){
          inquirer.prompt([{
              name: "nomJoueur",
              type: "input",
              message : "Quel est votre nom ?"
          }
              
          ])
          .then(answers => {
              
          })
    }
    
  });