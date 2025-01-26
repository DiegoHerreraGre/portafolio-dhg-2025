'use client'

import Image from 'next/image'

const ImageBlock = '/lock.svg' // Asumiendo que el SVG está guardado en public/images/

export default function ProtectedImage({ alt, ...props }) {
  return (
    <div className="relative">
      <Image
        src={ImageBlock} // Usa la imagen proporcionada o el candado por defecto
        alt={alt}
        width={50}
        height={50}
        loading="lazy"
        quality={75}
        className={`no-drag ${props.className || ''} m-12`}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{
          pointerEvents: 'none',
          ...props.style,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  )
}
