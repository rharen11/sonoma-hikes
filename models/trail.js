import mongoose from 'mongoose'

const trailSchema = new mongoose.Schema({
  name: {
    type: String
  },
  totalMileage: {
    type: Number,
    min: 0
  },
  exposure: {
    type: String
  },
  dogsAllowed: {
    type: String
  }
}, {
  timestamps: true,
})

const Trail = mongoose.model('Trail', trailSchema)

export {
  Trail
}