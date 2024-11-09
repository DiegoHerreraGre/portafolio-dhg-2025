import dotenv from 'dotenv'

dotenv.config()

export const envs = {
  MONGO_URI: process.env.MONGO_URI,
}
