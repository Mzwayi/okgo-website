import React from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@/utils/cn'

interface TestimonialProps {
  quote: string
  author: string
  title: string
  company: string
  avatar?: string
  className?: string
}

export default function Testimonial({
  quote,
  author,
  title,
  company,
  avatar,
  className
}: TestimonialProps) {
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative',
      className
    )}>
      <Quote className="w-12 h-12 text-okgo-yellow mb-6 opacity-50" />
      
      <blockquote className="text-lg text-secondary-700 mb-8 leading-relaxed italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-okgo-yellow to-okgo-yellow-dark rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-semibold text-lg">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div>
          <div className="font-semibold text-secondary-900">{author}</div>
          <div className="text-sm text-secondary-600">{title}</div>
                      <div className="text-sm text-okgo-yellow font-medium">{company}</div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full opacity-50 -z-10"></div>
    </div>
  )
} 