import React from 'react'
import Head from 'next/head'
import { Smartphone, Cloud, Shield, Zap, Workflow, Database, Globe, Lock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

const technologyFeatures = [
  {
    icon: Smartphone,
    title: 'Smart Tracking Devices',
    description: 'BLE, GPS, and cellular-enabled devices for comprehensive asset tracking',
    features: [
      'Multi-mode connectivity (BLE, GPS, 2G/3G/4G)',
      'Long battery life (up to 5 years)',
      'Rugged, weatherproof design',
      'Temperature and shock sensors',
      'Tamper detection and alerts',
      'Solar charging options available'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Platform',
    description: 'Scalable cloud infrastructure with real-time analytics and reporting',
    features: [
      'Real-time data processing',
      'Scalable to millions of devices',
      'Multi-region deployment',
      'Custom dashboard creation',
      'Advanced analytics and insights',
      'Mobile and web applications'
    ]
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description: 'AI-powered analytics engine for predictive insights and optimization',
    features: [
      'Machine learning algorithms',
      'Predictive delay analysis',
      'Route optimization',
      'Risk assessment scoring',
      'Performance benchmarking',
      'Custom reporting tools'
    ]
  }
]

const integrationPartners = [
  { name: 'SAP', category: 'ERP Systems' },
  { name: 'Oracle', category: 'ERP Systems' },
  { name: 'Microsoft Dynamics', category: 'ERP Systems' },
  { name: 'Salesforce', category: 'CRM Systems' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Microsoft Teams', category: 'Communication' },
  { name: 'Webhook Integrations', category: 'Custom Systems' },
  { name: 'REST APIs', category: 'Custom Systems' }
]

export default function TechnologyPage() {
  return (
    <>
      <Head>
        <title>Technology - OKgo Supply Chain Visibility Platform</title>
        <meta name="description" content="Advanced technology stack powering OKgo's supply chain visibility solutions, including smart devices, cloud platform, and AI analytics." />
        <meta property="og:title" content="Technology - OKgo Supply Chain Visibility Platform" />
        <meta property="og:description" content="Advanced technology stack powering OKgo's supply chain visibility solutions, including smart devices, cloud platform, and AI analytics." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0">
            {/* TODO: Add technology hero background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/hero-supply-chain-bg.jpg')`, // Placeholder - replace with technology-specific image
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
              Our Technology Advantage
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Cutting-edge devices, cloud infrastructure, and AI-powered analytics designed for African logistics challenges
            </p>
          </div>
        </section>

        {/* Technology Stack Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Complete Technology Stack
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From smart devices to cloud analytics, our technology stack is built for reliability, scalability, and performance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {technologyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-secondary-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Leadership Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            {/* Text Content */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Technology is Pioneering the Future
              </h2>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                OKgo's platform is a leader in modern supply chain visibility technology. Leveraging Roambee's robust technology architecture, it has been designed for flexibility and adaptability to meet your unique business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Universal Asset Monitoring</h3>
                <p className="text-secondary-600">
                  Whether monitoring shipments or keeping tabs on operational assets like bins, totes, trailers, trolleys, and cages, our platform stands apart from other solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Intelligent Data Integration</h3>
                <p className="text-secondary-600">
                  Using APIs and webhooks, we seamlessly blend information from your ERP, TMS, WMS, or advanced planning systems with real-time sensor data and external information from shipping lines, airlines, freight forwarders, and weather services.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Single Dashboard Visibility</h3>
                <p className="text-secondary-600">
                  Link your existing sensors, IoT or edge devices (such as vehicle tracking or RFID devices) into our platform for superior visibility – all in one unified dashboard.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-primary-600" />
                <span className="text-secondary-700">Accurate ETAs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-primary-600" />
                <span className="text-secondary-700">End-to-End Visibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-primary-600" />
                <span className="text-secondary-700">Multi-System Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Workflow className="w-6 h-6 text-primary-600" />
                <span className="text-secondary-700">Flexible Architecture</span>
              </div>
            </div>

            {/* Technology Architecture Diagram - Full Width */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  Platform Architecture Overview
                </h3>
                <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                  Explore our comprehensive technology architecture that powers intelligent supply chain visibility across Africa
                </p>
              </div>
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/platform-screenshots/technology-architecture-diagram.png" 
                  alt="OKgo Technology Architecture Diagram showing Predictive Supply Chain Intelligence, Proactive Observability, Reactive Monitoring, APIs, Webhooks, and sensor connectivity" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <CTAButton href="/contact-us" size="lg">
                Experience Our Platform
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Platform Security & Scalability */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Enterprise-Grade Security & Scalability
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Built with security, compliance, and scalability in mind for enterprise deployments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">AES Encryption</h3>
                <p className="text-secondary-600">End-to-end encryption for all data transmission</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Multi-Region</h3>
                <p className="text-secondary-600">Deployed across multiple African data centers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Auto-Scaling</h3>
                <p className="text-secondary-600">Automatically scales with your business growth</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Compliance</h3>
                <p className="text-secondary-600">GDPR, POPIA, and industry standards compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Pre-built connectors to popular business systems and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrationPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
                  <div className="text-lg font-semibold text-secondary-900 mb-1">
                    {partner.name}
                  </div>
                  <div className="text-sm text-secondary-500">
                    {partner.category}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <CTAButton href="/contact-us" size="lg">
                Discuss Your Integration Needs
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to See Our Technology in Action?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Schedule a technical demo and see how our platform can integrate with your existing systems
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                href="/contact-us" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
              >
                Schedule Technical Demo
              </CTAButton>
              
              <CTAButton 
                href="/solutions" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                View Solutions
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 