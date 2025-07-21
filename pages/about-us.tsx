import React from 'react'
import Head from 'next/head'
import { Target, Calendar, Users, Globe, Award, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

const milestones = [
  {
    year: '2023',
    title: 'OKgo Launched in South Africa',
    description: 'Founded as the African partner of Roambee, bringing world-class supply chain visibility to the African market.'
  },
  {
    year: '2024',
    title: 'Strategic Partnership with Roambee',
    description: 'Formalized our technology partnership and expanded to serve major logistics clients across multiple African countries.'
  },
  {
    year: '2024',
    title: 'Major Client Wins',
    description: 'Successfully deployed solutions for leading FMCG manufacturers, retail chains, and automotive companies.'
  },
  {
    year: '2025',
    title: 'Continental Expansion',
    description: 'Planned expansion to West and East Africa, bringing our solutions to more markets across the continent.'
  }
]

const team = [
  {
    name: 'Michael Olivier',
    role: 'Managing Director',
    bio: '25+ years in African logistics and supply chain management. Previously led operations at a major logistics provider.',
    image: '/team/michael.jpg'
  },
  {
    name: 'Santosh Subramani',
    role: 'Head of Sales',
    bio: 'Placeholder.',
    image: '/team/sarah.svg'
  },
  {
    name: 'Mzwamandla Sithole',
    role: 'Customer Success Manager',
    bio: 'Placeholder.',
    image: '/team/mzwamandla.jpg'
  }
]

const values = [
  {
    icon: Target,
    title: 'African-First Approach',
    description: 'We understand the unique logistics challenges of operating across African markets and design solutions specifically for them.'
  },
  {
    icon: Zap,
    title: 'Innovation with Purpose',
    description: 'Every feature we build addresses real problems faced by African businesses, from border crossings to infrastructure challenges.'
  },
  {
    icon: Users,
    title: 'Partnership-Driven',
    description: 'We work as an extension of your team, providing ongoing support and expertise to ensure your success.'
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'While we focus on Africa, we maintain global technology standards through our partnership with Roambee.'
  }
]

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Us - OKgo's Mission to Transform African Logistics</title>
        <meta name="description" content="Learn about OKgo's mission to bring world-class supply chain visibility to Africa through our partnership with Roambee and deep local expertise." />
        <meta property="og:title" content="About Us - OKgo's Mission to Transform African Logistics" />
        <meta property="og:description" content="Learn about OKgo's mission to bring world-class supply chain visibility to Africa through our partnership with Roambee and deep local expertise." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0">
            {/* TODO: Add about hero background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/hero-supply-chain-bg.jpg')`, // Placeholder - replace with about-specific image
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
              African Roots, Global Tech
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Bridging the gap between world-class supply chain technology and the unique challenges of African logistics
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                OKgo delivers Roambee-powered visibility solutions tailored to Africa's logistics challenges. 
                We combine global technology excellence with deep local expertise to help African businesses 
                optimize their supply chains, reduce losses, and improve customer satisfaction.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 text-left">
                <p className="text-lg text-primary-700 italic">
                  "Our vision is to make supply chain visibility as accessible and reliable in Africa 
                  as it is in developed markets, while addressing the unique challenges that make our continent special."
                </p>
                <p className="text-primary-600 font-semibold mt-4">— Michael Olivier, Managing Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our values guide everything we do, from product development to customer relationships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                From startup to trusted partner - see how we've grown and what's coming next
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-primary-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 ml-12 md:ml-0">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                            <div className="text-lg font-semibold text-secondary-900">{milestone.title}</div>
                          </div>
                        </div>
                        <p className="text-secondary-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Experienced logistics and technology professionals with deep expertise in African markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="aspect-square bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center relative overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    {/* Fallback initials */}
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center absolute inset-0 m-auto" style={{display: member.image ? 'none' : 'flex'}}>
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary-600 font-semibold mb-3">
                      {member.role}
                    </div>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Partnership */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                  Global + Local Partnerships
                </h2>
                <p className="text-xl text-secondary-600 mb-6 leading-relaxed">
                  Roambee powers our devices and platform, bringing world-class IoT technology to Africa. 
                  OKgo adapts and implements these solutions for Africa's unique supply chain environment.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-primary-600" />
                    <span className="text-secondary-700">Certified Roambee partner and reseller</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-primary-600" />
                    <span className="text-secondary-700">Access to global R&D and product roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary-600" />
                    <span className="text-secondary-700">Local implementation and support expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-6 h-6 text-primary-600" />
                    <span className="text-secondary-700">Rapid deployment across African markets</span>
                  </div>
                </div>

                <CTAButton href="/technology" size="lg">
                  Learn About Our Technology
                </CTAButton>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Partnership Matters</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Global Technology Standards</h4>
                    <p className="text-sm text-gray-100">
                      Access to enterprise-grade IoT devices and cloud platform used by Fortune 500 companies worldwide
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">African Market Expertise</h4>
                    <p className="text-sm text-gray-100">
                      Deep understanding of local logistics challenges, regulatory requirements, and business practices
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Innovation</h4>
                    <p className="text-sm text-gray-100">
                      Regular technology updates and new feature releases backed by global R&D investment
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Local Support</h4>
                    <p className="text-sm text-gray-100">
                      Dedicated African support team with local presence and understanding of your business context
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-12">
              Recognition & Awards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Best Logistics Innovation 2024
                </h3>
                <p className="text-secondary-600 text-sm">
                  African Logistics Awards for innovative supply chain visibility solutions
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Top Tech Startup
                </h3>
                <p className="text-secondary-600 text-sm">
                  Featured in South African Tech Startup Showcase 2024
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  Customer Choice Award
                </h3>
                <p className="text-secondary-600 text-sm">
                  Highest customer satisfaction rating in supply chain technology category
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join the growing community of African businesses transforming their supply chains with OKgo. 
              Let's discuss how we can help solve your logistics challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                href="/contact-us" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700"
              >
                Get Started Today
              </CTAButton>
              
              <CTAButton 
                href="/case-studies" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                See Our Results
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 