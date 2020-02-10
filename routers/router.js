const router = require('express').Router()
const gameRouter = require('./game.js')
const playerRouter = require('./player.js')

router.use('/games', gameRouter);
router.use('/players', playerRouter);

router.get('/', (req, res, next) => { 
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
             res.redirect(301,'/games')
        }
   })
})

module.exports = router;