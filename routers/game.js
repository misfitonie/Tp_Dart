const router = require('express').Router()

router.get('/', (req, res, next) => { 
     console.log('Correspond à /games');
     res.end()
})

router.post('/', (req, res, next) => { 
    console.log('Correspond à /games');
    res.end()
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

router.get('/:id', (req, res, next) => { 
    const id = req.params.id
     res.format({
          json: () => {
               res.status(200).send({
                    game : {
                         id : 0,
                         name : "toto"
                    }
               })
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
