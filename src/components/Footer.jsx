import React from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const footerSections = {
    platform: [
      { name: "Home", href: "/home" },
      { name: "Services", href: "/services" },
      { name: "Marketplace", href: "/marketplace" },
      { name: "Explore", href: "/explore" },
      { name: "Overview", href: "/overview" },
    ],
    services: [
      { name: "Raw Material Supply", href: "/services/supply" },
      { name: "Artisan Workshops", href: "/services/workshops" },
      { name: "Village Internship", href: "/services/internship" },
      { name: "Collaborative Hub", href: "/services/collaboration" },
      { name: "AR/VR Preview", href: "/services/preview" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Community Forum", href: "/community" },
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Refund Policy", href: "/refund" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Artisan Connect
            </h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
              Get the latest updates on new features, success stories, and
              opportunities to grow your craft business.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none text-gray-900"
              />
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Artisan Connect</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering artisans worldwide through technology, connecting
              traditional crafts with global markets, and preserving cultural
              heritage for future generations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>hello@artisanconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Platform Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Platform</h4>
                <ul className="space-y-3">
                  {footerSections.platform.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3">
                  {footerSections.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Support</h4>
                <ul className="space-y-3">
                  {footerSections.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Legal</h4>
                <ul className="space-y-3">
                  {footerSections.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 lg:mb-0">
            <p className="text-gray-400">
              © 2024 Artisan Connect. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Made with ❤️ for artisans worldwide</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>🌍 Available in 10+ languages</span>
            <span>🔒 SSL Secured</span>
            <span>✅ ISO Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
