const mongoose = require('mongoose')

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFood: { type: String },
    funFact: { type: String },
    status: { type: String, required: true },
    image: { type: String },
    cloudinaryId: { type: String },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Pet', petSchema)
