import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'Soy Diego Herrera, un desarrollador de software apasionado por la tecnología y el desarrollo web.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Soy Diego Herrera, un desarrollador apasionado por crear soluciones
            tecnológicas.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Mi fascinación por la tecnología comenzó en mi infancia, cuando
              tuve mi primera computadora con Windows 98. Pasaba horas
              explorando cada rincón del sistema operativo, descubriendo nuevas
              funcionalidades y, por supuesto, disfrutando de las aventuras de
              Mario Bros.
            </p>
            <p>
              Desde pequeño, mi curiosidad por el software me llevó a investigar
              y experimentar constantemente. Esta pasión por la tecnología ha
              evolucionado junto conmigo, llevándome a dominar diversos
              lenguajes de programación como JavaScript, TypeScript, y explorar
              otros como Rust y Python.
            </p>
            <p>
              Mi interés por la política y el análisis crítico me ha enseñado la
              importancia de mantener una mente abierta y no limitarme a una
              sola perspectiva. Esta misma filosofía la aplico en mi enfoque del
              desarrollo de software, donde busco constantemente las mejores
              soluciones.
            </p>
            <p>
              Actualmente, me dedico al desarrollo web y de software, utilizando
              herramientas modernas como GitHub Copilot para maximizar mi
              productividad. Cuando no estoy programando, disfruto de la
              compañía de mi adorado gato y sigo aprendiendo nuevas tecnologías,
              especialmente Bash.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/diegof.herreragre"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://www.github.com/DiegoHerreraGre"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/diego-f-herrera-gre/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:diegofherreragre@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              diegofherreragre@icloud.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
