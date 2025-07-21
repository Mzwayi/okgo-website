import React from 'react'
import Head from 'next/head'
import { Truck, Building2, Package, Zap, CheckCircle, BarChart3 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import CTAButton from '@/components/CTAButton'

const caseStudies = [
  {
    id: 'fmcg-manufacturer',
    title: 'FMCG Manufacturer Reduces Losses by 35%',
    industry: 'Fast-Moving Consumer Goods',
    challenge: 'High spoilage rates and inventory discrepancies across multiple distribution centers',
    solution: 'Asset Intelligence with temperature monitoring and real-time location tracking',
    results: [
      '35% reduction in product losses',
      '60% faster inventory reconciliation',
      '25% improvement in delivery accuracy'
    ],
    icon: Package
  },
  {
    id: 'retail-chain',
    title: 'Major Retail Chain Optimizes Cross-Border Logistics',
    industry: 'Retail & Distribution',
    challenge: 'Limited visibility into cross-border shipments causing customer complaints',
    solution: 'Shipment Intelligence with multi-modal tracking and customs integration',
    results: [
      '90% improvement in delivery predictability',
      '50% reduction in customer complaints',
      '40% faster customs clearance'
    ],
    icon: Building2
  },
  {
    id: 'automotive-parts',
    title: 'Automotive Parts Supplier Streamlines Operations',
    industry: 'Automotive & Manufacturing',
    challenge: 'Complex supply chain with multiple suppliers and just-in-time delivery requirements',
    solution: 'End-to-end visibility with predictive analytics and automated alerts',
    results: [
      '45% reduction in stockouts',
      '30% improvement in on-time deliveries',
      '25% reduction in expedited shipping costs'
    ],
    icon: Truck
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies - Real Results with OKgo Supply Chain Visibility</title>
        <meta name="description" content="See how African businesses are transforming their supply chains with OKgo's visibility solutions. Real results from FMCG, retail, and manufacturing companies." />
        <meta property="og:title" content="Case Studies - Real Results with OKgo Supply Chain Visibility" />
        <meta property="og:description" content="See how African businesses are transforming their supply chains with OKgo's visibility solutions. Real results from FMCG, retail, and manufacturing companies." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0">
            {/* TODO: Add case studies hero background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/hero-supply-chain-bg.jpg')`, // Placeholder - replace with case studies-specific image
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
              Real Results, Real Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              See how African businesses are transforming their supply chains with OKgo's visibility solutions
            </p>
          </div>
        </section>

        {/* Case Studies Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Success Stories from Across Africa
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From reducing losses to improving customer satisfaction, see the measurable impact OKgo delivers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={index}
                  icon={study.icon}
                  title={study.title}
                  industry={study.industry}
                  description={study.challenge}
                  href={`#${study.id}`}
                />
              ))}
            </div>

            <div className="text-center">
              <CTAButton href="/contact-us" size="lg">
                Discuss Your Use Case
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Detailed Case Studies */}
        {caseStudies.map((study, index) => (
          <section key={study.id} id={study.id} className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                      <study.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-primary-600 font-semibold uppercase tracking-wide">
                        {study.industry}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">
                        {study.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-red-600 mb-4">The Challenge</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">OKgo Solution</h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Results Achieved</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-secondary-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <CTAButton href="/contact-us" variant="secondary">
                    Learn More About This Solution
                  </CTAButton>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join the growing number of African businesses transforming their supply chains with OKgo
            </p>
            <CTAButton href="/contact-us" variant="secondary" size="lg">
              Start Your Transformation
            </CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 