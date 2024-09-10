const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')
const upload = require('../middleware/multer')

router.get('/', petController.getPets)
router.post('/createpet', upload.single('image'), petController.createPet)

module.exports = router
