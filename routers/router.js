const router = require('express').Router()
const gameRouter = require('./game.js')
const playerRouter = require('./player.js')

router.use('/games', gameRouter);
router.use('/players', playerRouter);

module.exports = router;