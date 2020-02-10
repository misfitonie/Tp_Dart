const router = require('express').Router()

router.get('/', (req, res, next) => { 
     console.log('Correspond à /gfd');
})

router.post('/', (req, res, next) => { 
     console.log('Correspond à /players');
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

router.get('/:id', (req, res, next) => { 
     const id = req.params.id
     res.format({
          json: () => {
               res.status(200).send({
                    player : {
                         id : 0,
                         name : "toto"
                    }
               })
          },

          html : () => {
               res.redirect(301, '/players/'+id+'/edit')
          }
     })
})

router.get('/:id/edit', (req, res, next) => { 
     console.log('Correspond à /dgfdgfdg');
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
