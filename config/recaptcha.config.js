import envs from '@/config/envs.config'

const { RECAPTCHA_SECRET_KEY, NEXT_PUBLIC_RECAPTCHA_SITE_KEY } = envs

const verifyRecaptcha = async (token) => {
  try {
    if (!token) {
      throw new Error('Token de reCAPTCHA no proporcionado')
    }

    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    )

    if (!response.ok) {
      throw new Error('Error en la verificación del reCAPTCHA')
    }

    const data = await response.json()

    if (!data.success || data.score < 0.5) {
      throw new Error('Verificación de reCAPTCHA fallida o score muy bajo')
    }

    return data.success
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error)
    return false
  }
}

export { verifyRecaptcha, NEXT_PUBLIC_RECAPTCHA_SITE_KEY }
