import React, { useState } from 'react';
import { Play, X, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'gatka', label: 'Gatka Training' },
    { id: 'events', label: 'Bhujhangi Team' },
    { id: 'kirtan', label: 'Nagar Kirtan' },
    { id: 'jathedar', label: 'Jathedar' }
  ];

  // Using Pexels stock photos for demonstration
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'events',
      src: '/8.jpg',
      title: 'Traditional Gatka Training',
      description: 'Master demonstrating traditional Gatka sword techniques',
      location: 'Nawanshahr, India',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      category: 'events',
      src: '/2.jpg',
      title: 'Cultural Celebration',
      description: 'Traditional Sikh ceremony with community participation',
      location: 'Nawanshahr, India',
      date: '2024-04-13'
    },
    {
      id: 3,
      type: 'image',
      category: 'gatka',
      src: '/3.jpg',
      title: 'Gatka Team',
      description: 'Bhujhan Jatha Gatka Team',
      location: 'Nawanshahr, India',
      date: '2024-03-20'
    },
    {
      id: 4,
      type: 'image',
      category: 'kirtan',
      src: '/4.jpg',
      title: 'Nagar Kirtan Procession',
      description: 'Traditional martial arts training session',
      location: 'Nawanshahr, India',
      date: '2024-06-10'
    },
    {
      id: 5,
      type: 'image',
      category: 'jathedar',
      src: '/1.jpg',
      title: 'Jathedar',
      description: 'Jathedar Jaspreet Singh and Jathedar Gursimarpreet Singh',
      location: 'Nawanshahr, India',
      date: '2024-01-15'
    },
    {
      id: 6,
      type: 'image',
      category: 'jathedar',
      src: '/5.jpg',
      title: 'Jathedar',
      description: 'Jathedar Jaspreet Singh and Jathedar Gursimarpreet Singh',
      location: 'Nawanshahr, India',
      date: '2024-01-15'
    },
    {
      id: 7,
      type: 'image',
      category: 'events',
      src: '/6.jpg',
      title: 'Bhujhangi Fauj',
      description: 'Bhujhang Jatha Team',
      location: 'Nawanshahr, India',
      date: '2024-01-15'
    },
   {
      id: 8,
      type: 'image',
      category: 'events',
      src: '/7.jpg',
      title: 'Bhujhangi Faujj',
      description: 'Bhujhang Jatha Nawanshar Team',
      location: 'Nawanshahr, India',
      date: '2024-01-15'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Gallery</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore our collection of photos and videos showcasing Gatka training, 
            cultural events, and community celebrations from both our branches.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${
                selectedCategory === category.id
                  ? 'category-btn-active'
                  : 'category-btn-inactive'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-200 aspect-square shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white transform group-hover:scale-125 transition-transform duration-300" />
                  </div>
                )}
                <div className="gallery-overlay">
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-400 space-x-4">
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

        {/* Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
              <div className="relative">
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-200 transform hover:scale-110"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
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
        <div className="mt-16 text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">Want to Be Part of Our Story?</h3>
          <p className="text-orange-100 mb-6">
            Join our community events and training sessions. Follow us to see more updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
            >
              Get Involved
            </a>
            <a
              href="/services"
              className="btn-secondary"
            >
              Our Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;