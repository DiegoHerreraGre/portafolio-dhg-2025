import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Landing Page Básica',
    id: 'tier-basic',
    priceMonthly: '3 UF',
    description:
      'Página de aterrizaje ideal para promocionar un producto o servicio',
    features: [
      'Diseño con TailwindCSS',
      'Landing responsive',
      'MongoDB gratis (500MB)',
      'GA4 incluido',
      'Plan Hobby de Vercel',
      'Nodemailer básico (100 emails/mes)',
    ],
    mostPopular: false,
  },
  {
    name: 'Sitio Web Profesional',
    id: 'tier-pro',
    priceMonthly: '15 UF',
    description: 'Sitio web completo para pequeñas y medianas empresas',
    features: [
      'Todo lo del plan básico más:',
      'Hasta 5 páginas',
      'MongoDB Atlas (2GB)',
      'Plan Pro en Vercel',
      'Nodemailer Pro (1000 emails/mes)',
      'Soporte técnico 8/5',
      'SSR y optimización SEO',
    ],
    mostPopular: true,
  },
  {
    name: 'Solución Empresarial',
    id: 'tier-enterprise',
    priceMonthly: 'Desde 40 UF',
    description: 'Desarrollo web personalizado para grandes empresas',
    features: [
      'Todo lo del plan profesional más:',
      'Páginas ilimitadas',
      'MongoDB Atlas Dedicated',
      'Backend personalizado',
      'Nodemailer Enterprise',
      'Soporte técnico 24/7',
      'Desarrollo a medida',
    ],
    mostPopular: false,
  },
  {
    name: 'Plan de Migración',
    id: 'tier-migration',
    priceMonthly: '10 UF',
    description: 'Actualiza tu sitio web a tecnologías modernas',
    features: [
      'Migración de contenido',
      'Integración con TailwindCSS',
      'Optimización de rendimiento',
      'Testing completo',
      'Capacitación técnica',
      'MongoDB migración asistida',
      '3 meses de soporte',
    ],
    mostPopular: false,
  },
  {
    name: 'Mantenimiento Web',
    id: 'tier-maintenance',
    priceMonthly: '2 UF mensuales',
    description: 'Mantén tu sitio web funcionando de manera óptima',
    features: [
      'Actualizaciones de seguridad',
      'Backups diarios',
      'Monitoreo 24/7',
      'Soporte técnico',
      'Ajustes menores',
      'Informes mensuales',
      'SLA garantizado',
    ],
    mostPopular: true,
  },
  {
    name: 'Desarrollo Avanzado',
    id: 'tier-advanced',
    priceMonthly: '25 UF',
    description: 'Desarrollo web complejo con funcionalidades avanzadas',
    features: [
      'Aplicaciones web complejas',
      'Integración de APIs',
      'MongoDB Atlas Pro',
      'SSR/SSG optimizado',
      'CI/CD personalizado',
      'Testing automatizado',
      'Arquitectura escalable',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 animate-pulse text-balance text-5xl font-semibold tracking-tight text-gray-900 antialiased sm:text-6xl dark:text-gray-200">
            Un precio solo para ti
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8 dark:text-gray-400">
          Escoge el plan que mejor se adapte a tus necesidades para tener una
          asesoría personalizada y un servicio de calidad.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'transition-all duration-300 hover:scale-110 lg:z-10 lg:rounded-[2rem] hover:lg:rounded-[5.5rem]'
                  : 'lg:mt-8',
                tierIdx === 0
                  ? 'lg:rounded-bl-[1rem] lg:rounded-tr-[2rem]'
                  : '',
                tierIdx === tiers.length - 1
                  ? 'lg:rounded-br-[1rem] lg:rounded-tl-[2rem]'
                  : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 dark:bg-slate-700',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'text-teal-600 dark:text-teal-300'
                        : 'text-gray-900 dark:text-gray-300',
                      'text-lg/8 font-semibold',
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-teal-600/10 px-2.5 py-1 text-center text-xs/5 font-semibold text-teal-600 dark:bg-teal-300/10 dark:text-teal-200">
                      Más elegido
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-300">
                    {tier.priceMonthly}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-200"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-teal-600 dark:text-teal-200"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
