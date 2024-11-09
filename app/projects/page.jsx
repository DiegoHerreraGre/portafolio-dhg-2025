import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import NextJS from '@/images/logos/nextjs.svg'
import Tailwind from '@/images/logos/tailwind.svg'
import MongoDB from '@/images/logos/mongodb.svg'
import React from '@/images/logos/reactjs.svg'

const projects = [
  {
    name: 'Armando Di Filippo',
    description:
      'Sitio web del reconocido economista argentino, docente e investigador universitario con 40 años de experiencia en instituciones como CEPAL. Especializado en política económica, desarrollo social y pensamiento latinoamericano. El sitio presenta su extensa obra académica, publicaciones y pensamiento económico desarrollado a lo largo de su destacada trayectoria en América Latina',
    link: {
      href: 'https://www.armandodifilippo.com',
      label: 'Armando Di Filippo',
    },
    logo: NextJS,
    production: true,
    tailwind: true,
    mongodb: true,
  },
  {
    name: 'Estoril 820',
    description:
      'Sitio web inmobiliario moderno construido con tecnologías de última generación para reemplazar la antigua versión en WordPress. Diseñado con un enfoque dinámico de marketing digital para maximizar las ventas de propiedades. La arquitectura headless garantiza tiempos de carga ultrarrápidos y una experiencia de usuario fluida optimizada para conversiones',
    link: {
      href: 'https://www.estoril820.vercel.app',
      label: 'Estoril 820',
    },
    logo: NextJS,
    production: false,
    tailwind: true,
    mongodb: true,
  },
  {
    name: 'Cyber Molina Morel',
    description:
      'Sitio web inmobiliario moderno desarrollado con las últimas tecnologías web para mejorar la experiencia del usuario y las conversiones de ventas. Construido con una arquitectura headless que asegura un rendimiento óptimo y tiempos de carga mínimos. Cuenta con un sistema de filtrado avanzado de propiedades, visualización de imágenes en alta resolución',
    link: {
      href: 'https://www.cybermolinamorel.cl',
      label: 'Cyber Molina Morel',
    },
    logo: NextJS,
    production: true,
    tailwind: true,
    mongodb: false,
  },
  {
    name: 'Landing Inmobiliaria Manquehue',
    description:
      'Landing para la Inmobiliaria Manquehue usado para Cyber Day y Black Friday. Diseñado para maximizar las conversiones de ventas de propiedades. Construido con tecnologías modernas para garantizar un rendimiento óptimo y una experiencia de usuario fluida. Incluye un sistema de chat en vivo para atención al cliente en tiempo real',
    link: {
      href: 'https://www.imanquehue.mtmdigital.cl',
      label: 'Landing Inmobiliaria Manquehue',
    },
    logo: React,
    production: true,
    tailwind: false,
    mongodb: true,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Proyectos',
  description: 'Webs creadas últimamente',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Webs creadas últimamente"
      intro="A lo largo de mi trayectoria como desarrollador web full-stack, he creado diversos proyectos web implementando las últimas tecnologías como Next.js para el renderizado del lado del servidor (SSR), React para interfaces de usuario dinámicas, TailwindCSS para estilos modernos y responsivos, y Node.js/MongoDB para el backend. Utilizo PNPM como gestor de paquetes por su eficiencia y velocidad. Mi enfoque se centra en crear aplicaciones web rápidas, escalables y con excelente experiencia de usuario, aplicando las mejores prácticas de desarrollo."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-white dark:ring-0">
              <Image
                src={project.logo}
                alt="logos de tecnologías utilizadas en el proyecto"
                width={32}
                height={32}
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            {!project.production && (
              <div className="mt-6 flex items-center justify-center">
                <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-800 dark:border-yellow-700/50 dark:bg-yellow-900/30 dark:text-yellow-300">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 16V12L14 14M12 8V8.01M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  En desarrollo
                </span>
              </div>
            )}
            {project.production && (
              <div className="mt-6 flex items-center justify-center">
                <span className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-4 py-1 text-sm font-medium text-green-800 dark:border-green-700/50 dark:bg-green-900/30 dark:text-green-300">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  En producción
                </span>
              </div>
            )}
            {project.tailwind && (
              <div className="mt-6 flex items-center space-x-2 rounded-lg bg-blue-50 p-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                <span>Desarrollado con</span>
                <Image
                  src={Tailwind}
                  width={20}
                  height={20}
                  className="inline-block"
                  alt="Tailwind logo"
                />
                <span className="font-semibold text-blue-600 dark:text-blue-300">
                  Tailwind UI
                </span>
              </div>
            )}
            {project.mongodb && (
              <div className="mt-6 flex items-center space-x-2 rounded-lg bg-green-50 p-2 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-200">
                <span>Bases de datos con</span>
                <Image
                  src={MongoDB}
                  width={20}
                  height={20}
                  className="inline-block"
                  alt="MongoDB logo"
                />
                <span className="font-semibold text-green-600 dark:text-green-300">
                  MongoDB
                </span>
              </div>
            )}
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
