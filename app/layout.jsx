import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    template: 'Diego Herrera Gre',
    default: 'Diego Herrera Gre - Desarrollador Full Stack & Diseñador Web',
  },
  description:
    'Desarrollador Full Stack apasionado por crear experiencias web únicas y funcionales. Especializado en React, Next.js y tecnologías modernas de desarrollo web. Transformando ideas en soluciones digitales innovadoras.',
  keywords: [
    'desarrollador web',
    'full stack',
    'frontend',
    'backend',
    'react',
    'next.js',
    'javascript',
    'typescript',
    'web developer',
    'mongodb',
    'node.js',
    'express',
    'portafolio',
  ],
  authors: [
    {
      name: 'Diego Herrera Gre',
      url: 'https://tunombre.com',
    },
  ],
  creator: 'Diego Herrera Gre',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Diego Herrera Gre - Desarrollador Full Stack & Diseñador Web',
    description:
      'Portafolio profesional con proyectos y experiencia en desarrollo web',
    siteName: 'Portafolio de Diego Herrera Gre',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`h-full antialiased ${inter.className}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta
          property="og:title"
          content="Diego Herrera Gre - Desarrollador Full Stack & Diseñador Web"
        />
        <meta
          property="og:description"
          content="Desarrollador Full Stack apasionado por crear experiencias web únicas y funcionales. Especializado en React, Next.js y tecnologías modernas de desarrollo web."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/bannerprincipal.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta
          name="twitter:title"
          content="Diego Herrera Gre - Desarrollador Full Stack & Diseñador Web"
        />
        <meta
          name="twitter:description"
          content="Desarrollador Full Stack apasionado por crear experiencias web únicas y funcionales. Especializado en React, Next.js y tecnologías modernas de desarrollo web."
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/bannerprincipal.png`}
        />

        {/* LinkedIn */}
        <meta
          property="og:site_name"
          content="Portafolio de Diego Herrera Gre"
        />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="article:author"
          content="https://linkedin.com/in/diego-f-herrera-gre/"
        />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
