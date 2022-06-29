import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const Trail = mongoose.model('Trail', trailSchema)

export {
  Trail
}