import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Globe, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Traditional Gatka",
      description: "Learn authentic Sikh martial arts with traditional techniques and weapons training."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Cultural Events",
      description: "Participate in Nagar Kirtan, Gurmat Samagam, and other cultural celebrations."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Global Presence",
      description: "Serving communities in both India (Nawanshahr) and Canada (Brampton)."
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Expert Training",
      description: "Learn from experienced masters dedicated to preserving Sikh traditions."
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="hero-background relative text-white py-20">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">Bhujhang Jatha</span>
              <br />
              Sikh Martial Arts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
              Preserving the warrior spirit of the Khalsa through traditional Gatka, cultural events, and spiritual guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-16 relative overflow-hidden"
      >
        {/* Saffron blur effects */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-l from-orange-500/15 to-yellow-500/15 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Bhujhang Jatha?
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              We are dedicated to preserving and promoting Sikh martial arts traditions while serving our global community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 relative">
        {/* Saffron blur effects */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-gradient-to-l from-orange-500/10 to-yellow-500/10 rounded-full blur-xl"></div>
        
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            {/* Simplified world map outline */}
            <g fill="currentColor" className="text-white" opacity="0.8">
              {/* North America (Canada) */}
              <path d="M150 80 L280 70 L320 90 L350 85 L380 95 L400 110 L420 120 L450 115 L480 125 L500 140 L520 135 L540 145 L560 150 L580 160 L600 155 L620 165 L640 170 L660 175 L680 180 L700 185 L720 190 L740 195 L760 200 L780 205 L800 210 L820 215 L840 220 L860 225 L880 230 L900 235 L920 240 L940 245 L960 250 L980 255 L1000 260 L1000 0 L0 0 L0 100 Z"/>
              
              {/* Asia (India region) */}
              <path d="M650 200 L680 195 L710 200 L740 205 L770 210 L800 215 L830 220 L860 225 L890 230 L920 235 L950 240 L980 245 L1000 250 L1000 300 L980 295 L950 290 L920 285 L890 280 L860 275 L830 270 L800 265 L770 260 L740 255 L710 250 L680 245 L650 240 Z"/>
            </g>
            
            {/* Location markers */}
            <g>
              {/* Canada marker */}
              <circle cx="250" cy="120" r="12" fill="#3B82F6" className="animate-pulse"/>
              <text x="250" y="110" textAnchor="middle" className="text-xs fill-blue-400 font-semibold">Canada</text>
              
              {/* India marker */}
              <circle cx="750" cy="220" r="12" fill="#EA580C" className="animate-pulse"/>
              <text x="750" y="210" textAnchor="middle" className="text-xs fill-orange-400 font-semibold">India</text>
            </g>
            
            {/* Connection line */}
            <line x1="250" y1="120" x2="750" y2="220" stroke="url(#connectionGradient)" strokeWidth="4" strokeDasharray="10,5" className="animate-pulse" opacity="1"/>
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="100%" stopColor="#EA580C"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Global Presence
            </h2>
            <p className="text-lg text-white">
              Serving Sikh communities across two continents
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Canada Branch */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">CA</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Brampton, Ontario</h3>
                <p className="text-blue-600 font-semibold mb-4">Bhujhang Jatha Canada</p>
                <p className="text-gray-700 mb-6">
                  Bringing authentic Sikh martial arts tradition to the Canadian Sikh community with modern training facilities.
                </p>
                <Link
                  to="/branches"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* India Branch */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">IN</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nawanshahr, Punjab</h3>
                <p className="text-orange-600 font-semibold mb-4">ਭੁਜੰਗ ਜੱਥਾ</p>
                <p className="text-gray-700 mb-6">
                  Our founding location in the heart of Punjab, where traditional Gatka and Sikh martial arts have been practiced for generations.
                </p>
                <Link
                  to="/branches"
                  className="text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-orange-500">
        {/* Saffron blur effects */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-l from-orange-500/15 to-yellow-500/15 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white">
            Join our community and learn the ancient art of Sikh martial traditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 relative z-10"
            >
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 relative z-10"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;