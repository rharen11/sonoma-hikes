import mongoose from 'mongoose'

const trailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  totalMileage: {
    type: Number,
    min: 0,
    required: true
  },
  exposure: {
    type: String,
    enum: ["low", "moderate", "high"]
  },
  dogsAllowed: {
    type: String,
    enum: ["yes", "no"]
  }
}, {
  timestamps: true,
})

const Trail = mongoose.model('Trail', trailSchema)

export {
  Trail
}