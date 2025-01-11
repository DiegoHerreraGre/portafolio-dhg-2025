'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Stack() {
  const techCategories = {
    Frontend: [
      {
        name: 'TypeScript',
        slug: 'typescript',
        description: 'Tipado estático para JavaScript',
      },
      {
        name: 'JavaScript',
        slug: 'javascript',
        description: 'Lenguaje de programación web',
      },
      {
        name: 'React',
        slug: 'react',
        description: 'Biblioteca UI de componentes',
      },
      { name: 'HTML5', slug: 'html5', description: 'Estructura web moderna' },
      { name: 'CSS3', slug: 'css3', description: 'Estilos y diseño web' },
      {
        name: 'Next.js',
        slug: 'nextdotjs',
        description: 'Framework de React para la web con SSR',
      },
    ],
    Backend: [
      {
        name: 'Node.js',
        slug: 'nodedotjs',
        description: 'Runtime de JavaScript para servidor',
      },
      {
        name: 'Express',
        slug: 'express',
        description: 'Framework web para Node.js para uso de Backend',
      },
      {
        name: 'MongoDB',
        slug: 'mongodb',
        description: 'Base de datos NoSQL - No relacionales',
      },
      {
        name: 'PHP',
        slug: 'php',
        description: 'Lenguaje de programación para desarrollo web',
      },
      {
        name: 'MySQL',
        slug: 'mysql',
        description: 'Sistema de gestión de bases de datos relacionales',
      },
      {
        name: 'Turso',
        slug: 'turso',
        description: 'Base de datos SQL en la nube',
      },
      {
        name: 'Python',
        slug: 'python',
        description: 'Lenguaje versátil para backend y scripting',
      },
      {
        name: 'Rust',
        slug: 'rust',
        description:
          'Lenguaje de sistemas de alto rendimiento (en aprendizaje)',
      },
    ],
    DevOps: [
      {
        name: 'NGINX',
        slug: 'nginx',
        description: 'Servidor web de alto rendimiento',
      },
      {
        name: 'Vercel',
        slug: 'vercel',
        description: 'Plataforma de deployment',
      },
      { name: 'Git', slug: 'git', description: 'Control de versiones' },
      {
        name: 'GitHub',
        slug: 'github',
        description: 'Hosting de repositorios',
      },
    ],
    'CMS & SEO': [
      {
        name: 'Strapi',
        slug: 'strapi',
        description:
          'Sistema de gestión de contenidos novedoso y autohospedado',
      },
      {
        name: 'Docker',
        slug: 'docker',
        description: 'Contenedorización de aplicaciones',
      },
      {
        name: 'WordPress',
        slug: 'wordpress',
        description: 'Sistema de gestión de contenidos',
      },
      {
        name: 'Google',
        slug: 'google',
        description: 'Suite de herramientas SEO',
      },
      {
        name: 'Meta',
        slug: 'meta',
        description: 'Marketing en redes sociales',
      },
      {
        name: 'Apache',
        slug: 'apache',
        description: 'Servidor web tradicional',
      },
    ],
    'Herramientas de terminal': [
      {
        name: 'PM2',
        slug: 'pm2',
        description: 'Gestión de procesos en Node.js',
      },
      {
        name: 'Zsh',
        slug: 'zsh',
        description: 'Shell interactiva y personalizable',
      },
      {
        name: 'curl',
        slug: 'curl',
        description: 'Herramienta de transferencia de datos',
      },
      {
        name: 'Homebrew',
        slug: 'homebrew',
        description: 'Gestor de paquetes para macOS',
      },
      {
        name: 'NVM',
        slug: 'nvm',
        description: 'Gestor de versiones de Node.js',
      },
      {
        name: 'Docker-Compose',
        slug: 'dockercompose',
        description: 'Definición y ejecución de contenedores Docker',
      },
    ],
  }

  const handleImageError = (e) => {
    e.target.src = '/images/fallback-icon.svg' // Asegúrate de tener una imagen de respaldo
  }

  const TechIcon = ({ slug, name }) => {
    const isInverted = [
      'express',
      'vercel',
      'nextdotjs',
      'github',
      'rust',
      'python',
    ].includes(slug)

    return (
      <div className="relative mr-3 h-6 w-6">
        <Image
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={`${name} icon`}
          width={24}
          height={24}
          className={`object-contain ${isInverted ? 'dark:invert' : ''}`}
          onError={handleImageError}
          unoptimized // Usar esto para imágenes externas pequeñas
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className="mx-auto mt-12 w-full max-w-4xl p-6">
      <h2 className="mb-8 text-center text-6xl font-bold">Stack Tecnológico</h2>
      <div className="space-y-8">
        <Editor />
        {Object.entries(techCategories).map(([category, technologies]) => (
          <div key={category} className="rounded-lg bg-white/5 p-6">
            <h3 className="mb-4 text-xl font-semibold">{category}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-800 dark:text-gray-200">
                      Tecnología
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-800 dark:text-gray-200">
                      Descripción
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {technologies.map((tech) => (
                    <tr
                      key={tech.slug}
                      className="transition-colors hover:bg-white/5"
                    >
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <TechIcon slug={tech.slug} name={tech.name} />
                          <span>{tech.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-800 dark:text-gray-200">
                          {tech.description}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Editor = () => {
  return (
    <div className="mx-auto mt-12 w-full max-w-4xl p-6">
      <h2 className="mb-8 text-center text-3xl font-bold">Editor de Código</h2>
      <div className="space-y-8">
        <div className="rounded-lg bg-white/5 p-6">
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <Link href={'https://www.cursor.com'}>
              <Image
                src="/cursor.jpg"
                alt="Cursor icon"
                width={340}
                height={340}
                className="my-12 mr-3 dark:invert"
              />
            </Link>
            <Image
              src="/cursorimage.jpg"
              alt="Cursor image"
              width={1920}
              height={1080}
              className="rounded-2xl"
            />
            <p className="text-justify text-gray-800 dark:text-gray-200">
              Cursor es un editor de código con una interfaz intuitiva, soporte
              para múltiples lenguajes de programación y herramientas avanzadas
              de depuración. Su rendimiento excepcional permite a los
              desarrolladores trabajar de manera eficiente y sin interrupciones.
            </p>
            <p className="text-justify text-gray-800 dark:text-gray-200">
              Construido como un fork de Visual Studio Code, Cursor no solo es
              extremadamente rápido, sino que también consume muy poca memoria
              en comparación con Visual Studio Code, que al estar basado en
              JavaScript, funciona como un navegador web abierto.
            </p>
          </div>
        </div>
      </div>
      <h2 className="my-8 text-center text-3xl font-bold">Terminal</h2>
      <div className="space-y-8">
        <div className="rounded-lg bg-white/5 p-6">
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <Link href={'https://www.warp.dev'}>
              <Image
                src="/warp.png"
                alt="Warp icon"
                width={340}
                height={340}
                className="my-12 mr-3"
              />
            </Link>
            <Image
              src="/warpimage.webp"
              alt="Warp image"
              width={1920}
              height={1080}
              className="mb-12 rounded-2xl shadow-2xl"
            />
            <p className="text-justify text-gray-800 dark:text-gray-200">
              Warp es una terminal que busca mejorar la experiencia de los
              programadores incluyendo características como autocompletado,
              resaltado de sintaxis y una UI/UX amigable.
            </p>
            <p className="text-justify text-gray-800 dark:text-gray-200">
              Al igual que Zed, Warp está construido en Rust, lo que le permite
              ser extremadamente rápido y eficiente en el uso de recursos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
