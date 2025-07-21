import React from 'react'
import Head from 'next/head'
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Office',
    details: ['Johannesburg, South Africa', 'Sandton City Office Park', 'Building 2, 3rd Floor']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+27 (0) 11 123 4567', '+27 (0) 82 987 6543 (Mobile)']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@ok-go.co.za', 'support@ok-go.co.za']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed']
  }
]

const supportOptions = [
  {
    icon: MessageSquare,
    title: 'Live Chat Support',
    description: 'Get instant help from our support team during business hours',
    action: 'Start Chat',
    href: '#chat'
  },
  {
    icon: Calendar,
    title: 'Schedule a Demo',
    description: 'Book a personalized demo to see OKgo in action',
    action: 'Book Demo',
    href: '/contact-us#demo'
  },
  {
    icon: Phone,
    title: 'Emergency Support',
    description: '24/7 support for critical tracking issues',
    action: 'Call Now',
    href: 'tel:+27821234567'
  }
]

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Get Started with OKgo Supply Chain Visibility</title>
        <meta name="description" content="Contact OKgo to discuss your supply chain visibility needs. Book a demo, get support, or speak with our logistics experts about your challenges." />
        <meta property="og:title" content="Contact Us - Get Started with OKgo Supply Chain Visibility" />
        <meta property="og:description" content="Contact OKgo to discuss your supply chain visibility needs. Book a demo, get support, or speak with our logistics experts about your challenges." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0">
            {/* TODO: Add contact hero background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/hero-supply-chain-bg.jpg')`, // Placeholder - replace with contact-specific image
              }}
            />
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-okgo-yellow/20"></div>
            
            {/* Additional dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 text-center text-white section-padding">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Let's Talk Logistics
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Ready to transform your supply chain visibility? Our logistics experts are here to help you get started.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <ContactForm
                  title="Tell Us About Your Logistics Challenge"
                  subtitle="Fill out the form below and our smart engine will analyze your needs and provide custom recommendations within 24 hours."
                />
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary-900 mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-secondary-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Options */}
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                    Other Ways to Connect
                  </h3>
                  <div className="space-y-4">
                    {supportOptions.map((option, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                        <div className="flex items-start space-x-3">
                          <option.icon className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-secondary-900 mb-1">
                              {option.title}
                            </h4>
                            <p className="text-sm text-secondary-600 mb-3">
                              {option.description}
                            </p>
                            <CTAButton 
                              href={option.href}
                              variant="secondary"
                              className="text-xs py-2 px-4"
                            >
                              {option.action}
                            </CTAButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* n8n Automation Note */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">
                  Smart Response System
                </h2>
                <p className="text-primary-700 mb-6 leading-relaxed">
                  Our contact form is powered by intelligent n8n workflows that analyze your logistics challenges and automatically generate custom recommendations. 
                  You'll receive personalized solutions within 24 hours, not generic sales pitches.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    <span className="text-primary-700">Automated Analysis</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    <span className="text-primary-700">Custom Recommendations</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    <span className="text-primary-700">24-Hour Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Get quick answers to common questions about OKgo's supply chain visibility solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    How quickly can we get started?
                  </h3>
                  <p className="text-secondary-600">
                    Most implementations can begin within 2 weeks. Our team will work with you to create a phased rollout plan that minimizes disruption.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Do you integrate with existing systems?
                  </h3>
                  <p className="text-secondary-600">
                    Yes, we have pre-built integrations for major ERP, WMS, and logistics platforms. We also support custom API integrations and n8n workflows.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    What's the typical ROI timeline?
                  </h3>
                  <p className="text-secondary-600">
                    Most customers see ROI within 3-4 months through reduced losses, improved efficiency, and better customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    How does pricing work?
                  </h3>
                  <p className="text-secondary-600">
                    We offer flexible pricing based on the number of tracked assets and features needed. Contact us for a custom quote based on your requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Is training provided?
                  </h3>
                  <p className="text-secondary-600">
                    Yes, we provide comprehensive training for your team, including hands-on workshops and ongoing support to ensure successful adoption.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    What about data security?
                  </h3>
                  <p className="text-secondary-600">
                    All data is encrypted end-to-end and stored in compliant data centers. We're GDPR and POPIA compliant with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join the growing number of African companies transforming their supply chain visibility. 
              Let's discuss how OKgo can help solve your specific logistics challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                href="#contact-form" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
                onClick={(e) => {
                  e?.preventDefault()
                  document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Fill Out Contact Form
              </CTAButton>
              
              <CTAButton 
                href="tel:+27111234567" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call +27 (0) 11 123 4567
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 