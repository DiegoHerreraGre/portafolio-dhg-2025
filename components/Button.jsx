import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-indigo-800 font-semibold text-indigo-100 hover:bg-indigo-700 active:bg-indigo-800 active:text-indigo-100/70 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:active:bg-indigo-700 dark:active:text-indigo-100/70',
  secondary:
    'bg-indigo-50 font-medium text-indigo-900 hover:bg-indigo-100 active:bg-indigo-100 active:text-indigo-900/60 dark:bg-indigo-800/50 dark:text-indigo-300 dark:hover:bg-indigo-800 dark:hover:text-indigo-50 dark:active:bg-indigo-800/50 dark:active:text-indigo-50/70',
}

export function Button({ variant = 'primary', className, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
