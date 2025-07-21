import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Truck, Shield, BarChart3, Building2, Star, Ship, Plane, Factory, ShoppingCart, Wrench, Package, Zap, CheckCircle, ArrowRight, Play, Users, Target, TrendingUp, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import CTAButton from '@/components/CTAButton'

const industries = [
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    icon: Shield,
    description: 'Ensure cold chain integrity and regulatory compliance',
    pain: 'Temperature excursions and compliance failures risk patient safety and revenue',
    solution: 'Continuous monitoring ensures product integrity throughout the supply chain',
    benefit: '99.9% cold chain compliance, reduced regulatory risk, enhanced patient safety'
  },
  {
    id: 'automotive',
    name: 'Automotive & Manufacturing',
    icon: Wrench,
    description: 'Streamline just-in-time delivery and complex supply chains',
    pain: 'Production delays from supply chain disruptions cost you millions',
    solution: 'Real-time visibility prevents costly production stops',
    benefit: '45% reduction in stockouts, 30% faster deliveries'
  },
  {
    id: 'fmcg',
    name: 'FMCG & Consumer Goods',
    icon: Package,
    description: 'Reduce spoilage and optimize inventory management',
    pain: 'Product losses and expired inventory eat into your profits',
    solution: 'Temperature monitoring and predictive analytics prevent waste',
    benefit: '35% reduction in losses, 60% faster inventory reconciliation'
  },
  {
    id: 'logistics',
    name: 'Logistics Providers',
    icon: Truck,
    description: 'Enhance service delivery and customer satisfaction',
    pain: 'Lack of visibility damages customer relationships and reputation',
    solution: 'End-to-end tracking builds trust and competitive advantage',
    benefit: '90% improvement in delivery predictability, 50% fewer complaints'
  },
  {
    id: 'retail',
    name: 'Retail & Distribution',
    icon: ShoppingCart,
    description: 'Optimize cross-border logistics and customer experience',
    pain: 'Unpredictable deliveries frustrate customers and hurt sales',
    solution: 'Multi-modal tracking ensures on-time delivery promises',
    benefit: '40% faster customs clearance, improved customer satisfaction'
  },
  {
    id: 'manufacturing',
    name: 'Industrial Manufacturing',
    icon: Factory,
    description: 'Secure high-value equipment and raw materials',
    pain: 'Asset theft and damage threaten your operational continuity',
    solution: 'Advanced security monitoring protects valuable assets',
    benefit: 'Complete asset protection, reduced insurance costs'
  },
  {
    id: 'mining',
    name: 'Mining & Resources',
    icon: Building2,
    description: 'Track valuable commodities across challenging terrain',
    pain: 'Remote operations make asset tracking nearly impossible',
    solution: 'Satellite-enabled tracking works anywhere in Africa',
    benefit: 'Full visibility in remote locations, enhanced security'
  }
]

const impactMetrics = [
  { value: '25%', label: 'Less Route Deviation', subtext: 'Average improvement' },
  { value: '80%', label: 'Faster Incident Response', subtext: 'Real-time alerts' },
  { value: '10x', label: 'ROI Within 3 Months', subtext: 'Proven results' },
]

const solutions = [
  {
    icon: Shield,
    title: 'Asset Intelligence',
    description: 'Gain complete visibility over your asset landscape with cutting-edge asset intelligence solution providing an auditable trail for asset location and planning.',
    features: [
      'Enhanced Security and Compliance',
      'Optimised Asset Utilisation',
      'Improved Asset Integrity',
      'Predictive Maintenance',
      'Streamlined Operations',
      'Automated Inventory Count'
    ],
    href: '/solutions#asset-intelligence'
  },
  {
    icon: Truck,
    title: 'Shipment Intelligence',
    description: 'Develop a proactive approach to managing your entire shipment journey with advanced shipment intelligence solution from first to last-mile.',
    features: [
      'Comprehensive Condition Monitoring',
      'Increased Delivery Reliability',
      'Reduced Risk of Damage',
      'Enhanced Security',
      'Optimised Delivery Routes',
      'Improved Cash Flow Management'
    ],
    href: '/solutions#shipment-intelligence'
  }
]

