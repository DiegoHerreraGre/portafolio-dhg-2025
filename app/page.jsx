import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import logoUAH from '@/images/logos/logo-uah.svg'
import logoMTM from '@/images/logos/logo-mtm.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-indigo-100 stroke-indigo-400 dark:fill-indigo-100/10 dark:stroke-indigo-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-indigo-400 dark:stroke-indigo-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-indigo-100 stroke-indigo-400 dark:fill-indigo-100/10 dark:stroke-indigo-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-indigo-400 dark:stroke-indigo-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="group -m-1 p-1"
      {...props}
      target="_blank"
      referrerPolicy="strict-origin-when-cross-origin"
    >
      <Icon className="h-10 w-10 fill-indigo-500 transition group-hover:fill-indigo-600 dark:fill-indigo-400 dark:group-hover:fill-indigo-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-indigo-100 p-6 dark:border-indigo-700/40"
    >
      <h2 className="flex text-sm font-semibold text-indigo-900 dark:text-indigo-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3 uppercase">¡Contáctate conmigo!</span>
      </h2>
      <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">
        Contáctate para recibir información sobre mis servicios y promociones.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-indigo-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-indigo-800/5 placeholder:text-indigo-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-indigo-700 dark:bg-indigo-700/[0.15] dark:text-indigo-200 dark:placeholder:text-indigo-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          ENVIAR
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-indigo-800/5 ring-1 ring-indigo-900/5 dark:border dark:border-indigo-700/50 dark:bg-indigo-800 dark:ring-0">
        <Image
          src={role.logo}
          alt="logos usados"
          className="h-10 w-10 rounded-full bg-white"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-indigo-900 dark:text-indigo-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-indigo-500 dark:text-indigo-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-indigo-400 dark:text-indigo-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'MTM Diseño y Publicidad',
      title: 'Team Leader',
      logo: logoMTM,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'MTM Diseño y Publicidad',
      title: 'Gestor de Base de Datos',
      logo: logoMTM,
      start: '2022',
      end: '2024',
    },
    {
      company: 'Universidad Alberto Hurtado',
      title: 'Profesor',
      logo: logoUAH,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-indigo-100 p-6 dark:border-indigo-700/40">
      <h2 className="flex text-sm font-semibold text-indigo-900 dark:text-indigo-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Trabajo</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-3 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-indigo-100 shadow-md shadow-indigo-800/5 ring-1 ring-indigo-900/5 sm:w-72 sm:rounded-2xl dark:bg-indigo-800 dark:ring-0',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-indigo-800 sm:text-5xl dark:text-indigo-100">
            Desarrollador Full Stack y cientista político
          </h1>
          <p className="mt-6 text-base text-indigo-600 dark:text-indigo-400">
            Me dedico al desarrollo web integral y la gestión de proyectos
            digitales. Además, soy un apasionado por la tecnología, la política,
            la historia y la economía.
          </p>
          <div className="mt-6 flex gap-8">
            <SocialLink
              href="https://www.instagram.com/diegof.herreragre"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.github.com/DiegoHerreraGre"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/diego-f-herrera-gre/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
