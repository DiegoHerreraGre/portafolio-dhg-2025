'use server'

import { connectMongoDB } from '../../../config/mongodb.config'
import { NewsletterDTO } from '../../../dto/newsletter.dto'
import { NewsletterDAO } from '../../../dao/newsletter.dao'
import sendEmail from '@/services/email.service'
import envs from '@/config/envs.config'
import PermisionMiddleware from '@/middlewares/permisions.middlewares'

const { MTM_MAIL_PERSONAL } = envs

export async function GET(request) {
  return PermisionMiddleware(request)
}

export async function POST(request) {
  try {
    await connectMongoDB()

    const formData = await request.formData()
    const email = formData.get('email')
    const selectOption = formData.get('selectOption')

    if (!email) {
      return new Response(JSON.stringify({ message: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const newsletterDTO = new NewsletterDTO({
      email,
      selectOption,
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

    const newsletterDAO = new NewsletterDAO()
    await newsletterDAO.create(newsletterDTO)

    // Email para el administrador
    const adminEmailContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Nueva Suscripción al Newsletter</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px;">
            <h1 style="color: #0066cc;">Nuevo contacto hecho</h1>
            <p>Por favor revise MongoDB para ver la opción:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Fecha de suscripción:</strong> ${new Date().toLocaleString()}</p>
            </div>
        </div>
    </body>
    </html>
    `

    // Email para el usuario
    const userEmailContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>¡Contacto hecho!</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; padding: 20px;">
            <h1 style="color: #0066cc;">¡Muchas gracias por contactarme!</h1>
            <p>En un plazo de 48 hrs te contactaré para ayudarte a tu gestión:</p>
            <p>Te contactaré para entender mejor tu proyecto y necesidades. Durante nuestra comunicación:</p>
            <ul>
                <li>Analizaremos los requerimientos específicos de tu proyecto</li>
                <li>Prepararé una cotización detallada y personalizada</li>
                <li>Resolveré cualquier duda que tengas sobre el proceso</li>
            </ul>
            <p>¡Gracias por considerar mis servicios!</p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
                <p>Saludos cordiales,<br>Diego Herrera Gre</p>
            </div>
        </div>
    </body>
    </html>
    `

    // Enviar emails
    const adminEmail = MTM_MAIL_PERSONAL

    await Promise.all([
      sendEmail(adminEmail, 'Nuevo contacto hecho', adminEmailContent, true),
      sendEmail(
        email,
        '¡Te contactaré muy prontamente!',
        userEmailContent,
        true,
      ),
    ])

    return new Response(
      JSON.stringify({
        message: '¡Gracias por suscribirte!',
        success: true,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Newsletter error:', error)

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

export async function PUT(request) {
  return PermisionMiddleware(request)
}

export async function DELETE(request) {
  return PermisionMiddleware(request)
}

export async function PATCH(request) {
  return PermisionMiddleware(request)
}

export async function OPTIONS(request) {
  return PermisionMiddleware(request)
}

export async function HEAD(request) {
  return PermisionMiddleware(request)
}
