import React, { useState } from 'react';
import { Play, X, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'gatka', label: 'Gatka Training' },
    { id: 'events', label: 'Cultural Events' },
    { id: 'kirtan', label: 'Nagar Kirtan' },
    { id: 'ceremonies', label: 'Ceremonies' }
  ];

  // Using Pexels stock photos for demonstration
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'gatka',
      src: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Gatka Training',
      description: 'Students practicing traditional sword techniques',
      location: 'Nawanshahr, India',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      category: 'events',
      src: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cultural Celebration',
      description: 'Community gathering during Vaisakhi celebration',
      location: 'Brampton, Canada',
      date: '2024-04-13'
    },
    {
      id: 3,
      type: 'image',
      category: 'kirtan',
      src: 'https://images.pexels.com/photos/6394567/pexels-photo-6394567.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nagar Kirtan Procession',
      description: 'Annual Nagar Kirtan bringing community together',
      location: 'Nawanshahr, India',
      date: '2024-03-20'
    },
    {
      id: 4,
      type: 'image',
      category: 'gatka',
      src: 'https://images.pexels.com/photos/7034274/pexels-photo-7034274.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Youth Gatka Class',
      description: 'Young students learning martial arts discipline',
      location: 'Brampton, Canada',
      date: '2024-02-10'
    },
    {
      id: 5,
      type: 'image',
      category: 'ceremonies',
      src: 'https://images.pexels.com/photos/8553873/pexels-photo-8553873.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Spiritual Ceremony',
      description: 'Religious ceremony with traditional customs',
      location: 'Nawanshahr, India',
      date: '2024-01-26'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      src: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Workshop',
      description: 'Educational workshop on Sikh history and culture',
      location: 'Brampton, Canada',
      date: '2024-03-05'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 text-white relative">
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl -mx-8 -my-8"></div>
          <div className="relative py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore our collection of photos and videos showcasing Gatka training, 
            cultural events, and community celebrations from both our branches.
          </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm rounded-3xl -mx-8 -my-4"></div>
          <div className="relative py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-yellow-500 text-gray-900'
                  : 'bg-gray-700 text-white hover:bg-yellow-500 hover:text-gray-900'
              }`}
            >
              {category.label}
            </button>
          ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl -mx-4 -my-8"></div>
          <div className="relative py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-200">
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
              <div className="relative">
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedMedia.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedMedia.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(selectedMedia.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center relative text-white p-8 rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-700/30 backdrop-blur-sm rounded-3xl"></div>
          <div className="relative">
          <h3 className="text-2xl font-bold mb-4">Want to Be Part of Our Story?</h3>
          <p className="text-orange-100 mb-6">
            Join our community events and training sessions. Follow us to see more updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Involved
            </a>
            <a
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Our Programs
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;