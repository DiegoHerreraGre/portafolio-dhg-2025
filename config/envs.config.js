import dotenv from 'dotenv'

dotenv.config()

const envs = {
  MTM_MAIL_PERSONAL: process.env.MTM_MAIL_PERSONAL,
  MTM_EMAIL: process.env.MTM_EMAIL,
  MTM_PASSWORD: process.env.MTM_PASSWORD,
  MONGO_URI: process.env.MONGO_URI,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
}

export default envs
