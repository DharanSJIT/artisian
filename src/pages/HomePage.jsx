import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Users, 
  GraduationCap, 
  HandHeart, 
  Eye, 
  ShoppingCart,
  Star,
  TrendingUp,
  Award,
  Globe,
  ArrowRight,
  Play,
  CheckCircle,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';

const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: Truck,
      title: 'Direct Raw Material Supply',
      description: 'Connect directly with verified suppliers, eliminating middlemen and reducing costs by up to 40%.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      benefits: ['40% cost reduction', 'Quality guarantee', 'Fast delivery']
    },
    {
      icon: GraduationCap,
      title: 'Skill Enhancement Workshops',
      description: 'Regular training sessions to upgrade traditional techniques with modern methods.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop',
      benefits: ['Expert instructors', 'Hands-on training', 'Certificate programs']
    },
    {
      icon: Users,
      title: 'Village Internship Program',
      description: 'Local students bridge the digital gap for artisans without mobile access.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      benefits: ['Digital literacy', 'Local support', 'Community growth']
    },
    {
      icon: HandHeart,
      title: 'Collaborative Hub',
      description: 'Match complementary skills - pottery makers with painters, weavers with dyers.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
      benefits: ['Skill matching', 'Project collaboration', 'Network building']
    },
    {
      icon: Eye,
      title: 'AR/VR Product Preview',
      description: 'Virtual showrooms allowing customers to visualize products before purchase.',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop',
      benefits: ['Virtual try-on', '3D visualization', 'Enhanced shopping']
    },
    {
      icon: ShoppingCart,
      title: 'Global Marketplace',
      description: 'Sell handcrafted products to a worldwide audience with fair pricing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      benefits: ['Global reach', 'Fair pricing', 'Secure payments']
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Artisans', icon: Users, change: '+12%' },
    { number: '500+', label: 'Material Suppliers', icon: Truck, change: '+8%' },
    { number: '50K+', label: 'Products Sold', icon: ShoppingCart, change: '+25%' },
    { number: '95%', label: 'Satisfaction Rate', icon: Star, change: '+3%' }
  ];

  const testimonials = [
    {
      name: 'Maya Patel',
      role: 'Potter from Gujarat',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'Through Artisan Connect, I\'ve expanded my pottery business globally. My monthly income increased from ₹8,000 to ₹35,000 in just 6 months.',
      rating: 5,
      location: 'Gujarat, India',
      product: 'Traditional Pottery'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Textile Artisan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'The workshop programs helped me learn digital marketing. Now I sell my handwoven textiles to customers in 15 countries.',
      rating: 5,
      location: 'Rajasthan, India',
      product: 'Handwoven Textiles'
    },
    {
      name: 'Anita Sharma',
      role: 'Jewelry Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The collaborative hub connected me with other artisans. Together, we create unique jewelry pieces that sell for premium prices.',
      rating: 5,
      location: 'Jaipur, India',
      product: 'Handcrafted Jewelry'
    }
  ];

  const recentProducts = [
    {
      id: 1,
      name: 'Handwoven Silk Saree',
      artisan: 'Maya Patel',
      price: 3500,
      originalPrice: 4500,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop',
      rating: 4.8,
      sales: 127,
      isNew: true,
      discount: 22
    },
    {
      id: 2,
      name: 'Ceramic Tea Set',
      artisan: 'Rajesh Kumar',
      price: 1200,
      originalPrice: 1500,
      image: 'https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=300&h=300&fit=crop',
      rating: 4.9,
      sales: 89,
      isFeatured: true,
      discount: 20
    },
    {
      id: 3,
      name: 'Wooden Handicraft',
      artisan: 'Anita Sharma',
      price: 800,
      originalPrice: 1000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      rating: 4.7,
      sales: 203,
      discount: 20
    },
    {
      id: 4,
      name: 'Brass Sculpture',
      artisan: 'Vikram Singh',
      price: 2500,
      originalPrice: 3000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      rating: 4.6,
      sales: 56,
      discount: 17
    }
  ];

  const upcomingEvents = [
    {
      title: 'Traditional Pottery Workshop',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Mumbai, Maharashtra',
      attendees: 45,
      maxAttendees: 50,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop'
    },
    {
      title: 'Digital Marketing for Artisans',
      date: '2024-02-20',
      time: '2:00 PM',
      location: 'Online Webinar',
      attendees: 180,
      maxAttendees: 200,
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=150&fit=crop'
    },
    {
      title: 'Textile Dyeing Masterclass',
      date: '2024-02-25',
      time: '11:00 AM',
      location: 'Jaipur, Rajasthan',
      attendees: 28,
      maxAttendees: 30,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  🎉 Over 10,000 artisans connected
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Artisans Through
                <span className="text-primary-500 block">Digital Innovation</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of artisans who've increased their revenue by 300% 
                through our comprehensive platform connecting traditional crafts with modern markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/auth"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  Start Selling Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                    <div className="text-green-500 text-xs font-medium">{stat.change}</div>
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
                
                {/* Floating Stats Cards */}
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Platform for Artisan Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From raw material sourcing to global sales, we provide everything 
              artisans need to thrive in the digital economy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors inline-flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Discover amazing handcrafted products from talented artisans</p>
            </div>
            <Link 
              to="/marketplace"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
                    )}
                    {product.isFeatured && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                    )}
                    {product.discount && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {product.artisan}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary-500">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{product.sales} sold</span>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real artisans, real results, real transformation</p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-900 font-medium leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonials[activeTestimonial].location}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Workshops & Events</h2>
              <p className="text-gray-600">Join our community events and enhance your skills</p>
            </div>
            <Link 
              to="/events"
              className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center"
            >
              View All Events
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-primary-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {event.attendees}/{event.maxAttendees} attending
                    </span>
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
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
              Ready to Transform Your Craft Business?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of artisans who've already transformed their traditional 
              crafts into thriving digital businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Talk to Expert
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </section>
    </div>
  );
};

export default HomePage;
