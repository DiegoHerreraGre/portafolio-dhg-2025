import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import spotifyLogo from '@/images/logos/spotify.svg'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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
              alt="logo"
              width={1320}
              height={1320}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              loading="lazy"
              placeholder="blur"
              quality={75}
            />
          </div>
        </div>
        <div className="text-justify lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Soy Diego Herrera, un desarrollador apasionado por crear soluciones
            tecnológicas.
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
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
          <article className="p-6 mt-12 shadow-lg rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
            <h4 className="flex flex-row gap-4 text-3xl font-bold justify-stretch text-zinc-800 dark:text-zinc-100">
              Playlists de
              <Image
                src={spotifyLogo}
                alt="Spotify"
                width={40}
                height={40}
                quality={75}
              />
            </h4>
            <p className="mt-4 font-medium text-center text-teal-600 animate-pulse dark:text-teal-400">
              Estas son algunas de mis listas de reproducción favoritas
            </p>
            <ul className="mt-6 space-y-4">
              <li className="transition-all transform hover:scale-105 hover:rotate-1">
                <a
                  href="https://open.spotify.com/playlist/6Hl4HtEsBbE72iTCRrtHPZ?si=a56d170ba3ab46eb"
                  className="flex items-center p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md group hover:bg-teal-50 hover:shadow-xl dark:bg-zinc-700 dark:hover:bg-zinc-600"
                >
                  <strong className="transition-colors text-zinc-900 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
                    Tunes Midnight
                  </strong>
                  <span className="text-md ml-auto transform text-[#00DA5A] transition-transform group-hover:scale-110">
                    Spotify
                  </span>
                </a>
              </li>
              <li className="transition-all transform hover:scale-105 hover:rotate-1">
                <a
                  href="https://open.spotify.com/playlist/7rwf3YJPSzIuu4mh3JI7Ow?si=b5b6710a5eac4ffd"
                  className="flex items-center p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md group hover:bg-teal-50 hover:shadow-xl dark:bg-zinc-700 dark:hover:bg-zinc-600"
                >
                  <strong className="transition-colors text-zinc-900 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
                    Electronic Remix
                  </strong>
                  <span className="text-md ml-auto transform text-[#00DA5A] transition-transform group-hover:scale-110">
                    Spotify
                  </span>
                </a>
              </li>
              <li className="transition-all transform hover:scale-105 hover:rotate-1">
                <a
                  href="https://open.spotify.com/playlist/7eMu1fmkKxbfCeGIeapp99?si=26cebc6f2f4d43c6"
                  className="flex items-center p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md group hover:bg-teal-50 hover:shadow-xl dark:bg-zinc-700 dark:hover:bg-zinc-600"
                >
                  <strong className="transition-colors text-zinc-900 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400">
                    Gaming Memento
                  </strong>
                  <span className="text-md ml-auto transform text-[#00DA5A] transition-transform group-hover:scale-110">
                    Spotify
                  </span>
                </a>
              </li>
            </ul>
          </article>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/diegof.herreragre"
              icon={InstagramIcon}
              className="mt-4"
            >
              Sígueme en Instagram
            </SocialLink>
            <SocialLink
              href="https://www.github.com/DiegoHerreraGre"
              icon={GitHubIcon}
              className="mt-4"
            >
              Sígueme en GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/diego-f-herrera-gre/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Sígueme en LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
