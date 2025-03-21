'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from '@/config/recaptcha.config'

export default function RecaptchaProvider({ children }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'body',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
