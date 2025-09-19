import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Palette, 
  ShoppingBag, 
  Truck, 
  GraduationCap,
  Globe,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react';

const WelcomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Connect Artisans',
      description: 'Bridge traditional crafts with modern markets'
    },
    {
      icon: Truck,
      title: 'Direct Supply Chain',
      description: 'Eliminate middlemen, reduce costs by 40%'
    },
    {
      icon: GraduationCap,
      title: 'Skill Development',
      description: 'Workshops and training programs'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide customers'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Verified products and suppliers'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Collaborative artisan networks'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Artisans' },
    { number: '500+', label: 'Suppliers' },
    { number: '50K+', label: 'Products' },
    { number: '95%', label: 'Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Artisan Connect</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/home')}
              className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
            >
              Explore Platform
            </button>
            <button
              onClick={() => navigate('/auth')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Empower
                <span className="text-primary-500 block">Artisans</span>
                <span className="text-secondary-500">Globally</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Connect traditional craftspeople with modern markets through our 
                innovative platform. Increase revenue by 300% while preserving 
                cultural heritage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/auth')}
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/home')}
                  className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Watch Demo
                  <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center">
                    <div className="w-2 h-2 bg-current rounded-full ml-0.5"></div>
                  </div>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Artisan at work" 
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                
                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Revenue Growth</p>
                      <p className="text-2xl font-bold text-gray-900">+300%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Global Reach</p>
                      <p className="text-2xl font-bold text-gray-900">50+ Countries</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary-100 rounded-full opacity-60 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Artisan Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything artisans need to transform their traditional 
              crafts into thriving digital businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Craft?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of artisans who've already increased their income by 300% 
              while preserving their cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/auth')}
                className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all transform shadow-lg"
              >
                Start Selling Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/home')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-full font-semibold transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Artisan Connect</span>
              </div>
              <p className="text-gray-400">
                Empowering artisans through technology and connecting traditional crafts with global markets.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigate('/marketplace')} className="hover:text-white transition-colors">Marketplace</button></li>
                <li><button onClick={() => navigate('/overview')} className="hover:text-white transition-colors">About</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Artisan Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
