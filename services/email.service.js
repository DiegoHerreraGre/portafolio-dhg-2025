'use server'

import nodemailer from 'nodemailer'
import envs from '@/config/envs.config'

const { MTM_EMAIL, MTM_PASSWORD } = envs
const transporter = nodemailer.createTransport({
  host: 'mail.mtmdigital.cl',
  port: 587,
  secure: false,
  auth: {
    user: MTM_EMAIL,
    pass: MTM_PASSWORD,
  },
})

async function sendEmail(to, subject, text, isHtml = false) {
  try {
    await transporter.verify()
    await transporter.sendMail({
      from: MTM_EMAIL,
      to,
      subject,
      [isHtml ? 'html' : 'text']: text,
    })
    console.log('Correo enviado con éxito')
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  }
}

export default sendEmail
