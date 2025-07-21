import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Solutions: [
    { name: 'Shipment Tracking', href: '/solutions#shipment-tracking' },
    { name: 'Asset Intelligence', href: '/solutions#asset-intelligence' },
    { name: 'Predictive Insights', href: '/solutions#predictive-insights' },
  ],
  Company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Technology', href: '/technology' },
    { name: 'Blog', href: '/blog' },
  ],
  Support: [
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OK</span>
              </div>
              <span className="text-2xl font-bold text-white">go</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered supply chain visibility solutions across Africa. 
              Partner with Roambee to track, predict, and protect your shipments and assets in real time.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>hello@ok-go.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+27 (0) 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OKgo. All rights reserved. Powered by Roambee technology.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/company/okgo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/okgo_za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 