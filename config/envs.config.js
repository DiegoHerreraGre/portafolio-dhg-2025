import dotenv from 'dotenv'

dotenv.config()

const envs = {
  MTM_EMAIL: process.env.MTM_EMAIL,
  MTM_PASSWORD: process.env.MTM_PASSWORD,
  MONGO_URI: process.env.MONGO_URI,
}

export default envs
