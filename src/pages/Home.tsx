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
      <section className="relative text-white py-20">
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
      <section className="py-16 relative">
        {/* Saffron blur effects */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-yellow-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-l from-orange-500/10 to-yellow-500/10 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join our community and learn the ancient art of Sikh martial traditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
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