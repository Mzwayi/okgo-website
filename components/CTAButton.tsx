import React from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'lg'
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className,
  external = false,
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    {
      'py-3 px-6 text-base': size === 'default',
      'py-4 px-8 text-lg': size === 'lg',
      'bg-okgo-yellow hover:bg-okgo-yellow-dark text-white': variant === 'primary' && !disabled,
      'bg-white hover:bg-gray-50 text-okgo-yellow border-2 border-okgo-yellow': variant === 'secondary' && !disabled,
      'bg-gray-400 text-gray-600 cursor-not-allowed': disabled,
    },
    className
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  )
} 