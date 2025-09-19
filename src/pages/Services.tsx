import React from 'react';
import { Users, Music, GraduationCap, Calendar, MapPin, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Nagar Kirtan Coordination",
      description: "Professional organization and coordination of Nagar Kirtan processions for community celebrations.",
      features: ["Route planning", "Permit coordination", "Safety management", "Community outreach"],
      availability: "Both Branches"
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-600" />,
      title: "Gurmat Samagam",
      description: "Complete organization of religious gatherings and spiritual events with traditional ceremonies.",
      features: ["Event planning", "Religious coordination", "Venue management", "Cultural programming"],
      availability: "Both Branches"
    },
    {
      icon: <Music className="w-8 h-8 text-orange-600" />,
      title: "Dharmik Songs & Films",
      description: "Production and performance of religious music and spiritual films that inspire and educate.",
      features: ["Live performances", "Recording services", "Film production", "Cultural content"],
      availability: "Both Branches"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
      title: "Gatka Teacher Services",
      description: "Experienced instructors available for teaching traditional Sikh martial arts at various venues.",
      features: ["Individual instruction", "Group classes", "Workshop facilitation", "Competition preparation"],
      availability: "Both Branches"
    }
  ];

  return (
    <div className="min-h-screen py-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We offer comprehensive services to support and celebrate Sikh culture, 
            tradition, and spiritual growth in communities across India and Canada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {service.availability}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">What's Included:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Branch-Specific Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="branch-card from-orange-50 to-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-6 h-6 text-orange-600 mr-2" />
              Nawanshahr, India
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our founding location offers traditional services deeply rooted in Punjab's 
                cultural heritage. We specialize in authentic Gatka training and traditional 
                religious ceremonies.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Specialty Services:</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Traditional Gatka competitions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Historical weapon demonstrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Punjabi cultural programs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="branch-card from-blue-50 to-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              Brampton, Canada
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our Canadian branch serves the North American Sikh community with modern 
                facilities while maintaining traditional values and practices.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Specialty Services:</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Youth engagement programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Multi-cultural events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">English-Punjabi bilingual services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Our Services?</h3>
          <p className="text-orange-100 mb-6">
            Contact us to discuss your requirements and learn how we can serve your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
            >
              Request Quote
            </a>
            <a
              href="tel:+16473005078"
              className="btn-secondary flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;