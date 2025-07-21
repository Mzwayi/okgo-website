import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Menu, X, LogIn } from 'lucide-react'
import CTAButton from './CTAButton'
import { cn } from '@/utils/cn'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Technology', href: '/technology' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about-us' },
  { name: 'Contact', href: '/contact-us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col">
              {/* OKgo Logo Image */}
              <div className="flex items-center">
                <Image
                  src="/okgo-logo.png"
                  alt="OKgo - A Tracker Company Enhanced by Roambee"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </div>
              {/* Taglines */}
              <div className="flex flex-col mt-1">
                <div className="text-xs font-medium text-okgo-black leading-tight">
                  A Tracker Company
                </div>
                <div className="text-xs font-medium text-okgo-yellow leading-tight">
                  Enhanced by Roambee
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-secondary-700 hover:text-okgo-yellow font-medium transition-colors duration-200',
                  router.pathname === item.href && 'text-okgo-yellow'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <CTAButton href="/contact-us" className="bg-okgo-yellow hover:bg-okgo-yellow-dark text-white font-bold">
              Get a Demo
            </CTAButton>
            <a
              href="https://view.roambee.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-okgo-yellow text-okgo-yellow hover:bg-okgo-yellow hover:text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-secondary-700" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-secondary-700 hover:text-okgo-yellow font-medium transition-colors duration-200 px-2 py-1',
                    router.pathname === item.href && 'text-okgo-yellow'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col space-y-3">
                <CTAButton href="/contact-us" className="w-full bg-okgo-yellow hover:bg-okgo-yellow-dark text-white font-bold">
                  Get a Demo
                </CTAButton>
                <a
                  href="https://view.roambee.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-okgo-yellow text-okgo-yellow hover:bg-okgo-yellow hover:text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 