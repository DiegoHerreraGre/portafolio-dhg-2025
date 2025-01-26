'use client'

import { useEffect } from 'react'

export default function Watermark({ text }) {
  useEffect(() => {
    const watermark = document.createElement('div')
    watermark.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      font-size: 14px;
      font-family: 'Arial', sans-serif;
      color: rgba(0, 0, 0, 0.15);
      padding: 8px 12px;
      border-radius: 4px;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
      backdrop-filter: blur(2px);
      pointer-events: none;
      z-index: 9999;
      user-select: none;
      white-space: nowrap;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      transition: opacity 0.3s ease;
    `
    watermark.innerText = text || '© Contenido Protegido'
    document.body.appendChild(watermark)

    // Efecto hover sutil al pasar el mouse cerca
    const handleMouseMove = (e) => {
      const rect = watermark.getBoundingClientRect()
      const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2),
      )

      if (distance < 200) {
        watermark.style.opacity = '0.3'
      } else {
        watermark.style.opacity = '0.15'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.body.removeChild(watermark)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [text])

  return null
}
