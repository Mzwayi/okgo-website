import React, { useState, useEffect } from 'react'
import { ArrowUp, Phone } from 'lucide-react'
import CTAButton from './CTAButton'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col space-y-2 sm:space-y-3">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-12 h-12 sm:w-12 sm:h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 touch-manipulation"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      {/* Get Demo Button */}
      <CTAButton 
        href="/contact-us"
        className="bg-okgo-yellow hover:bg-okgo-yellow-dark text-white font-bold shadow-xl animate-pulse min-h-[48px] px-3 sm:px-4 text-sm sm:text-base touch-manipulation"
      >
        Get Demo
      </CTAButton>
      
      {/* Call Button */}
      <a
        href="tel:+27111234567"
        className="w-12 h-12 sm:w-12 sm:h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 touch-manipulation"
        aria-label="Call us"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  )
} 