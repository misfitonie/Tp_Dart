const router = require('express').Router()
const Player = require ('../models/Player.js')

router.get('/', (req, res, next) => { 
     console.log('Correspond à /gfd');
})

router.post('/', async (req, res, next) => { 
     const { name, email } = req.body
     const player = await Player.insert(name,email)
          
     res.format({
          json: () => {
               res.status(201).send(player)
          },

          html: () => {
               res.redirect(301,'/players/'+id)
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
               res.render('players/new')
          }
     })
})

router.get('/:id', async (req, res, next) => { 
     const id = req.params.id
     const player = await Player.get(id)
     res.format({
          json: () => {
               res.status(200).send(player)
          },

          html : () => {
               res.redirect(301, '/players/'+id+'/edit')
          }
     })
})

router.get('/:id/edit', (req, res, next) => { 
     res.end()
})

router.patch('/:id', (req, res, next) => { 
     const id = req.params.id
     res.format({
          json: () => {
               res.status(204).send({
                    player : {
                         id: id,
                         name: "testPatch"
                     }
               })
          },

          html : () => {
               res.redirect(301, '/players')
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
               res.redirect(301, '/players')
          }
     })
})



module.exports = router
