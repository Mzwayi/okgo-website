import React from 'react'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  features?: string[]
  className?: string
}

export default function SolutionCard({
  icon: Icon,
  title,
  description,
  href,
  features,
  className
}: SolutionCardProps) {
  const CardContent = () => (
    <div className={cn(
      'group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-1',
      className
    )}>
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-okgo-yellow to-okgo-yellow-dark rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-okgo-yellow transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-secondary-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-secondary-600">
              <div className="w-1.5 h-1.5 bg-okgo-yellow rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {href && (
        <div className="flex items-center text-okgo-yellow font-semibold group-hover:text-okgo-yellow-dark transition-colors duration-300">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
} 