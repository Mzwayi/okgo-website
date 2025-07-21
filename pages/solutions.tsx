import React from 'react'
import Head from 'next/head'
import { Truck, Shield, BarChart3, MapPin, Clock, AlertTriangle, Zap, Eye, Brain } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SolutionCard from '@/components/SolutionCard'
import CTAButton from '@/components/CTAButton'

const coreSolutions = [
  {
    id: 'asset-intelligence',
    icon: Shield,
    title: 'Asset Intelligence',
    description: 'Gain complete visibility over your asset landscape with OKgo\'s cutting-edge asset intelligence solution. The solution provides an auditable trail for asset location and planning, crucial for asset utilisation, inventory management, quality control, and compliance.',
    videoUrl: '/videos/asset-tracking.mp4',
    videoPoster: '/videos/asset-tracking-poster.jpg',
    features: [
      'Enhanced Security and Compliance',
      'Optimised Asset Utilisation',
      'Improved Asset Integrity',
      'Predictive Maintenance',
      'Streamlined Operations',
      'Automated Inventory Count',
      'Real-time Asset Location Tracking',
      'Condition Monitoring and Alerts'
    ],
    useCases: [
      'Returnable and reusable asset tracking',
      'Large containers to small facility items',
      'Asset utilisation optimization',
      'Compliance and audit trail management'
    ],
    benefits: [
      'Complete control and insight into supply chain assets',
      'Reduced asset loss and theft',
      'Improved operational efficiency',
      'Enhanced security and compliance'
    ]
  },
  {
    id: 'shipment-intelligence',
    icon: Truck,
    title: 'Shipment Intelligence',
    description: 'Develop a proactive approach to managing your entire shipment journey with OKgo\'s advanced shipment intelligence solution. From first to last-mile, OKgo empowers businesses to optimise every aspect of their supply chain operations.',
    videoUrl: '/videos/shipment-tracking.mp4',
    videoPoster: '/videos/asset-tracking-poster.jpg',
    features: [
      'Comprehensive Condition Monitoring',
      'Increased Delivery Reliability',
      'Reduced Risk of Damage',
      'Enhanced Security',
      'Optimised Delivery Routes',
      'Improved Cash Flow Management',
      'Strategic Decision-Making',
      'Multi-modal Transport Tracking'
    ],
    useCases: [
      'End-to-end shipment visibility',
      'Cross-border tracking across Africa',
      'Multi-modal transport (land, air, ocean)',
      'Proactive exception management'
    ],
    benefits: [
      'Comprehensive visibility and control',
      'Optimised delivery performance',
      'Enhanced customer satisfaction',
      'Improved supply chain efficiency'
    ]
  }
]

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Solutions - OKgo Supply Chain Visibility</title>
        <meta name="description" content="Comprehensive supply chain visibility solutions including real-time tracking, asset intelligence, and predictive insights for African logistics." />
        <meta property="og:title" content="Solutions - OKgo Supply Chain Visibility" />
        <meta property="og:description" content="Comprehensive supply chain visibility solutions including real-time tracking, asset intelligence, and predictive insights for African logistics." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0">
            {/* TODO: Add solutions hero background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/hero-supply-chain-bg.jpg')`, // Placeholder - replace with solutions-specific image
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
              Smarter Logistics Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive supply chain visibility solutions designed for the unique challenges of African logistics
            </p>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              {coreSolutions.map((solution, index) => (
                <SolutionCard
                  key={index}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  href={`#${solution.id}`}
                />
              ))}
            </div>

            <div className="text-center">
              <CTAButton href="/contact-us" size="lg">
                Explore a Use Case
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Detailed Solution Breakdowns */}
        {coreSolutions.map((solution, index) => (
          <section key={solution.id} id={solution.id} className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                      {solution.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Benefits</h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <CTAButton href="/case-studies">
                    Learn More About {solution.title}
                  </CTAButton>
                </div>

                <div className={index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}>
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <video
                        className="w-full h-auto"
                        controls
                        poster={solution.videoPoster}
                        preload="metadata"
                      >
                        <source src={solution.videoUrl} type="video/mp4" />
                        <p className="text-gray-600 p-4">
                          Your browser does not support the video tag. 
                          <a href={solution.videoUrl} className="text-primary-600 hover:underline ml-1">
                            Download the video
                          </a>
                        </p>
                      </video>
                    </div>
                    
                    {/* Use cases section below video */}
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                      <h3 className="text-lg font-bold mb-3">Key Use Cases</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {solution.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-xs font-semibold">{idx + 1}</span>
                            </div>
                            <span className="text-sm">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Technology Integration */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless Integration with Your Existing Systems
              </h2>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                OKgo integrates with your existing logistics, ERP, and warehouse management systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">API Integration</h3>
                <p className="text-gray-100">RESTful APIs for seamless data exchange</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Dashboards</h3>
                <p className="text-gray-100">Custom dashboards for your specific needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-100">Machine learning for predictive analytics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how OKgo can address your specific logistics challenges and deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CTAButton 
                  href="/contact-us" 
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
                >
                  Schedule a Consultation
                </CTAButton>
                
                <CTAButton 
                  href="/case-studies" 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  View Case Studies
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 