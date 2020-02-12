const router = require('express').Router()
const Game = require('../models/Games.js')
router.get('/', (req, res, next) => { 
     console.log('Correspond à /games');
     res.end()
})

router.post('/', async (req, res, next) => { 
     const { mode, name } = req.body
     const game = await Game.insert(mode,name)
          
     res.format({
          json: () => {
               res.status(201).send(game)
          },

          html: () => {
               res.redirect(301,'/games/'+id)
          }
     })
     
})

router.get('/new', (req, res, next) => { 
    res.format({
        json: () => {
             res.status(406).send({
                  error: {    
                       type: 'NOT_API_AVAILABLE',
                       message: 'La route n\'existe pas'
                  }
             })
        },

        html: () => {
             res.render('games/new')
        }
   })
})

router.get('/:id', async (req, res, next) => { 
     const id = req.params.id
     const game = await Game.get(id)
     res.format({
          json: () => {
               res.status(200).send(game)
          },

          html : () => {
               res.redirect(301, '/games/'+id+'/edit')
          }
     })
})

router.get('/:id/edit', (req, res, next) => { 
    const id = req.params.id
    res.format({
        json: () => {
            res.status(406).send({
                error: {    
                     type: 'NOT_API_AVAILABLE',
                     message: 'La route n\'existe pas'
                }
           })
        },

        html : () => {
            res.render('games/edit', {
                id: id
            })
        }
   })
    
})

router.patch('/:id', (req, res, next) => { 
    const id = req.params.id
    console.log("trd")
    res.format({
         json: () => {
              res.status(200).send({
                  game : {
                      id: id,
                      name: "testPatch"
                  }
              })
         },

         html : () => {
             console.log("trjhgfsd")
              res.redirect(301, '/games')
         }
    })
})

router.delete('/:id', (req, res, next) => { 
    const id = req.params.id
     res.format({
          json: () => {
               res.status(204).send()
          },

          html : () => {
               res.redirect(301, '/games')
          }
     })
})

module.exports = router
