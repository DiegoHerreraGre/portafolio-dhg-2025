'use server'

import mongoose from 'mongoose'
import envs from './envs.config.js'

const { MONGO_URI } = envs

let isConnected = false

export const connectMongoDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
      socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
    })
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(`Error: ${error}`)
    throw new Error('Failed to connect to MongoDB')
  }
}

connectMongoDB()
