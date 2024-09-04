const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')

router.get('/', petController.getPets)
router.post('/createpet', petController.createPet)

module.exports = router
