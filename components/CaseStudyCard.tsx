import React from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface CaseStudyCardProps {
  title: string
  description: string
  image?: string
  icon?: LucideIcon
  industry?: string
  stats?: {
    label: string
    value: string
    trend?: 'up' | 'down'
  }[]
  href: string
  category?: string
  className?: string
}

export default function CaseStudyCard({
  title,
  description,
  image,
  icon,
  industry,
  stats,
  href,
  category,
  className
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="block group">
      <div className={cn(
        'bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 transform hover:-translate-y-1',
        className
      )}>
        {/* Image */}
        {image ? (
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            {icon ? (
              React.createElement(icon, { className: "w-16 h-16 text-white opacity-50" })
            ) : (
              <TrendingUp className="w-16 h-16 text-white opacity-50" />
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {(category || industry) && (
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
              {category || industry}
            </div>
          )}
          
          <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-secondary-600 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <span className="text-2xl font-bold text-primary-600">
                      {stat.value}
                    </span>
                    {stat.trend === 'up' && (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
} 