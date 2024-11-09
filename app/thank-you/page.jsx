import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

export const metadata = {
  title: '¡Gracias por tu mensaje!',
  description: 'Me contactaré contigo prontamente.',
}

export default function ThankYou() {
  return (
    <motion
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SimpleLayout
        title={
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent">
            ¡Gracias por tu mensaje!
          </span>
        }
        intro={
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Me contactaré contigo lo más pronto posible. Mientras tanto,
              puedes revisar mi blog o proyectos.
            </p>
            <div className="flex gap-4">
              <Link
                href="/articles"
                className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Ver artículos
              </Link>
              <Link
                href="/projects"
                className="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        }
      />
    </motion>
  )
}
