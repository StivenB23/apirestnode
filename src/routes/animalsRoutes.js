const express = require('express');
const router = express.Router()
const animalsController = require('../controllers/animalsController')
router.get('/', animalsController.getAnimals)
router.get('/animals/:id', animalsController.getAnimalById)
router.post('/animals', animalsController.createAnimal)
router.put('/animals/:id', animalsController.updateAnimal)
router.delete('/animals/:id', animalsController.deleteAnimal)

module.exports = router