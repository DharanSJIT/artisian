import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  ChevronDown, 
  LogOut, 
  Menu, 
  X,
  Truck,
  Users,
  GraduationCap,
  HandHeart,
  Eye,
  ShoppingCart,
  Settings,
  Bell,
  Search,
  Palette
} from 'lucide-react';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { currentUser, logout, userRole } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const services = [
    { 
      name: 'Raw Material Supply', 
      icon: Truck, 
      href: '/services/supply',
      description: 'Direct connection with verified suppliers'
    },
    { 
      name: 'Artisan Workshops', 
      icon: GraduationCap, 
      href: '/services/workshops',
      description: 'Skill development and training programs'
    },
    { 
      name: 'Village Internship', 
      icon: Users, 
      href: '/services/internship',
      description: 'Bridging digital gaps in rural areas'
    },
    { 
      name: 'Collaborative Hub', 
      icon: HandHeart, 
      href: '/services/collaboration',
      description: 'Connect with complementary artisans'
    },
    { 
      name: 'AR/VR Preview', 
      icon: Eye, 
      href: '/services/preview',
      description: 'Virtual product demonstrations'
    },
    { 
      name: 'Marketplace', 
      icon: ShoppingCart, 
      href: '/marketplace',
      description: 'Global platform for selling products'
    },
  ];

  const isActivePath = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            {/* <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
              <Palette className="w-6 h-6 text-white" />
            </div> */}
            <span className="text-xl font-bold text-gray-800 group-hover:text-primary-500 transition-colors">
              Artisan Connect
            </span>
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, artisans, or services..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/home" 
              className={`font-medium transition-colors ${
                isActivePath('/home') 
                  ? 'text-primary-500 border-b-2 border-primary-500 pb-1' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isActivePath('/services') 
                    ? 'text-primary-500' 
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-4 z-50"
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start space-x-4 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <service.icon className="w-5 h-5 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/explore" 
              className={`font-medium transition-colors ${
                isActivePath('/explore') 
                  ? 'text-primary-500 border-b-2 border-primary-500 pb-1' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Explore
            </Link>
            
            <Link 
              to="/overview" 
              className={`font-medium transition-colors ${
                isActivePath('/overview') 
                  ? 'text-primary-500 border-b-2 border-primary-500 pb-1' 
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Overview
            </Link>
          </nav>

          {/* User Profile & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <>
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-primary-500 transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.email)}&background=f97316&color=fff`}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900">
                        {currentUser.displayName || currentUser.email}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                      >
                        <Link
                          to="/dashboard"
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User className="w-4 h-4" />
                          <span>Dashboard</span>
                        </Link>
                        
                        <Link
                          to="/settings"
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </Link>

                        {userRole === 'admin' && (
                          <Link
                            to="/admin"
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Settings className="w-4 h-4" />
                            <span>Admin Panel</span>
                          </Link>
                        )}
                        
                        <hr className="my-2" />
                        
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            handleLogout();
                          }}
                          className="flex items-center space-x-3 w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/auth" 
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>

              <Link 
                to="/home" 
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActivePath('/home') 
                    ? 'text-primary-500 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <service.icon className="w-5 h-5" />
                  <span className="font-medium">{service.name}</span>
                </Link>
              ))}
              
              <Link 
                to="/explore" 
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActivePath('/explore') 
                    ? 'text-primary-500 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore
              </Link>
              
              <Link 
                to="/overview" 
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActivePath('/overview') 
                    ? 'text-primary-500 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Overview
              </Link>
              
              {currentUser ? (
                <>
                  <hr className="my-4" />
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center space-x-3 w-full px-3 py-2 text-left text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <hr className="my-4" />
                  <Link
                    to="/auth"
                    className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center font-medium py-3 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