export default function HomePage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  const getSelectedIndustryData = () => {
    return industries.find(industry => industry.id === selectedIndustry)
  }

  // Auto-scroll to industry details when an industry is selected
  useEffect(() => {
    if (selectedIndustry) {
      const timer = setTimeout(() => {
        const industryDetailsElement = document.getElementById('industry-details')
        if (industryDetailsElement) {
          industryDetailsElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          })
        }
      }, 300) // Small delay to ensure the element is rendered
      
      return () => clearTimeout(timer)
    }
  }, [selectedIndustry])

  return (
    <>
      <Head>
        <title>OKgo - AI-Powered Supply Chain Visibility Across Africa</title>
        <meta name="description" content="Track, predict, and protect your shipments and assets in real time with OKgo's AI-powered supply chain visibility solutions across Africa." />
        <meta property="og:title" content="OKgo - AI-Powered Supply Chain Visibility Across Africa" />
        <meta property="og:description" content="Track, predict, and protect your shipments and assets in real time with OKgo's AI-powered supply chain visibility solutions across Africa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ok-go.co.za" />
      </Head>

      <Navbar />
      <FloatingCTA />

      <main>
        {/* Hero Section with Industry Selection */}
        <section className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="h-screen grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column - Video Section (65%) */}
            <div className="lg:col-span-8 relative">
              {/* Video Container */}
              <div className="absolute inset-0">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/videos/asset-tracking-poster.jpg"
                >
                  <source src="/videos/hero-banner-video.mp4" type="video/mp4" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/hero-supply-chain-bg.jpg')` }}
                  />
                </video>
                
                {/* Enhanced Overlay for Premium Feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Text Content Overlay */}
              <div className="relative z-10 h-full flex items-center justify-start p-8 lg:p-16">
                <div className="text-white max-w-4xl">
                  {/* Trust Badge */}
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
                    <Award className="w-5 h-5 text-okgo-yellow mr-3" />
                    <span className="text-sm font-semibold tracking-wide">TRUSTED BY 500+ ENTERPRISES</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-up">
                    <span className="block text-white">Stop Losing Control</span>
                    <span className="block bg-gradient-to-r from-okgo-yellow to-yellow-300 bg-clip-text text-transparent">
                      of Your Supply Chain
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 mb-10 leading-relaxed animate-fade-in-up font-light max-w-3xl">
                  Reduce risk and improve control with 360° asset visibility that gives you real-time insight into your supply chain, enabling proactive response to potential disruptions.
                  </p>

                  {/* Enhanced Stats Badge */}
                  <div className="bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 mb-10 border border-white/20 shadow-2xl animate-fade-in-up max-w-2xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-okgo-yellow mb-1">35%</div>
                        <div className="text-sm text-slate-300 font-medium">Loss Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-okgo-yellow mb-1">90%</div>
                        <div className="text-sm text-slate-300 font-medium">Delivery Reliability</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Buttons - Show on mobile/tablet, hide on large screens */}
                  <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                    <CTAButton 
                      href="/contact-us" 
                      size="lg"
                      className="bg-gradient-to-r from-okgo-yellow to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-okgo-yellow font-bold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
                    >
                      Book Enterprise Demo
                    </CTAButton>
                    <CTAButton 
                      href="#how-it-works"
                      size="lg"
                      className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      See How It Works
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Industry Selection (35%) - Fixed Layout */}
            <div className="lg:col-span-4 bg-white shadow-2xl border-l border-slate-200 flex flex-col h-screen">
              {/* Enhanced Header - Fixed with better spacing */}
              <div className="px-6 lg:px-8 pt-8 lg:pt-12 pb-6 lg:pb-8 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white flex-shrink-0">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-okgo-yellow rounded-full mr-3"></div>
                  <span className="text-xs lg:text-sm font-semibold text-slate-600 uppercase tracking-wide">Industry Solutions</span>
                </div>
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-slate-900 leading-tight">
                  What's Your Industry?
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  Discover tailored solutions and proven results for your specific industry challenges
                </p>
              </div>

              {/* Industry Selection - Improved scrolling */}
              <div className="flex-1 overflow-hidden flex flex-col bg-gradient-to-b from-white to-slate-50">
                <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-6">
                  <div className="space-y-3">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(industry.id)}
                        className={`w-full p-4 lg:p-5 rounded-2xl border transition-all duration-300 text-left hover:scale-[1.02] group shadow-sm hover:shadow-lg ${
                          selectedIndustry === industry.id
                            ? 'bg-gradient-to-r from-okgo-yellow to-yellow-400 border-transparent text-slate-900 shadow-xl shadow-yellow-500/20'
                            : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-okgo-yellow/30'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0 transition-colors ${
                            selectedIndustry === industry.id 
                              ? 'bg-white/20 text-slate-900' 
                              : 'bg-gradient-to-br from-okgo-yellow/10 to-yellow-100 text-okgo-yellow group-hover:from-okgo-yellow/20 group-hover:to-yellow-200'
                          }`}>
                            <industry.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-sm lg:text-base mb-2 leading-tight">
                              {industry.name}
                            </h3>
                            <p className={`text-xs lg:text-sm leading-relaxed ${
                              selectedIndustry === industry.id ? 'text-slate-800' : 'text-slate-600'
                            }`}>
                              {industry.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section - Desktop Only */}
              <div className="hidden lg:block px-6 lg:px-8 py-6 lg:py-8 border-t border-slate-100 bg-gradient-to-br from-slate-900 to-slate-800 flex-shrink-0">
                <div className="space-y-4">
                  <CTAButton 
                    href="/contact-us" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-okgo-yellow to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-okgo-yellow font-bold shadow-xl hover:shadow-yellow-500/25"
                  >
                    Book Enterprise Demo
                  </CTAButton>
                  <CTAButton 
                    href="#how-it-works"
                    size="lg"
                    className="w-full bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white hover:text-slate-900"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    See How It Works
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Industry Details - Enhanced with ID for scrolling */}
          {selectedIndustry && (
            <div id="industry-details" className="bg-white border-t-4 border-okgo-yellow shadow-2xl animate-fade-in-up">
              <div className="container-custom py-12">
                <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl p-8 md:p-12 text-slate-900 border border-slate-200 shadow-xl">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center bg-okgo-yellow/10 rounded-full px-6 py-2 mb-4">
                      <span className="text-sm font-bold text-okgo-yellow uppercase tracking-wide">Industry Solution</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{getSelectedIndustryData()?.name}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <Target className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-red-600">Your Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">{getSelectedIndustryData()?.pain}</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-blue-600">OKgo Solution</h4>
                      <p className="text-slate-600 leading-relaxed">{getSelectedIndustryData()?.solution}</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-3 text-green-600">Your Results</h4>
                      <p className="text-slate-600 leading-relaxed">{getSelectedIndustryData()?.benefit}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <CTAButton 
                      href="/contact-us" 
                      size="lg"
                      className="bg-gradient-to-r from-okgo-yellow to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-okgo-yellow font-bold shadow-xl"
                    >
                      Book Enterprise Demo
                    </CTAButton>
                    <CTAButton 
                      href="#how-it-works"
                      size="lg"
                      className="bg-transparent border-2 border-okgo-yellow text-okgo-yellow hover:bg-okgo-yellow hover:text-slate-900"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      See How It Works
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Enhanced by Roambee Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
          <div className="container-custom text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100 max-w-5xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center bg-okgo-yellow/10 rounded-full px-6 py-2 mb-6">
                  <Award className="w-5 h-5 text-okgo-yellow mr-2" />
                  <span className="text-sm font-bold text-okgo-yellow uppercase tracking-wide">Enterprise Partnership</span>
                </div>
                <h2 className="text-2xl font-semibold text-slate-600 mb-3">A Tracker Company</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Enhanced by Roambee</h3>
              </div>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                OKgo delivers enterprise-grade visibility and actionable intelligence across your entire value chain. 
                From manufacturers and suppliers to last-mile delivery, our platform provides comprehensive oversight 
                of assets and shipments across business partners, intermediaries, and international borders.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Impact Metrics Strip */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-okgo-yellow/20 to-transparent"></div>
          </div>
          
          <div className="container-custom relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Enterprise Results
              </h2>
              <p className="text-xl text-slate-300">
                Measurable impact across African supply chains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="group animate-fade-in-up">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-okgo-yellow to-yellow-300 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm text-slate-400">
                      {metric.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Video Section */}
        <section id="how-it-works" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-okgo-yellow/10 rounded-full px-6 py-2 mb-6">
                <Play className="w-5 h-5 text-okgo-yellow mr-2" />
                <span className="text-sm font-bold text-okgo-yellow uppercase tracking-wide">Platform Demo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                See How OKgo Works
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Watch how OKgo transforms supply chain visibility across Africa's complex logistics landscape with enterprise-grade solutions
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/videos/see-how-it-works-poster.png"
                  preload="metadata"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                >
                  <source src="/videos/how-it-works.mp4" type="video/mp4" />
                  <p className="text-white p-4">
                    Your browser does not support the video tag. 
                    <a href="/videos/how-it-works.mp4" className="text-okgo-yellow underline ml-1">
                      Download the video
                    </a>
                  </p>
                </video>
              </div>
              
              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <CTAButton 
                    href="/contact-us" 
                    size="lg"
                    className="bg-gradient-to-r from-okgo-yellow to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-okgo-yellow font-bold shadow-xl"
                  >
                    Schedule Enterprise Demo
                  </CTAButton>
                  <CTAButton 
                    href="/solutions" 
                    size="lg"
                    className="bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 font-semibold border border-slate-600"
                  >
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Preview */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-okgo-yellow/10 rounded-full px-6 py-2 mb-6">
                <Shield className="w-5 h-5 text-okgo-yellow mr-2" />
                <span className="text-sm font-bold text-okgo-yellow uppercase tracking-wide">Enterprise Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Intelligent Solutions
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Transform your supply chain with OKgo's enterprise platform, offering comprehensive visibility, operational efficiency, and proactive control. 
                Achieve a full end-to-end view of your operations, streamline processes, and anticipate disruptions to drive smarter decisions across your supply chain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-100">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">{solution.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">{solution.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <CTAButton 
                    href={solution.href} 
                    className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </CTAButton>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <CTAButton 
                href="/solutions" 
                size="lg"
                className="bg-gradient-to-r from-okgo-yellow to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-okgo-yellow font-bold shadow-xl"
              >
                Explore All Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Case Studies & Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-okgo-yellow/10 rounded-full px-6 py-2 mb-6">
                <Users className="w-5 h-5 text-okgo-yellow mr-2" />
                <span className="text-sm font-bold text-okgo-yellow uppercase tracking-wide">Customer Success</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Real Results from Real Companies
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                See how leading African enterprises are transforming their supply chains with OKgo's enterprise-grade solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Sarah Mokoena</h4>
                    <p className="text-sm text-slate-600 font-medium">Logistics Manager, Major FMCG Brand</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                  "OKgo helped us reduce loss and gain real visibility into our entire supply chain. The ROI was evident within the first quarter."
                </blockquote>
                <div className="flex items-center text-okgo-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                    D
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">David Nkomo</h4>
                    <p className="text-sm text-slate-600 font-medium">Supply Chain Director, Retail Chain Group</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                  "The predictive insights have been game-changing for our delivery operations. We can now proactively manage delays and improve customer satisfaction."
                </blockquote>
                <div className="flex items-center text-okgo-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Maria Santos</h4>
                    <p className="text-sm text-slate-600 font-medium">Operations Manager, Automotive Manufacturer</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic mb-6 text-lg leading-relaxed">
                  "Real-time tracking across multiple African countries was exactly what we needed. OKgo's technology just works."
                </blockquote>
                <div className="flex items-center text-okgo-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <CTAButton 
                href="/case-studies" 
                size="lg"
                className="bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 font-semibold"
              >
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </CTAButton>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-okgo-yellow/10 rounded-full px-6 py-2 mb-6">
                <CheckCircle className="w-5 h-5 text-okgo-yellow mr-2" />
                <span className="text-sm font-bold text-okgo-yellow uppercase tracking-wide">Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about OKgo's enterprise supply chain visibility solutions
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    How quickly can OKgo be implemented in my supply chain?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Most enterprise implementations are completed within 2-4 weeks. Our dedicated implementation team handles the technical setup while you focus on your business. We provide comprehensive training and 24/7 support throughout the process.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Does OKgo work across all African countries?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Yes, OKgo operates across all African countries with comprehensive coverage for land, sea, and air transport. Our satellite-enabled tracking ensures visibility even in the most remote areas.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    What's the typical ROI timeline for OKgo implementation?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Most enterprise customers see positive ROI within 3 months through reduced losses, improved efficiency, and better customer satisfaction. Our average customer achieves 10x ROI within the first year.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    Can OKgo integrate with our existing enterprise systems?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Absolutely. OKgo integrates seamlessly with ERPs, WMS, TMS, and other logistics systems through our robust API. We support all major platforms including SAP, Oracle, and custom solutions.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    What enterprise support do you provide after implementation?
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We provide 24/7 technical support, regular system updates, training for new users, and dedicated account management. Our African support team understands local logistics challenges and enterprise requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-okgo-yellow/30 to-transparent"></div>
          </div>
          
          <div className="container-custom text-center text-white relative">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
                <Award className="w-5 h-5 text-okgo-yellow mr-3" />
                <span className="text-sm font-semibold tracking-wide">ENTERPRISE READY</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-white">Stop Losing Money on</span>
                <span className="block bg-gradient-to-r from-okgo-yellow to-yellow-300 bg-clip-text text-transparent">
                  Supply Chain Blind Spots
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed font-light max-w-4xl mx-auto">
                Every day without enterprise-grade visibility costs you thousands. Join 500+ African companies who've transformed their supply chains with OKgo.
              </p>
              <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
                Get your free industry-specific analysis and see exactly how much OKgo can save your enterprise.
              </p>
              
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 mb-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="group">
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-okgo-yellow to-yellow-300 bg-clip-text text-transparent">2-4 Weeks</div>
                    <div className="text-slate-300 font-medium">Enterprise Implementation</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-okgo-yellow to-yellow-300 bg-clip-text text-transparent">10x ROI</div>
                    <div className="text-slate-300 font-medium">Average First Year</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-okgo-yellow to-yellow-300 bg-clip-text text-transparent">24/7</div>
                    <div className="text-slate-300 font-medium">African Support</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <CTAButton 
                  href="/contact-us" 
                  size="lg"
                  className="bg-gradient-to-r from-okgo-yellow to-yellow-400 text-slate-900 hover:from-yellow-400 hover:to-okgo-yellow shadow-2xl hover:shadow-yellow-500/25 font-bold text-lg px-12 py-4"
                >
                  Book Enterprise Demo
                </CTAButton>
                
                <CTAButton 
                  href="tel:+27111234567" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 shadow-xl text-lg px-12 py-4"
                >
                  Call +27 (0) 11 123 4567
                </CTAButton>
              </div>
              
              <p className="text-sm text-slate-400 mt-8">
                No obligation • Free consultation • Enterprise-tailored solutions
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 