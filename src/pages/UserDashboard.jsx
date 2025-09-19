import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  TrendingUp, 
  Users, 
  Package, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Star,
  Calendar,
  DollarSign,
  MessageCircle,
  Bell,
  User,
  Settings,
  BarChart3,
  Target,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Upload,
  Image as ImageIcon,
  Save,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const UserDashboard = () => {
  const { currentUser, userProfile, updateUserProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [userProducts, setUserProducts] = useState([]);
  const [userStats, setUserStats] = useState({
    totalProducts: 0,
    totalSales: 0,
    totalRevenue: 0,
    pendingOrders: 0
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Mock data - replace with actual Firebase data
  useEffect(() => {
    setUserProducts([
      {
        id: 1,
        name: 'Handwoven Cotton Saree',
        price: 2500,
        originalPrice: 3000,
        status: 'active',
        sales: 15,
        revenue: 37500,
        rating: 4.8,
        reviews: 12,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&h=200&fit=crop',
        category: 'Textiles',
        dateAdded: '2024-01-15',
        inStock: 5
      },
      {
        id: 2,
        name: 'Terracotta Vase Set',
        price: 800,
        originalPrice: 1000,
        status: 'active',
        sales: 8,
        revenue: 6400,
        rating: 4.6,
        reviews: 6,
        image: 'https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=200&h=200&fit=crop',
        category: 'Pottery',
        dateAdded: '2024-01-10',
        inStock: 3
      },
      {
        id: 3,
        name: 'Wooden Handicraft Bowl',
        price: 1200,
        originalPrice: 1500,
        status: 'draft',
        sales: 0,
        revenue: 0,
        rating: 0,
        reviews: 0,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop',
        category: 'Woodwork',
        dateAdded: '2024-01-05',
        inStock: 10
      }
    ]);
    
    setUserStats({
      totalProducts: 12,
      totalSales: 147,
      totalRevenue: 456780,
      pendingOrders: 3
    });
  }, []);

  const StatCard = ({ icon: Icon, title, value, change, color, subtitle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <span className={`text-sm font-medium ${
            change > 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 font-medium">{title}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </motion.div>
  );

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            product.status === 'active' ? 'bg-green-100 text-green-800' : 
            product.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {product.status}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex space-x-1">
          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-500">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          {product.rating > 0 && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p className="text-gray-500">Sales</p>
            <p className="font-semibold text-gray-900">{product.sales}</p>
          </div>
          <div>
            <p className="text-gray-500">Revenue</p>
            <p className="font-semibold text-gray-900">₹{product.revenue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-500">Stock</p>
            <p className="font-semibold text-gray-900">{product.inStock}</p>
          </div>
          <div>
            <p className="text-gray-500">Reviews</p>
            <p className="font-semibold text-gray-900">{product.reviews}</p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            <Edit className="w-4 h-4 inline mr-2" />
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProfileForm = () => {
    const [formData, setFormData] = useState({
      name: userProfile?.name || '',
      email: currentUser?.email || '',
      phone: userProfile?.phone || '',
      location: userProfile?.location || '',
      bio: userProfile?.profile?.bio || '',
      specializations: userProfile?.profile?.specializations?.join(', ') || '',
      experience: userProfile?.profile?.experience || '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        await updateUserProfile(currentUser.uid, {
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          profile: {
            bio: formData.bio,
            specializations: formData.specializations.split(',').map(s => s.trim()).filter(s => s),
            experience: formData.experience,
          }
        });
        setSuccessMessage('Profile updated successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        setErrors({ submit: 'Failed to update profile. Please try again.' });
      }
      
      setLoading(false);
    };

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h3>
        
        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            {successMessage}
          </div>
        )}

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl">
          {/* Profile Picture */}
          <div className="flex items-center space-x-6 mb-8">
            <img 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=f97316&color=fff&size=100`}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-primary-100"
            />
            <div>
              <button 
                type="button"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                <Upload className="w-4 h-4 mr-2" />
                Change Photo
              </button>
              <p className="text-gray-600 text-sm mt-2">JPG, PNG or GIF (max. 2MB)</p>
            </div>
          </div>
          
          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name
              </label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone
              </label>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Location
              </label>
              <input 
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-all transition-all"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Bio</label>
            <textarea 
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows="4"
              placeholder="Tell us about yourself and your craft..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Specializations</label>
            <input 
              type="text"
              name="specializations"
              value={formData.specializations}
              onChange={handleInputChange}
              placeholder="e.g., Pottery, Weaving, Wood Carving"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            />
            <p className="text-sm text-gray-500 mt-1">Separate multiple specializations with commas</p>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">Experience</label>
            <textarea 
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows="3"
              placeholder="Describe your experience and achievements..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </button>
            <button
              type="button"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={Package}
                title="Total Products"
                value={userStats.totalProducts}
                change={12}
                color="bg-blue-500"
                subtitle="Active listings"
              />
              <StatCard 
                icon={ShoppingBag}
                title="Total Sales"
                value={userStats.totalSales}
                change={8}
                color="bg-green-500"
                subtitle="This month"
              />
              <StatCard 
                icon={DollarSign}
                title="Revenue"
                value={`₹${(userStats.totalRevenue / 100000).toFixed(1)}L`}
                change={15}
                color="bg-purple-500"
                subtitle="All time"
              />
              <StatCard 
                icon={Clock}
                title="Pending Orders"
                value={userStats.pendingOrders}
                color="bg-orange-500"
                subtitle="Needs attention"
              />
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Revenue Trend</h3>
                  <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                    <option>Last 6 months</option>
                    <option>Last year</option>
                    <option>All time</option>
                  </select>
                </div>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Revenue chart would go here</p>
                  </div>
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Products</h3>
                <div className="space-y-4">
                  {userProducts.slice(0, 3).map((product, index) => (
                    <div key={product.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-full font-medium text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.sales} sales</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">₹{product.revenue.toLocaleString()}</p>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { 
                    action: 'New order received', 
                    time: '2 hours ago', 
                    type: 'success',
                    details: 'Handwoven Cotton Saree - ₹2,500'
                  },
                  { 
                    action: 'Product review received', 
                    time: '4 hours ago', 
                    type: 'info',
                    details: '5 stars for Terracotta Vase Set'
                  },
                  { 
                    action: 'Payment processed', 
                    time: '1 day ago', 
                    type: 'success',
                    details: '₹6,400 deposited to your account'
                  },
                  { 
                    action: 'Workshop enrollment', 
                    time: '2 days ago', 
                    type: 'warning',
                    details: 'Digital Marketing for Artisans'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'info' ? 'bg-blue-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-gray-600 text-sm">{activity.details}</p>
                      <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">My Products</h3>
                <p className="text-gray-600">Manage your product listings</p>
              </div>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add Product
              </button>
            </div>

            {/* Product Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Active</p>
                <p className="text-2xl font-bold text-green-600">
                  {userProducts.filter(p => p.status === 'active').length}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Drafts</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {userProducts.filter(p => p.status === 'draft').length}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">
                  {userProducts.filter(p => p.inStock === 0).length}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">2.4K</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Management</h3>
            
            {/* Order Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-700">3</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600">Processing</p>
                <p className="text-2xl font-bold text-blue-700">7</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-600">Completed</p>
                <p className="text-2xl font-bold text-green-700">142</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-600">Cancelled</p>
                <p className="text-2xl font-bold text-red-700">5</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      id: '#ORD001', 
                      product: 'Cotton Saree', 
                      customer: 'Priya Sharma', 
                      amount: 2500, 
                      status: 'pending',
                      date: '2024-02-10'
                    },
                    { 
                      id: '#ORD002', 
                      product: 'Terracotta Vase', 
                      customer: 'Amit Kumar', 
                      amount: 800, 
                      status: 'shipped',
                      date: '2024-02-08'
                    },
                    { 
                      id: '#ORD003', 
                      product: 'Wooden Bowl', 
                      customer: 'Sarah Johnson', 
                      amount: 1200, 
                      status: 'delivered',
                      date: '2024-02-05'
                    }
                  ].map((order, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-gray-900 font-medium">{order.id}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={userProducts[0].image} 
                            alt={order.product}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <span className="text-gray-700">{order.product}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{order.customer}</td>
                      <td className="py-4 px-4 text-gray-900 font-semibold">₹{order.amount.toLocaleString()}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{order.date}</td>
                      <td className="py-4 px-4">
                        <button className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics & Insights</h3>
              <p className="text-gray-600">Track your performance and grow your business</p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+23%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h4>
                <p className="text-3xl font-bold text-gray-900 mb-1">3.8%</p>
                <p className="text-gray-600 text-sm">This month</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+12%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Avg Order Value</h4>
                <p className="text-3xl font-bold text-gray-900 mb-1">₹2,340</p>
                <p className="text-gray-600 text-sm">This month</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+8%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Return Customers</h4>
                <p className="text-3xl font-bold text-gray-900 mb-1">34%</p>
                <p className="text-gray-600 text-sm">This month</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Sales Performance</h4>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Sales chart would go here</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Product Categories</h4>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Category breakdown chart would go here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return <ProfileForm />;

      default:
        return null;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {userProfile?.name || currentUser?.email}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <MessageCircle className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* User Info Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile?.name || currentUser?.email)}&background=f97316&color=fff&size=80`}
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">{userProfile?.name || 'Your Name'}</h2>
                <p className="text-gray-600">{userProfile?.userType || 'Artisan'}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {userProfile?.location || 'Location not set'}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Member since {new Date(userProfile?.createdAt?.toDate() || Date.now()).getFullYear()}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-gray-700 ml-1">4.8</span>
                </div>
                <Award className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary-500 border-primary-500 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 border-transparent hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard;
