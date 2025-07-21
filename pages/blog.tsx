import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

const featuredPost = {
  id: 'n8n-automation-guide',
  title: 'How to Automate Shipment Tracking Alerts with n8n',
  excerpt: 'A comprehensive guide to setting up automated workflows that notify your team when shipments are delayed, arrive early, or encounter issues.',
  content: 'Learn how to create powerful automation workflows using n8n that connect your OKgo tracking data with your existing business systems. This guide covers everything from basic webhook setup to advanced conditional logic for different alert types.',
  author: 'Sarah van der Merwe',
  date: '2024-12-15',
  readTime: '8 min read',
  category: 'Technology',
  image: '/blog/n8n-automation.jpg',
  featured: true
}

const blogPosts = [
  {
    id: 'african-logistics-trends-2025',
    title: 'African Logistics Trends in 2025',
    excerpt: 'Explore the key trends shaping African logistics in 2025, from infrastructure development to technology adoption across the continent.',
    author: 'Thabo Mthembu',
    date: '2024-12-12',
    readTime: '6 min read',
    category: 'Industry Insights',
    image: '/blog/african-trends.jpg'
  },
  {
    id: 'supply-chain-visibility-guide',
    title: 'What Visibility Really Means in Supply Chain Tech',
    excerpt: 'Understanding the different levels of supply chain visibility and how to choose the right solution for your business needs.',
    author: 'David Nkomo',
    date: '2024-12-10',
    readTime: '10 min read',
    category: 'Education',
    image: '/blog/visibility-guide.jpg'
  },
  {
    id: 'cold-chain-monitoring',
    title: 'Cold Chain Monitoring: Best Practices for African Markets',
    excerpt: 'Essential strategies for maintaining temperature-sensitive shipments across challenging African logistics networks.',
    author: 'Maria Santos',
    date: '2024-12-08',
    readTime: '7 min read',
    category: 'Best Practices',
    image: '/blog/cold-chain.jpg'
  },
  {
    id: 'roi-tracking-technology',
    title: 'Calculating ROI on Tracking Technology Investment',
    excerpt: 'A practical framework for measuring the return on investment from supply chain visibility solutions.',
    author: 'Sarah van der Merwe',
    date: '2024-12-05',
    readTime: '9 min read',
    category: 'Business Case',
    image: '/blog/roi-calculation.jpg'
  },
  {
    id: 'cross-border-logistics',
    title: 'Navigating Cross-Border Logistics in Africa',
    excerpt: 'Common challenges and solutions for managing shipments across African borders, including documentation and tracking requirements.',
    author: 'Thabo Mthembu',
    date: '2024-12-03',
    readTime: '12 min read',
    category: 'Operations',
    image: '/blog/cross-border.jpg'
  },
  {
    id: 'api-integration-guide',
    title: 'OKgo API Integration: Developer Guide',
    excerpt: 'Technical documentation and examples for integrating OKgo tracking data into your existing systems.',
    author: 'Sarah van der Merwe',
    date: '2024-11-28',
    readTime: '15 min read',
    category: 'Technology',
    image: '/blog/api-guide.jpg'
  }
]

const categories = [
  'All Posts',
  'Technology',
  'Industry Insights',
  'Best Practices',
  'Education',
  'Business Case',
  'Operations'
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Posts')

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Head>
        <title>Blog - OKgo Supply Chain Insights & Best Practices</title>
        <meta name="description" content="Expert insights on supply chain visibility, African logistics trends, and technology best practices from the OKgo team." />
        <meta property="og:title" content="Blog - OKgo Supply Chain Insights & Best Practices" />
        <meta property="og:description" content="Expert insights on supply chain visibility, African logistics trends, and technology best practices from the OKgo team." />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & Best Practices
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Expert insights on supply chain visibility, African logistics trends, and technology automation
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-16">
                <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Tag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full inline-block mb-2">
                      Featured Post
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-secondary-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                      {featuredPost.category}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-secondary-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-secondary-700 leading-relaxed">
                      {featuredPost.content}
                    </p>
                  </div>
                  
                  <CTAButton href={`/blog/${featuredPost.id}`}>
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-secondary-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Tag className="w-12 h-12 mx-auto opacity-50" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        {post.category}
                      </div>
                      <div className="text-xs text-secondary-500">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-secondary-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link 
                        href={`/blog/${post.id}`}
                        className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-secondary-600 text-lg">
                  No posts found in this category. Try selecting a different category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-secondary-600 mb-8">
                Get the latest insights on supply chain technology, African logistics trends, and automation best practices delivered to your inbox.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                  <CTAButton className="sm:px-8">
                    Subscribe
                  </CTAButton>
                </div>
                <p className="text-xs text-secondary-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding gradient-bg text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Put these insights into action. Contact our team to discuss how OKgo can help optimize your logistics operations.
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
                href="/solutions" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Explore Solutions
              </CTAButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 