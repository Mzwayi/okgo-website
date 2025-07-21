import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import CTAButton from './CTAButton'

interface ContactFormProps {
  title?: string
  subtitle?: string
  webhookUrl?: string
  showLogisticsField?: boolean
}

interface FormData {
  fullName: string
  company: string
  email: string
  phone: string
  logisticsChallenge: string
}

export default function ContactForm({
  title = "Let's Talk Logistics",
  subtitle = "Tell us your logistics challenge and our smart engine will show you how OKgo can help.",
  webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '',
  showLogisticsField = true
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    logisticsChallenge: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // If no webhook URL is configured, simulate success for demo
      if (!webhookUrl) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          logisticsChallenge: ''
        })
        return
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'okgo-website'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          logisticsChallenge: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">{title}</h2>
        <p className="text-secondary-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="your.email@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="+27 (0) 11 123 4567"
            />
          </div>
        </div>

        {showLogisticsField && (
          <div>
            <label htmlFor="logisticsChallenge" className="block text-sm font-medium text-secondary-700 mb-2">
              Logistics Challenge / Message
            </label>
            <textarea
              id="logisticsChallenge"
              name="logisticsChallenge"
              value={formData.logisticsChallenge}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="Tell us about your logistics challenges, tracking needs, or any specific requirements..."
            />
          </div>
        )}

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>Thank you! We'll get back to you within 24 hours with custom recommendations.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span>{errorMessage}</span>
          </div>
        )}

        <CTAButton
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Submit & Get Custom Recommendations
            </>
          )}
        </CTAButton>

        <p className="text-xs text-secondary-500 text-center">
          Powered by n8n workflows • We'll analyze your needs and suggest the best OKgo solutions
        </p>
      </form>
    </div>
  )
} 