const mongoose = require('mongoose')

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFood: { type: String },
    funFact: { type: String },
    status: { type: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Pet', petSchema)
