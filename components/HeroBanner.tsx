import React from 'react'
import { Play } from 'lucide-react'
import CTAButton from './CTAButton'

interface HeroBannerProps {
  title: string
  subtitle: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  tertiaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export default function HeroBanner({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
  backgroundImage = '/hero-supply-chain-bg.jpg'
}: HeroBannerProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-okgo-yellow/20"></div>
        
        {/* Additional dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-md">
            {subtitle}
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <CTAButton 
              href={primaryCTA.href} 
              size="lg"
              className="bg-white text-primary-600 hover:bg-white/95 hover:text-primary-700 shadow-xl font-semibold"
            >
              {primaryCTA.text}
            </CTAButton>
            
            {tertiaryCTA && (
              <CTAButton 
                href={tertiaryCTA.href}
                size="lg"
                className="bg-white/20 border-2 border-white/40 text-white hover:bg-white/30 hover:border-white/60 shadow-lg backdrop-blur-md font-medium"
              >
                {tertiaryCTA.text}
              </CTAButton>
            )}
            
            {secondaryCTA && (
              <CTAButton 
                href={secondaryCTA.href}
                size="lg"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-lg backdrop-blur-md"
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryCTA.text}
              </CTAButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 