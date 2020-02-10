const router = require('express').Router()

router.get('/', (req, res, next) => { 
     console.log('Correspond à /players');
})

module.exports = router
