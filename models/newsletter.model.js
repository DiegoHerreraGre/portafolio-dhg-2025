import mongoose from 'mongoose'

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },
  selectOption: {
    type: String,
    required: true,
  },
  subscriptionDate: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
})

const Newsletter =
  mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema)

export default Newsletter
