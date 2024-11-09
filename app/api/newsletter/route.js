'use server'

import { connectMongoDB } from '../../../config/mongodb.config'
import { NewsletterDTO } from '../../../dto/newsletter.dto'
import { NewsletterDAO } from '../../../dao/newsletter.dao'

export async function POST(request) {
  try {
    // Conectar a MongoDB
    await connectMongoDB()

    // Obtener datos del formulario
    const formData = await request.formData()
    const email = formData.get('email')

    // Validar email
    if (!email) {
      return new Response(JSON.stringify({ message: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Crear y validar DTO
    const newsletterDTO = new NewsletterDTO({
      email,
      subscriptionDate: new Date(),
      active: true,
    })

    try {
      newsletterDTO.validate()
    } catch (validationError) {
      return new Response(
        JSON.stringify({ message: validationError.message }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    // Crear entrada en base de datos
    const newsletterDAO = new NewsletterDAO()
    await newsletterDAO.create(newsletterDTO)

    return new Response(
      JSON.stringify({
        message: '¡Gracias por contactar!',
        success: true,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Newsletter error:', error)

    // Manejar error de duplicado
    if (error.code === 11000) {
      return new Response(
        JSON.stringify({
          message: 'Este email ya está registrado',
          success: false,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    return new Response(
      JSON.stringify({
        message: 'Error processing subscription',
        success: false,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
