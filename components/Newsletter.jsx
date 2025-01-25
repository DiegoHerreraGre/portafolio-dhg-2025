'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

function Newsletter() {
  const router = useRouter()
  const [status, setStatus] = useState({
    message: '',
    success: false,
    loading: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ ...status, loading: true })

    try {
      const formData = new FormData(e.target)
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          message: data.message || '¡Gracias por suscribirte!',
          success: true,
          loading: false,
        })
        e.target.reset()

        // Esperar 1 segundo y redirigir
        setTimeout(() => {
          router.push('/thank-you')
        }, 1000)
      } else {
        throw new Error(data.message || 'Error al procesar la suscripción')
      }
    } catch (error) {
      setStatus({
        message: error.message || 'Ocurrió un error, intenta nuevamente',
        success: false,
        loading: false,
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3 uppercase tracking-wider">
          ¡Contáctate conmigo!
        </span>
      </h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Contáctate para recibir información sobre mis servicios y promociones.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-hidden focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <select
          name="selectOption"
          id="selectOption"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] text-zinc-900 shadow-md shadow-zinc-800/5 focus:border-teal-500 focus:outline-hidden focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        >
          <option value="default">Seleccione una opción</option>
          <option value="Quiero cotizar un desarrollo web">
            Quiero cotizar un desarrollo web
          </option>
          <option value="Quiero clases de programación">
            Quiero clases de programación
          </option>
          <option value="Quiero una asesoría">Quiero una asesoría</option>
          <option value="Otro">Otro</option>
        </select>
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            className="flex-none transition-colors"
            disabled={status.loading}
          >
            {status.loading ? 'Enviando...' : 'ENVIAR'}
          </Button>
          {status.message && (
            <p
              className={`text-sm font-medium transition-colors ${
                status.success ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

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
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export default Newsletter
