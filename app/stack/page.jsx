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
  }

  return (
    <div className="mx-auto mt-12 w-full max-w-4xl p-6">
      <h2 className="mb-8 text-center text-3xl font-bold">Stack Tecnológico</h2>
      <div className="space-y-8">
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
                          <img
                            src={`https://cdn.simpleicons.org/${tech.slug}`}
                            alt={tech.name}
                            className={`mr-3 h-6 w-6 ${
                              [
                                'express',
                                'vercel',
                                'nextdotjs',
                                'github',
                              ].includes(tech.slug)
                                ? 'dark:invert'
                                : ''
                            }`}
                          />
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
