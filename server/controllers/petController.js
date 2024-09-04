const Pet = require('../model/petModel')
const mongoose = require('mongoose')

module.exports = {
  getPets: async (req, res) => {
    try {
      const pet = await Pet.find().sort({ date: 1 })
      res.status(200).json(pet)
      if (!pet) {
        throw new Error('pet not found')
      }
    } catch (error) {
      res.status(500).send('Server error')
      console.log(error)
    }
  },
  createPet: async (req, res) => {
    try {
      const newPet = await Pet.create({
        name: req.body.name,
        age: req.body.age,
        favoriteFood: req.body.favoriteFood,
        funFact: req.body.funFact,
        status: req.body.status,
        // image: req.file.filename,
      })
      await newPet.save()
      res.json(newPet)
      console.log('Pet Profile Added!')
    } catch (error) {
      res.status(500).json({ message: 'Error Creating Pet' })
      console.log(error)
    }
  },
}
