import * as user from '../controllers'
const router = require('express').Router()

router.get('/', user.getUsers)

module.exports = router
