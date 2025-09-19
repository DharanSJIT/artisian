import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Package, 
  TrendingUp, 
  DollarSign,
  UserCheck,
  UserX,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  BarChart3,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Globe,
  Award,
  Settings,
  Bell,
  RefreshCw,
  Calendar,
  MapPin,
  Star,
  TrendingDown
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [adminStats, setAdminStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalRevenue: 0,
    pendingApprovals: 0
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data - replace with actual Firebase data
  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: 'Maya Patel',
        email: 'maya@example.com',
        userType: 'artisan',
        status: 'active',
        joinDate: '2024-01-15',
        totalSales: 256000,
        totalProducts: 45,
        location: 'Gujarat, India',
        rating: 4.8,
        lastActive: '2024-02-10',
        verified: true
      },
      {
        id: 2,
        name: 'Rajesh Kumar',
        email: 'rajesh@example.com',
        userType: 'supplier',
        status: 'pending',
        joinDate: '2024-02-10',
        totalSales: 450000,
        totalProducts: 67,
        location: 'Rajasthan, India',
        rating: 4.6,
        lastActive: '2024-02-11',
        verified: false
      },
      {
        id: 3,
        name: 'Priya Mehta',
        email: 'priya@example.com',
        userType: 'artisan',
        status: 'active',
        joinDate: '2024-01-20',
        totalSales: 189000,
        totalProducts: 23,
        location: 'Maharashtra, India',
        rating: 4.9,
        lastActive: '2024-02-11',
                verified: true
      },
      {
        id: 4,
        name: 'Vikram Singh',
        email: 'vikram@example.com',
        userType: 'artisan',
        status: 'suspended',
        joinDate: '2024-01-05',
        totalSales: 67000,
        totalProducts: 12,
        location: 'Karnataka, India',
        rating: 4.2,
        lastActive: '2024-02-08',
        verified: true
      }
    ]);

    setProducts([
      {
        id: 1,
        name: 'Handwoven Silk Saree',
        artisan: 'Maya Patel',
        artisanId: 1,
        price: 8500,
        status: 'approved',
        sales: 15,
        revenue: 127500,
        rating: 4.8,
        reviews: 12,
        category: 'Textiles',
        dateAdded: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&h=100&fit=crop'
      },
      {
        id: 2,
        name: 'Ceramic Pottery Set',
        artisan: 'Rajesh Kumar',
        artisanId: 2,
        price: 2100,
        status: 'pending',
        sales: 0,
        revenue: 0,
        rating: 0,
        reviews: 0,
        category: 'Ceramics',
        dateAdded: '2024-02-10',
        image: 'https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=100&h=100&fit=crop'
      },
      {
        id: 3,
        name: 'Silver Filigree Jewelry',
        artisan: 'Priya Mehta',
        artisanId: 3,
        price: 3200,
        status: 'approved',
        sales: 8,
        revenue: 25600,
        rating: 4.9,
        reviews: 6,
        category: 'Jewelry',
        dateAdded: '2024-01-25',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop'
      }
    ]);

    setAdminStats({
      totalUsers: 1247,
      totalProducts: 3456,
      totalRevenue: 23400000,
      pendingApprovals: 23,
      activeUsers: 1156,
      newUsersThisMonth: 89,
      totalOrders: 5678,
      averageOrderValue: 2340
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
        {change !== undefined && (
          <span className={`text-sm font-medium flex items-center ${
            change > 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {change > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 font-medium">{title}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </motion.div>
  );

  const UserManagementTable = () => {
    const filteredUsers = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = selectedFilter === 'all' || user.status === selectedFilter;
      return matchesSearch && matchesFilter;
    });

    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">User Management</h3>
            <p className="text-gray-600">Manage artisans, suppliers, and customers</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none w-full sm:w-64"
              />
            </div>
            
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="suspended">Suspended</option>
            </select>
            
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center justify-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Total Users</p>
                <p className="text-2xl font-bold text-blue-700">{users.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Active</p>
                <p className="text-2xl font-bold text-green-700">
                  {users.filter(u => u.status === 'active').length}
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-700">
                  {users.filter(u => u.status === 'pending').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Suspended</p>
                <p className="text-2xl font-bold text-red-700">
                  {users.filter(u => u.status === 'suspended').length}
                </p>
              </div>
              <UserX className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">User</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Location</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Sales</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Products</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&size=40`}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium text-gray-900">{user.name}</p>
                          {user.verified && (
                            <Award className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p className="text-xs text-gray-500">
                          Last active: {user.lastActive}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.userType === 'artisan' ? 'bg-blue-100 text-blue-800' :
                      user.userType === 'supplier' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {user.userType}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                      {user.location}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-900 font-semibold">
                      ₹{(user.totalSales / 1000).toFixed(0)}K
                    </div>
                    <div className="text-sm text-gray-500">
                      {user.joinDate}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-900 font-medium">{user.totalProducts}</div>
                    <div className="text-sm text-gray-500">products</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-gray-900 font-medium">{user.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      user.status === 'suspended' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-600 p-1" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-500 hover:text-green-600 p-1" title="Approve">
                        <UserCheck className="w-4 h-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-600 p-1" title="Suspend">
                        <UserX className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-600 p-1" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No users found matching your criteria</p>
          </div>
        )}
      </div>
    );
  };

  const ProductManagementTable = () => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Product Management</h3>
          <p className="text-gray-600">Review and manage product listings</p>
        </div>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </button>
      </div>

      {/* Product Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600">Total Products</p>
              <p className="text-2xl font-bold text-blue-700">{products.length}</p>
            </div>
            <Package className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600">Approved</p>
              <p className="text-2xl font-bold text-green-700">
                {products.filter(p => p.status === 'approved').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600">Pending Review</p>
              <p className="text-2xl font-bold text-yellow-700">
                {products.filter(p => p.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600">Rejected</p>
              <p className="text-2xl font-bold text-red-700">0</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Artisan</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Sales</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                    />
                    <div>
                      <p className="font-medium text-gray-900 line-clamp-1">{product.name}</p>
                      <p className="text-sm text-gray-600">Added {product.dateAdded}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-gray-900 font-medium">{product.artisan}</div>
                  <div className="text-sm text-gray-500">ID: {product.artisanId}</div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {product.category}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-gray-900 font-semibold">₹{product.price.toLocaleString()}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-gray-900 font-medium">{product.sales}</div>
                  <div className="text-sm text-gray-500">₹{product.revenue.toLocaleString()}</div>
                </td>
                <td className="py-4 px-4">
                  {product.rating > 0 ? (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-gray-900">{product.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                    </div>
                  ) : (
                    <span className="text-gray-500 text-sm">No ratings</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === 'approved' ? 'bg-green-100 text-green-800' :
                    product.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-600 p-1" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-500 hover:text-green-600 p-1" title="Approve">
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button className="text-red-500 hover:text-red-600 p-1" title="Reject">
                      <XCircle className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                icon={Users}
                title="Total Users"
                value={adminStats.totalUsers.toLocaleString()}
                change={12}
                color="bg-blue-500"
                subtitle={`${adminStats.activeUsers} active`}
              />
              <StatCard 
                icon={Package}
                title="Total Products"
                value={adminStats.totalProducts.toLocaleString()}
                change={8}
                color="bg-green-500"
                subtitle="Across all categories"
              />
              <StatCard 
                icon={DollarSign}
                title="Platform Revenue"
                value={`₹${(adminStats.totalRevenue / 10000000).toFixed(1)}Cr`}
                change={15}
                color="bg-purple-500"
                subtitle="Gross marketplace value"
              />
              <StatCard 
                icon={AlertTriangle}
                title="Pending Reviews"
                value={adminStats.pendingApprovals}
                color="bg-orange-500"
                subtitle="Needs attention"
              />
            </div>

            {/* Additional Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <StatCard 
                icon={TrendingUp}
                title="Monthly Orders"
                value={adminStats.totalOrders.toLocaleString()}
                change={18}
                color="bg-indigo-500"
                subtitle="This month"
              />
              <StatCard 
                icon={DollarSign}
                title="Avg Order Value"
                value={`₹${adminStats.averageOrderValue.toLocaleString()}`}
                change={5}
                color="bg-teal-500"
                subtitle="Per transaction"
              />
              <StatCard 
                icon={Users}
                title="New Users"
                value={adminStats.newUsersThisMonth}
                change={23}
                color="bg-pink-500"
                subtitle="This month"
              />
            </div>

            {/* Charts and Analytics */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Platform Growth Chart */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Platform Growth</h3>
                  <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                    <option>Last 6 months</option>
                    <option>Last year</option>
                    <option>All time</option>
                  </select>
                </div>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Growth analytics chart</p>
                  </div>
                </div>
              </div>

              {/* User Distribution */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">User Distribution</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Artisans</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">67%</span>
                      <div className="text-sm text-gray-500">834 users</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Suppliers</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">23%</span>
                      <div className="text-sm text-gray-500">287 users</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Customers</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">10%</span>
                      <div className="text-sm text-gray-500">126 users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Platform Activity</h3>
              <div className="space-y-4">
                {[
                  { 
                    action: 'New artisan registered', 
                    user: 'Kamala Devi from Odisha',
                    time: '5 minutes ago', 
                    type: 'user',
                    status: 'pending'
                  },
                  { 
                    action: 'Product approved', 
                    user: 'Brass Sculpture by Vikram Singh',
                    time: '1 hour ago', 
                    type: 'product',
                    status: 'success'
                  },
                  { 
                    action: 'Large order placed', 
                    user: '₹45,000 order from international customer',
                    time: '2 hours ago', 
                    type: 'order',
                    status: 'success'
                  },
                  { 
                    action: 'Quality issue reported', 
                    user: 'Product ID #3456 requires review',
                    time: '4 hours ago', 
                    type: 'issue',
                    status: 'warning'
                  },
                  { 
                    action: 'Workshop completed', 
                    user: 'Digital Marketing workshop - 45 attendees',
                    time: '1 day ago', 
                    type: 'workshop',
                    status: 'success'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'user' ? 'bg-blue-100' :
                      activity.type === 'product' ? 'bg-green-100' :
                      activity.type === 'order' ? 'bg-purple-100' :
                      activity.type === 'issue' ? 'bg-red-100' :
                      'bg-yellow-100'
                    }`}>
                      {activity.type === 'user' && <Users className="w-5 h-5 text-blue-600" />}
                      {activity.type === 'product' && <Package className="w-5 h-5 text-green-600" />}
                      {activity.type === 'order' && <ShoppingBag className="w-5 h-5 text-purple-600" />}
                      {activity.type === 'issue' && <AlertTriangle className="w-5 h-5 text-red-600" />}
                      {activity.type === 'workshop' && <Award className="w-5 h-5 text-yellow-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-gray-600 text-sm">{activity.user}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'success' ? 'bg-green-100 text-green-700' :
                          activity.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          activity.status === 'warning' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'users':
        return <UserManagementTable />;

      case 'products':
        return <ProductManagementTable />;

      case 'analytics':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Analytics</h3>
              <p className="text-gray-600">Comprehensive insights and performance metrics</p>
            </div>

            {/* Advanced Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+15%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Platform Engagement</h4>
                <p className="text-3xl font-bold text-gray-900 mb-1">78.5%</p>
                <p className="text-gray-600 text-sm">Daily active users</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+8%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h4>
                <p className="text-3xl font-bold text-gray-900 mb-1">47</p>
                <p className="text-gray-600 text-sm">Countries served</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-green-500 text-sm font-medium">+2%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Trust Score</h4>
                <p className="text-3xl font-bold text-gray-900 mb-1">96.8%</p>
                <p className="text-gray-600 text-sm">Customer satisfaction</p>
              </div>
            </div>

            {/* Analytics Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Revenue Analytics</h4>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Revenue analytics chart</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Geographic Distribution</h4>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Geographic distribution map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Settings</h3>
              <p className="text-gray-600">Configure platform-wide settings and preferences</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* General Settings */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">General Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Platform Name</label>
                    <input 
                      type="text"
                      defaultValue="Artisan Connect"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                       />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Support Email</label>
                    <input 
                      type="email"
                      defaultValue="support@artisanconnect.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Commission Rate (%)</label>
                    <input 
                      type="number"
                      defaultValue="5"
                      min="0"
                      max="20"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Maintenance Mode</label>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="maintenance" className="rounded" />
                      <label htmlFor="maintenance" className="text-gray-700">Enable maintenance mode</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Two-Factor Authentication</label>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="2fa" defaultChecked className="rounded" />
                      <label htmlFor="2fa" className="text-gray-700">Require 2FA for admin accounts</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Session Timeout (minutes)</label>
                    <input 
                      type="number"
                      defaultValue="60"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Failed Login Attempts</label>
                    <input 
                      type="number"
                      defaultValue="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Auto Backup</label>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" id="backup" defaultChecked className="rounded" />
                      <label htmlFor="backup" className="text-gray-700">Enable daily backups</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Notification Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">New User Registration</p>
                      <p className="text-sm text-gray-600">Get notified when new users register</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Product Approval Needed</p>
                      <p className="text-sm text-gray-600">Alert when products need review</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">System Alerts</p>
                      <p className="text-sm text-gray-600">Technical and security alerts</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Weekly Reports</p>
                      <p className="text-sm text-gray-600">Automated weekly performance reports</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </div>
              </div>

              {/* API Settings */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">API Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">API Rate Limit</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                      <option>1000 requests/hour</option>
                      <option>5000 requests/hour</option>
                      <option>10000 requests/hour</option>
                      <option>Unlimited</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">API Version</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
                      <option>v1.0</option>
                      <option>v2.0 (Beta)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Webhook URL</label>
                    <input 
                      type="url"
                      placeholder="https://your-webhook-url.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors">
                Reset to Defaults
              </button>
              <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Platform management and analytics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {adminStats.pendingApprovals}
                </span>
              </button>
              <button className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Approve Users</p>
                  <p className="text-sm text-gray-600">{users.filter(u => u.status === 'pending').length} pending</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Review Products</p>
                  <p className="text-sm text-gray-600">{products.filter(p => p.status === 'pending').length} pending</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">View Reports</p>
                  <p className="text-sm text-gray-600">Latest analytics</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Handle Issues</p>
                  <p className="text-sm text-gray-600">3 open tickets</p>
                </div>
              </button>
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
                {/* Show notification badges */}
                {tab.id === 'users' && users.filter(u => u.status === 'pending').length > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {users.filter(u => u.status === 'pending').length}
                  </span>
                )}
                {tab.id === 'products' && products.filter(p => p.status === 'pending').length > 0 && (
                  <span className="bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {products.filter(p => p.status === 'pending').length}
                  </span>
                )}
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

export default AdminDashboard;
