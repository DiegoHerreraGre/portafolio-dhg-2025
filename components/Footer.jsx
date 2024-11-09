import Link from 'next/link'
import Image from 'next/image'
import Tailwind from '@/images/logos/tailwind.svg'
import NextJS from '@/images/logos/nextjs.svg'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-indigo-100 pb-16 pt-10 dark:border-indigo-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-indigo-800 dark:text-indigo-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
              </div>
              <p className="text-sm text-indigo-400 dark:text-indigo-500">
                &copy; {new Date().getFullYear()} Diego Herrera Gre. Todos los
                derechos reservados.
              </p>
              <div className="flex items-center gap-3">
                <p className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Tecnologías usadas
                  <Image
                    width={16}
                    height={16}
                    src={NextJS}
                    alt="Next.js Logo"
                    className="transition-transform hover:scale-110"
                  />
                  <Image
                    width={16}
                    height={16}
                    src={Tailwind}
                    alt="Tailwind CSS Logo"
                    className="transition-transform hover:scale-110"
                  />
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
