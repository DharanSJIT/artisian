import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Heart, 
  Share2, 
  Eye, 
  Clock, 
  User,
  Filter,
  Search,
  Grid3X3,
  List,
  TrendingUp,
  Calendar,
  Award,
  MessageCircle
} from 'lucide-react';

const ExplorePage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Videos', count: 156 },
    { id: 'tutorials', name: 'Tutorials', count: 45 },
    { id: 'process', name: 'Craft Process', count: 67 },
    { id: 'stories', name: 'Artisan Stories', count: 34 },
    { id: 'techniques', name: 'Techniques', count: 28 },
    { id: 'workshops', name: 'Workshop Highlights', count: 22 }
  ];

  const videos = [
    {
      id: 1,
      title: 'Traditional Pottery Making Process',
      description: 'Watch master potter Maya create a beautiful ceramic vase using traditional techniques passed down through generations.',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      duration: '5:32',
      views: 12500,
      likes: 892,
      category: 'process',
      artisan: {
        name: 'Maya Patel',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      uploadDate: '2024-01-15',
      tags: ['pottery', 'ceramics', 'traditional', 'handmade'],
      featured: true
    },
    {
      id: 2,
      title: 'Silk Weaving Masterclass',
      description: 'Learn the intricate art of silk weaving with Rajesh Kumar, a third-generation weaver from Varanasi.',
      thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop',
      duration: '8:45',
      views: 8900,
      likes: 654,
      category: 'tutorials',
      artisan: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      uploadDate: '2024-01-10',
      tags: ['weaving', 'silk', 'textiles', 'traditional'],
      trending: true
    },
    {
      id: 3,
      title: 'From Village to Global Market',
      description: 'Inspiring story of Anita who transformed her small handicraft business into an international success.',
      thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      duration: '3:28',
      views: 15600,
      likes: 1234,
      category: 'stories',
      artisan: {
        name: 'Anita Sharma',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      uploadDate: '2024-01-08',
      tags: ['success-story', 'business', 'inspiration', 'global'],
      featured: true
    },
    {
      id: 4,
      title: 'Wood Carving Techniques',
      description: 'Master the art of intricate wood carving with expert tips and traditional techniques.',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      duration: '6:15',
      views: 7800,
      likes: 543,
      category: 'techniques',
      artisan: {
        name: 'Vikram Singh',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      uploadDate: '2024-01-05',
      tags: ['wood-carving', 'sculpture', 'techniques', 'handcraft']
    },
    {
      id: 5,
      title: 'Digital Marketing Workshop Highlights',
      description: 'Key takeaways from our recent digital marketing workshop for artisans.',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop',
      duration: '4:52',
      views: 5600,
      likes: 412,
      category: 'workshops',
      artisan: {
        name: 'Workshop Team',
        avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=50&h=50&fit=crop&crop=face',
        verified: false
      },
      uploadDate: '2024-01-03',
      tags: ['digital-marketing', 'workshop', 'business', 'online-sales']
    },
    {
      id: 6,
      title: 'Jewelry Making: Filigree Technique',
      description: 'Discover the delicate art of filigree jewelry making with master craftsman.',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
      duration: '7:23',
      views: 9200,
      likes: 721,
      category: 'tutorials',
      artisan: {
        name: 'Priya Mehta',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face',
        verified: true
      },
      uploadDate: '2024-01-01',
      tags: ['jewelry', 'filigree', 'metalwork', 'traditional'],
      trending: true
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const VideoCard = ({ video, isGrid = true }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer ${
        isGrid ? '' : 'flex gap-4'
      }`}
    >
      <div className={`relative ${isGrid ? 'h-48' : 'w-64 h-36 flex-shrink-0'} overflow-hidden`}>
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
          {video.duration}
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {video.featured && (
                          <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
            )}
            {video.trending && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Trending
              </span>
            )}
          </div>
        </div>
        
        <div className={`p-6 ${isGrid ? '' : 'flex-1'}`}>
          <div className="flex items-start justify-between mb-3">
            <h3 className={`font-semibold text-gray-900 ${isGrid ? 'text-lg' : 'text-base'} line-clamp-2 group-hover:text-primary-500 transition-colors`}>
              {video.title}
            </h3>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          
          <p className={`text-gray-600 mb-4 ${isGrid ? 'text-sm' : 'text-xs'} line-clamp-2`}>
            {video.description}
          </p>
          
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src={video.artisan.avatar} 
              alt={video.artisan.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {video.artisan.name}
                </p>
                {video.artisan.verified && (
                  <Award className="w-4 h-4 text-blue-500" />
                )}
              </div>
              <p className="text-xs text-gray-500">
                {formatDate(video.uploadDate)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{formatViews(video.views)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{video.likes}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="hover:text-primary-500 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="hover:text-primary-500 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {video.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Artisan Content
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing craft processes, learn new techniques, and get inspired 
              by success stories from artisans around the world.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos, techniques, artisans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
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
              
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="font-medium">{category.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white bg-opacity-20'
                    : 'bg-white'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      {selectedCategory === 'all' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Award className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Content</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {videos.filter(video => video.featured).slice(0, 2).map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
                >
                  <div className="aspect-video relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                        <span className="bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{video.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={video.artisan.avatar} 
                            alt={video.artisan.name}
                            className="w-10 h-10 rounded-full border-2 border-white"
                          />
                          <div>
                            <p className="text-white font-medium">{video.artisan.name}</p>
                            <p className="text-gray-300 text-sm">{formatDate(video.uploadDate)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-white text-sm">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{formatViews(video.views)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{video.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Videos' : categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredVideos.length} videos found
            </p>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No videos found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Show All Videos
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-6'
            }>
              {filteredVideos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  isGrid={viewMode === 'grid'} 
                />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredVideos.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                Load More Videos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Share Your Craft with the World
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Upload your craft videos and inspire thousands of artisans worldwide. 
              Build your audience and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Upload Video
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
