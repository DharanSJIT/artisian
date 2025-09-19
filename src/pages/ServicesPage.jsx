import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Users, 
  GraduationCap, 
  HandHeart, 
  Eye, 
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Award,
  Zap,
  Shield,
  Heart,
  Target
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'supply',
      icon: Truck,
      title: 'Raw Material Supply',
      subtitle: 'Direct Connection to Quality Materials',
      description: 'Connect directly with verified suppliers and eliminate middlemen costs.',
      fullDescription: 'Our Raw Material Supply service revolutionizes how artisans source their materials. By connecting directly with verified suppliers, we eliminate costly middlemen and ensure you get the best quality materials at fair prices.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      features: [
        'Direct supplier connections',
        'Quality verification system',
        '40% cost reduction',
        'Fast nationwide delivery',
        'Bulk purchase discounts',
        '24/7 customer support'
      ],
      benefits: [
        { icon: Shield, text: 'Quality guaranteed materials' },
        { icon: Zap, text: 'Lightning fast delivery' },
        { icon: Target, text: 'Competitive pricing' }
      ],
      stats: [
        { number: '500+', label: 'Verified Suppliers' },
        { number: '40%', label: 'Average Savings' },
        { number: '48hrs', label: 'Delivery Time' }
      ],
      testimonial: {
        text: "I've reduced my material costs by 45% while getting better quality supplies.",
        author: "Rajesh Kumar",
        role: "Textile Artisan",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      id: 'workshops',
      icon: GraduationCap,
      title: 'Skill Enhancement Workshops',
      subtitle: 'Learn, Grow, and Excel',
      description: 'Upgrade your skills with expert-led workshops and training programs.',
      fullDescription: 'Our comprehensive workshop program combines traditional craftsmanship with modern techniques. Learn from master artisans and industry experts to enhance your skills and expand your business opportunities.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop',
      features: [
        'Expert-led training sessions',
        'Traditional & modern techniques',
        'Hands-on learning approach',
        'Certificate programs',
        'Online and offline modes',
        'Lifetime access to materials'
      ],
      benefits: [
        { icon: Award, text: 'Industry certification' },
        { icon: Users, text: 'Expert mentorship' },
        { icon: Globe, text: 'Global best practices' }
      ],
      stats: [
        { number: '150+', label: 'Workshops Conducted' },
        { number: '95%', label: 'Success Rate' },
        { number: '50+', label: 'Expert Trainers' }
      ],
      testimonial: {
        text: "The digital marketing workshop helped me reach customers in 10 countries.",
        author: "Maya Patel",
        role: "Pottery Artist",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      id: 'internship',
      icon: Users,
      title: 'Village Internship Program',
      subtitle: 'Bridging Digital Divides',
      description: 'Local students help artisans navigate the digital marketplace.',
      fullDescription: 'Our Village Internship Program addresses the digital divide in rural areas by training local students to assist artisans with technology, online sales, and digital marketing.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      features: [
        'Local student volunteers',
        'Digital literacy training',
        'Technology support',
        'Social media management',
        'Order processing help',
        'Community building'
      ],
      benefits: [
        { icon: Heart, text: 'Community impact' },
        { icon: Zap, text: 'Quick tech support' },
        { icon: Users, text: 'Local expertise' }
      ],
      stats: [
        { number: '200+', label: 'Active Interns' },
        { number: '1000+', label: 'Artisans Helped' },
        { number: '50+', label: 'Villages Covered' }
      ],
      testimonial: {
        text: "My village intern helped me set up online sales. Now I sell globally!",
        author: "Kamala Devi",
        role: "Handicraft Maker",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      id: 'collaboration',
      icon: HandHeart,
      title: 'Collaborative Hub',
      subtitle: 'Connect and Create Together',
      description: 'Match with complementary artisans to create unique collaborative products.',
      fullDescription: 'Our Collaborative Hub uses AI-powered matching to connect artisans with complementary skills. Create unique products by combining different crafts and techniques.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      features: [
        'AI-powered skill matching',
        'Project collaboration tools',
        'Revenue sharing system',
        'Communication platform',
        'Joint marketing support',
        'Quality assurance'
      ],
      benefits: [
        { icon: Target, text: 'Perfect skill matching' },
        { icon: Globe, text: 'Expanded market reach' },
        { icon: Award, text: 'Premium pricing' }
      ],
      stats: [
        { number: '500+', label: 'Successful Matches' },
        { number: '80%', label: 'Higher Revenue' },
        { number: '300+', label: 'Joint Projects' }
      ],
      testimonial: {
        text: "Collaborating with a painter doubled the value of my pottery pieces.",
        author: "Amit Sharma",
        role: "Potter",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      id: 'preview',
      icon: Eye,
      title: 'AR/VR Product Preview',
      subtitle: 'Immersive Shopping Experience',
      description: 'Showcase products with cutting-edge AR/VR technology.',
      fullDescription: 'Our AR/VR Preview technology allows customers to visualize products in their space before purchasing, significantly increasing conversion rates and reducing returns.',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop',
      features: [
        '3D product visualization',
        'Virtual try-on experience',
        'Room placement preview',
        'Interactive product demos',
        'Mobile AR support',
        'VR showroom tours'
      ],
      benefits: [
        { icon: Zap, text: '3x higher conversion' },
        { icon: Shield, text: '50% fewer returns' },
        { icon: Globe, text: 'Global accessibility' }
      ],
      stats: [
        { number: '300%', label: 'Conversion Increase' },
        { number: '50%', label: 'Return Reduction' },
        { number: '10K+', label: 'AR Views Daily' }
      ],
      testimonial: {
        text: "AR preview helped customers visualize my furniture. Sales tripled!",
        author: "Vikram Singh",
        role: "Wood Craftsman",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
      }
    },
    {
      id: 'marketplace',
      icon: ShoppingCart,
      title: 'Global Marketplace',
      subtitle: 'Sell Worldwide with Ease',
      description: 'Reach customers globally through our comprehensive marketplace platform.',
      fullDescription: 'Our Global Marketplace provides everything you need to sell your handcrafted products worldwide - from listing optimization to international shipping and customer support.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      features: [
        'Global customer reach',
        'Multi-currency support',
        'Integrated payment system',
        'Shipping partnerships',
        'Marketing tools',
        '24/7 seller support'
      ],
      benefits: [
        { icon: Globe, text: 'Worldwide market access' },
        { icon: Shield, text: 'Secure transactions' },
        { icon: Target, text: 'Targeted marketing' }
      ],
      stats: [
        { number: '50+', label: 'Countries Served' },
        { number: '100K+', label: 'Active Buyers' },
        { number: '₹50L+', label: 'Monthly Sales' }
      ],
      testimonial: {
        text: "I now sell my sarees to customers in 15 countries through the marketplace.",
        author: "Sunita Rao",
        role: "Weaver",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Services for
              <span className="text-primary-500 block">Artisan Success</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From raw material sourcing to global sales, we provide everything 
              you need to transform your traditional craft into a thriving business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    activeService === index
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  <service.icon className="w-5 h-5" />
                  <span className="font-medium">{service.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Service Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                 {React.createElement(services[activeService].icon, {
  className: "w-8 h-8 text-primary-500"
})}

                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {services[activeService].title}
                  </h2>
                  <p className="text-primary-500 font-medium">
                    {services[activeService].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[activeService].fullDescription}
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {services[activeService].benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">{benefit.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Image & Stats */}
            <div className="relative">
              <img 
                src={services[activeService].image}
                alt={services[activeService].title}
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {services[activeService].stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-primary-500">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-sm">
                <div className="flex items-center mb-3">
                  <img 
                    src={services[activeService].testimonial.avatar}
                    alt={services[activeService].testimonial.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {services[activeService].testimonial.author}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {services[activeService].testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "{services[activeService].testimonial.text}"
                </p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Ecosystem for Artisan Growth
            </h2>
            <p className="text-xl text-gray-600">
              Integrated services designed to support every aspect of your craft business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeService === index ? 'bg-primary-500' : 'bg-primary-100'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    activeService === index ? 'text-white' : 'text-primary-500'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <button className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Services Work Together
            </h2>
            <p className="text-xl text-gray-600">
              A seamless journey from traditional craft to global business
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Source Materials', description: 'Get quality raw materials at best prices' },
                { step: '02', title: 'Enhance Skills', description: 'Learn new techniques and business skills' },
                { step: '03', title: 'Create Products', description: 'Craft unique products with collaborators' },
                { step: '04', title: 'Sell Globally', description: 'Reach customers worldwide through our marketplace' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  
                  {/* Arrow */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-primary-200 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Craft Business?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of artisans who are already building successful businesses with our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
