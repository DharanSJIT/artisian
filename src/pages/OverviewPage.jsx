import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Heart, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  BookOpen,
  Lightbulb,
  Handshake,
  Compass
} from 'lucide-react';

const OverviewPage = () => {
  const uniquePoints = [
    {
      icon: Target,
      title: 'AI-Powered Quality Verification',
      description: 'Advanced image recognition technology verifies raw material quality automatically, ensuring artisans receive only premium materials.',
      benefit: '99.8% accuracy in quality detection'
    },
    {
      icon: Shield,
      title: 'Blockchain Supply Chain Tracking',
      description: 'Complete transparency from supplier to artisan with immutable blockchain records, building trust and accountability.',
      benefit: 'Full supply chain transparency'
    },
    {
      icon: Zap,
      title: 'Voice Commerce Integration',
      description: 'Voice-enabled ordering system for artisans with limited literacy, making technology accessible to everyone.',
      benefit: 'Zero barriers to entry'
    },
    {
      icon: Globe,
      title: 'Smart Contract Payments',
      description: 'Automated payments upon delivery verification using smart contracts, eliminating payment delays and disputes.',
      benefit: 'Instant, secure payments'
    },
    {
      icon: Users,
      title: 'AI Skill Matching Algorithm',
      description: 'Machine learning algorithm matches complementary artisan skills for collaborative projects and joint ventures.',
      benefit: '85% successful collaboration rate'
    },
    {
      icon: Award,
      title: 'Carbon Footprint Tracker',
      description: 'Track and reduce environmental impact with our comprehensive carbon footprint tracking system.',
      benefit: 'Certified eco-friendly platform'
    }
  ];

  const impactStats = [
    { number: '10,000+', label: 'Artisans Empowered', icon: Users },
    { number: '₹50 Crores+', label: 'Revenue Generated', icon: TrendingUp },
    { number: '50+', label: 'Countries Reached', icon: Globe },
    { number: '95%', label: 'Satisfaction Rate', icon: Star },
    { number: '500+', label: 'Verified Suppliers', icon: Shield },
    { number: '100,000+', label: 'Products Sold', icon: Briefcase }
  ];

  const missionValues = [
    {
      icon: Heart,
      title: 'Preserve Heritage',
      description: 'Safeguarding traditional crafts and passing them to future generations through digital innovation.'
    },
    {
      icon: Users,
      title: 'Empower Communities',
      description: 'Creating sustainable livelihoods for artisan communities while respecting their cultural values.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Breaking geographical barriers to connect artisans with worldwide markets and opportunities.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to solve real-world problems faced by artisans.'
    }
  ];

  const teamMembers = [
    {
      name: 'Arjun Patel',
      role: 'CEO & Co-Founder',
      bio: 'Former tech executive with 15 years experience. Passionate about using technology for social impact.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Co-Founder',
      bio: 'AI/ML expert and former Google engineer. Specializes in building scalable platforms for social good.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Artisan Relations',
      bio: 'Third-generation artisan with deep understanding of traditional crafts and community needs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Meera Joshi',
      role: 'Head of Sustainability',
      bio: 'Environmental scientist focused on sustainable practices and eco-friendly business models.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'UN Sustainable Development Goals Partner',
      description: 'Recognized as official partner for SDG 8 (Decent Work) and SDG 10 (Reduced Inequalities)'
    },
    {
      year: '2023',
      title: 'UNESCO Cultural Heritage Award',
      description: 'Awarded for outstanding contribution to preserving intangible cultural heritage'
    },
    {
      year: '2023',
      title: 'Forbes 30 Under 30 Social Impact',
      description: 'Founders recognized in Forbes 30 Under 30 list for social entrepreneurship'
    },
    {
      year: '2022',
      title: 'Microsoft AI for Good Grant',
      description: 'Received $500K grant for AI-powered quality verification system'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Revolutionizing Traditional Crafts
                <span className="text-primary-500 block">Through Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We're not just a platform—we're a movement to preserve cultural heritage 
                while empowering artisans with cutting-edge technology and global market access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
                  <Compass className="w-5 h-5 mr-2" />
                  Our Story
                </button>
                <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Impact Report
                </button>
              </div>
            </motion.div>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary-200 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Unique Value Propositions */}
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
              What Makes Us Unique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've developed groundbreaking solutions that address real challenges 
              faced by artisans in the digital age.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {uniquePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{point.description}</p>
                    <div className="flex items-center text-green-600 font-medium">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {point.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between traditional craftsmanship and modern technology, 
                creating sustainable livelihoods for artisan communities while preserving 
                cultural heritage for future generations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that technology should amplify human creativity, not replace it. 
                Our platform empowers artisans with tools and opportunities while respecting 
                the authenticity and cultural significance of their crafts.
              </p>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
                Learn Our Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544376936-7e992d5fdf5e?w=600&h=700&fit=crop" 
                alt="Artisan at work"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate individuals working together to create meaningful change
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600">
              Our impact has been recognized by leading organizations worldwide
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start space-x-6 mb-12"
              >
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {achievement.year}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Whether you're an artisan, supplier, or someone passionate about 
              preserving cultural heritage, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Handshake className="w-5 h-5 mr-2" />
                Partner With Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Join Community
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

export default OverviewPage;
