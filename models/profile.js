import mongoose from 'mongoose'

const hikeSchema = new mongoose.Schema({
  trail: String,
  mileage: Number,
  timeOfDay: {
      type: String,
      enum: ["morning", "midday", "evening"]
  },
  postHike: {
      type: String,
      enum: ["great", "good", "tired", "exhausted"]
  }
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  hikes: [hikeSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
