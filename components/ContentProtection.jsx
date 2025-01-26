'use client'

import { useEffect } from 'react'

export default function ContentProtection({ children }) {
  useEffect(() => {
    const preventDefaults = (e) => {
      e.preventDefault()
      return false
    }

    const preventDevTools = () => {
      // Detectar DevTools
      const devtools = /./
      devtools.toString = function () {
        preventDefaults()
      }
      console.log('%c', devtools)
    }

    // Deshabilitar atajos de teclado
    const preventShortcuts = (e) => {
      if (
        // Ctrl + Shift + I (DevTools)
        (e.ctrlKey && e.shiftKey && e.key === 'i') ||
        // Ctrl + Shift + J (DevTools)
        (e.ctrlKey && e.shiftKey && e.key === 'j') ||
        // Ctrl + U (Ver código fuente)
        (e.ctrlKey && e.key === 'u') ||
        // F12
        e.key === 'F12'
      ) {
        preventDefaults(e)
      }
    }

    // Eventos a prevenir
    document.addEventListener('contextmenu', preventDefaults)
    document.addEventListener('keydown', preventShortcuts)
    document.addEventListener('copy', preventDefaults)
    document.addEventListener('cut', preventDefaults)
    document.addEventListener('paste', preventDefaults)
    document.addEventListener('selectstart', preventDefaults)

    // Iniciar protección contra DevTools
    preventDevTools()

    return () => {
      document.removeEventListener('contextmenu', preventDefaults)
      document.removeEventListener('keydown', preventShortcuts)
      document.removeEventListener('copy', preventDefaults)
      document.removeEventListener('cut', preventDefaults)
      document.removeEventListener('paste', preventDefaults)
      document.removeEventListener('selectstart', preventDefaults)
    }
  }, [])

  return <div className="no-select no-drag">{children}</div>
}
