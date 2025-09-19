import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Heart, 
  ShoppingCart, 
  Star, 
  Eye, 
  Share2,
  MapPin,
  Truck,
  Shield,
  Award,
  TrendingUp,
  SlidersHorizontal,
  X
} from 'lucide-react';

const MarketplacePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

    const categories = [
    { id: 'all', name: 'All Products', count: 2456 },
    { id: 'textiles', name: 'Textiles', count: 456 },
    { id: 'pottery', name: 'Pottery & Ceramics', count: 234 },
    { id: 'jewelry', name: 'Jewelry', count: 345 },
    { id: 'woodwork', name: 'Woodwork', count: 189 },
    { id: 'metalwork', name: 'Metalwork', count: 167 },
    { id: 'leather', name: 'Leather Goods', count: 123 },
    { id: 'home-decor', name: 'Home Decor', count: 298 }
  ];

  const products = [
    {
      id: 1,
      name: 'Handwoven Silk Saree - Kanchipuram',
      description: 'Authentic Kanchipuram silk saree with traditional zari work. Handwoven by master craftsmen.',
      price: 8500,
      originalPrice: 12000,
      discount: 29,
      rating: 4.9,
      reviews: 124,
      images: [
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400&h=400&fit=crop'
      ],
      category: 'textiles',
      artisan: {
        name: 'Maya Patel',
        location: 'Tamil Nadu, India',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        verified: true,
        rating: 4.8,
        totalProducts: 45
      },
      tags: ['handwoven', 'silk', 'traditional', 'wedding'],
      inStock: 5,
      shipped: 'Worldwide',
      delivery: '7-10 days',
      featured: true,
      bestseller: true,
      wishlistCount: 234
    },
    {
      id: 2,
      name: 'Terracotta Tea Set - Traditional Design',
      description: 'Beautiful handcrafted terracotta tea set perfect for daily use. Made with natural clay.',
      price: 2100,
      originalPrice: 2800,
      discount: 25,
      rating: 4.7,
      reviews: 89,
      images: [
        'https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
      ],
      category: 'pottery',
      artisan: {
        name: 'Rajesh Kumar',
        location: 'Gujarat, India',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        verified: true,
        rating: 4.9,
        totalProducts: 67
      },
      tags: ['terracotta', 'tea-set', 'handcrafted', 'eco-friendly'],
      inStock: 12,
      shipped: 'India only',
      delivery: '3-5 days',
      featured: false,
      bestseller: false,
      wishlistCount: 156
    },
    {
      id: 3,
      name: 'Silver Filigree Earrings - Ethnic Design',
      description: 'Intricate silver filigree earrings showcasing traditional craftsmanship and elegant design.',
      price: 3200,
      originalPrice: 4000,
      discount: 20,
      rating: 4.8,
      reviews: 67,
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop'
      ],
      category: 'jewelry',
      artisan: {
        name: 'Priya Mehta',
        location: 'Rajasthan, India',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face',
        verified: true,
        rating: 4.7,
        totalProducts: 89
      },
      tags: ['silver', 'filigree', 'earrings', 'ethnic'],
      inStock: 8,
      shipped: 'Worldwide',
      delivery: '5-7 days',
      featured: true,
      bestseller: true,
      wishlistCount: 89
    },
    {
      id: 4,
      name: 'Wooden Carved Elephant - Miniature Art',
      description: 'Exquisite miniature wooden elephant carved with intricate details. Perfect decorative piece.',
      price: 1800,
      originalPrice: 2200,
      discount: 18,
      rating: 4.6,
      reviews: 45,
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      ],
      category: 'woodwork',
      artisan: {
        name: 'Vikram Singh',
        location: 'Karnataka, India',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
        verified: true,
        rating: 4.8,
        totalProducts: 34
      },
      tags: ['wooden', 'carved', 'elephant', 'decorative'],
      inStock: 15,
      shipped: 'Worldwide',
      delivery: '4-6 days',
      featured: false,
      bestseller: false,
      wishlistCount: 67
    },
    {
      id: 5,
      name: 'Brass Diya Set - Festival Collection',
      description: 'Traditional brass diyas perfect for festivals and religious ceremonies. Set of 6 pieces.',
      price: 1450,
      originalPrice: 1800,
      discount: 19,
      rating: 4.9,
      reviews: 98,
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop'
      ],
      category: 'metalwork',
      artisan: {
        name: 'Anita Sharma',
        location: 'Uttar Pradesh, India',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        verified: true,
        rating: 4.9,
        totalProducts: 78
      },
      tags: ['brass', 'diya', 'festival', 'religious'],
      inStock: 20,
      shipped: 'India only',
      delivery: '2-4 days',
      featured: true,
      bestseller: true,
      wishlistCount: 145
    },
    {
      id: 6,
      name: 'Leather Journal - Handbound Diary',
      description: 'Premium leather-bound journal with handmade paper. Perfect for writing and sketching.',
      price: 2800,
      originalPrice: 3500,
      discount: 20,
      rating: 4.5,
      reviews: 34,
      images: [
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=400&h=400&fit=crop'
      ],
      category: 'leather',
      artisan: {
        name: 'Suresh Patel',
        location: 'Maharashtra, India',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        verified: true,
        rating: 4.6,
        totalProducts: 23
      },
      tags: ['leather', 'journal', 'handbound', 'premium'],
      inStock: 10,
      shipped: 'Worldwide',
      delivery: '6-8 days',
      featured: false,
      bestseller: false,
      wishlistCount: 78
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'bestseller':
        return b.reviews - a.reviews;
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const ProductCard = ({ product, isGrid = true }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group ${
        isGrid ? '' : 'flex gap-6'
      }`}
    >
      <div className={`relative ${isGrid ? 'h-64' : 'w-80 h-48 flex-shrink-0'} overflow-hidden`}>
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              -{product.discount}% OFF
            </span>
          )}
          {product.bestseller && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Bestseller
            </span>
          )}
          {product.featured && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className={`p-6 ${isGrid ? '' : 'flex-1'}`}>
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-semibold text-gray-900 ${isGrid ? 'text-lg' : 'text-base'} line-clamp-2 group-hover:text-primary-500 transition-colors`}>
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Artisan Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src={product.artisan.avatar} 
            alt={product.artisan.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <p className="text-sm font-medium text-gray-900 truncate">
                {product.artisan.name}
              </p>
              {product.artisan.verified && (
                <Award className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="w-3 h-3 mr-1" />
              {product.artisan.location}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-primary-500">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Truck className="w-4 h-4" />
            <span>{product.delivery}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4" />
            <span>Safe shipping</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${
            product.inStock > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {product.inStock > 0 ? `${product.inStock} in stock` : 'Out of stock'}
          </span>
          <span className="text-sm text-gray-500">
            {product.wishlistCount} wishlisted
          </span>
        </div>
      </div>
    </motion.div>
  );

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
            <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="20000"
            step="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="grid grid-cols-3 gap-2 text-xs">
            {['Under ₹1K', '₹1K-₹5K', '₹5K-₹10K', 'Above ₹10K'].map((range, index) => (
              <button
                key={index}
                className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-sm text-gray-500">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
        <div className="space-y-3">
          {[
            { label: 'Free Shipping', count: 345 },
            { label: 'Verified Artisan', count: 567 },
            { label: 'Bestseller', count: 123 },
            { label: 'Featured', count: 89 },
            { label: 'On Sale', count: 234 },
            { label: 'Eco-friendly', count: 156 }
          ].map((filter, index) => (
            <label key={index} className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="flex-1 text-gray-700">{filter.label}</span>
              <span className="text-sm text-gray-500">({filter.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors">
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Global Artisan Marketplace
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover authentic handcrafted products from talented artisans worldwide. 
              Every purchase supports traditional crafts and communities.
            </p>
          </div>

          {/* Search & Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, artisans, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="bestseller">Best Selling</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-primary-500 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-primary-500 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex items-center space-x-4 mt-6">
            <span className="text-sm text-gray-600">Active filters:</span>
            <div className="flex items-center space-x-2">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 hover:text-primary-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 hover:text-blue-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24">
              <FilterSidebar />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {sortedProducts.length} Products Found
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" />
                <span>Updated hourly</span>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setPriceRange([0, 10000]);
                  }}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Show All Products
                </button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' 
                  : 'space-y-6'
              }>
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isGrid={viewMode === 'grid'} 
                  />
                ))}
              </div>
            )}

            {/* Load More */}
            {sortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss New Arrivals
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Subscribe to get notified about new products, exclusive offers, and artisan stories.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-white focus:border-transparent outline-none"
              />
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
