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
      <h2 className="mb-8 text-center text-3xl font-bold">
        Integrated Developer Enviorment (IDE)
      </h2>
      <div className="space-y-8">
        <div className="rounded-lg bg-white/5 p-6">
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <Link href={'https://www.jetbrains.com'}>
              <Image
                src="/jetbrains-logo.webp"
                alt="JetBrains icon"
                width={340}
                height={340}
                className="my-12 mr-3"
              />
            </Link>
            <Image
              src="/jetbrains-fondo.webp"
              alt="JetBrains image"
              width={1920}
              height={1080}
              className="rounded-2xl"
            />
            <div className="mx-auto my-12 max-w-7xl p-6">
              <h2 className="mb-6 text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
                Ecosistema JetBrains
              </h2>
              <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <p className="text-justify">
                  JetBrains ofrece un ecosistema de herramientas de desarrollo
                  diseñadas para potenciar al máximo la productividad y
                  creatividad de los desarrolladores. Su enfoque combina
                  inteligencia artificial, automatización inteligente y un
                  desempeño optimizado que redefine cómo los profesionales
                  abordan el desarrollo de software.
                </p>
                <p className="text-justify">
                  Desde editores de código innovadores hasta herramientas
                  avanzadas de colaboración, cada producto de JetBrains está
                  diseñado con atención al detalle para adaptarse perfectamente
                  a las necesidades de cada lenguaje y flujo de trabajo.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-semibold">
                      Interfaz Inteligente y Fluida:
                    </span>{' '}
                    Entornos que entienden el flujo de trabajo, sugiriendo e
                    implementando soluciones de manera proactiva.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Soporte Multiplataforma:
                    </span>{' '}
                    Compatibilidad en Mac, Windows y Linux, permitiendo trabajar
                    sin limitaciones.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Depuración y Refactorización Impecables:
                    </span>{' '}
                    Herramientas líderes ideales para optimizar código sin
                    esfuerzo.
                  </li>
                  <li>
                    <span className="font-semibold">Integración Continua:</span>{' '}
                    Conectividad perfecta con sistemas de control de versiones y
                    plataformas DevOps.
                  </li>
                </ul>
                <p className="text-justify">
                  Herramientas como{' '}
                  <span className="font-semibold">PhpStorm</span>,{' '}
                  <span className="font-semibold">WebStorm</span>,{' '}
                  <span className="font-semibold">PyCharm</span>, y muchas más,
                  convierten a JetBrains en el entorno preferido por
                  desarrolladores de todos los niveles, abordando tanto
                  aplicaciones web como móviles, backend y más.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-8 text-center text-3xl font-bold">Terminal</h2>
      <div className="space-y-8">
        <div className="rounded-lg bg-white/5 p-6">
          <div className="flex flex-col flex-wrap items-center justify-center gap-4">
            <Link href={'https://www.warp.dev'}>
              <Image
                src="/warp.webp"
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
              Warp es una terminal de nueva generación que redefine la forma en
              que los desarrolladores interactúan con su consola. Diseñada para
              maximizar la productividad, incluye características únicas como
              autocompletado inteligente en tiempo real, resaltado de sintaxis
              avanzado y una interfaz moderna e intuitiva que facilita el flujo
              de trabajo.
            </p>
            <p className="text-justify text-gray-800 dark:text-gray-200">
              Construida con Rust, Warp combina un rendimiento sobresaliente con
              eficiencia en el uso de recursos, ofreciendo tiempos de respuesta
              instantáneos y una experiencia fluida incluso en los proyectos más
              demandantes. Además, integra herramientas colaborativas y
              funcionalidades adaptadas a las necesidades de los equipos
              modernos, posicionándola como una herramienta imprescindible para
              desarrolladores que buscan innovación y eficiencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
