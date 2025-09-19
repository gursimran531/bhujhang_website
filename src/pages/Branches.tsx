import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Award, Globe } from 'lucide-react';

const Branches = () => {
  const branchData = [
    {
      name: "Nawanshahr, Punjab",
      country: "India",
      flag: "🇮🇳",
      description: "Our founding location in the heart of Punjab, where traditional Gatka has been practiced for generations.",
      specialties: [
        "Traditional Gatka training",
        "Historical weapon demonstrations", 
        "Punjabi cultural programs",
        "Religious ceremony coordination"
      ],
      facilities: [
        "Traditional training ground",
        "Weapon storage and maintenance",
        "Cultural library",
        "Community meeting space"
      ],
      contact: {
        address: "Gurdwara manji sahib patshahi 9ve, Banga Road, Nawanshahr, Punjab",
        phone: "+91 8289044042, +91 9855125651",
        email: "nawanshahr@bhujhangjatha.com"
      },
      hours: "Daily 6:00 AM - 8:00 PM",
      established: "1995",
      students: "200+",
      bgColor: "from-orange-50 to-orange-100",
      accentColor: "orange-600"
    },
    {
      name: "Brampton, Ontario",
      country: "Canada",
      flag: "🇨🇦",
      description: "Serving the Canadian Sikh community with modern facilities while maintaining traditional values and practices.",
      specialties: [
        "Youth engagement programs",
        "Multi-cultural events",
        "English-Punjabi bilingual services",
        "Modern Gatka training methods"
      ],
      facilities: [
        "Modern training facility",
        "Multi-purpose event hall",
        "Audio-visual equipment",
        "Parking facilities"
      ],
      contact: {
        address: "Brampton, Ontario, Canada",
        phone: "+1 (647) 300-5078",
        email: "brampton@bhujhangjatha.com"
      },
      hours: "Mon-Fri 6:00 PM - 9:00 PM, Weekends 9:00 AM - 5:00 PM",
      established: "2010",
      students: "150+",
      bgColor: "from-blue-50 to-blue-100",
      accentColor: "blue-600"
    }
  ];

  return (
    <div className="min-h-screen py-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Branches</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Bhujhang Jatha operates across two continents, bringing authentic Sikh martial arts 
            tradition to communities in India and Canada.
          </p>
        </div>

        {/* Global Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">2</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-white">350+</div>
            <div className="text-gray-300">Active Students</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-gray-300">Events Organized</div>
          </div>
        </div>

        {/* Branch Details */}
        <div className="space-y-12">
          {branchData.map((branch, index) => (
            <div key={index} className={`bg-gradient-to-br ${branch.bgColor} p-8 rounded-lg`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{branch.flag}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{branch.name}</h2>
                      <p className={`text-${branch.accentColor} font-semibold`}>{branch.country}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6">{branch.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Specialties:</h4>
                      <ul className="space-y-2">
                        {branch.specialties.map((specialty, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${branch.accentColor} rounded-full`}></div>
                            <span className="text-gray-700">{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Facilities:</h4>
                      <ul className="space-y-2">
                        {branch.facilities.map((facility, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${branch.accentColor} rounded-full`}></div>
                            <span className="text-gray-700">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className={`w-5 h-5 text-${branch.accentColor} mt-1`} />
                      <div>
                        <p className="text-gray-900 font-medium">Address</p>
                        <p className="text-gray-600 text-sm">{branch.contact.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className={`w-5 h-5 text-${branch.accentColor}`} />
                      <div>
                        <p className="text-gray-900 font-medium">Phone</p>
                        <p className="text-gray-600 text-sm">{branch.contact.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className={`w-5 h-5 text-${branch.accentColor}`} />
                      <div>
                        <p className="text-gray-900 font-medium">Email</p>
                        <p className="text-gray-600 text-sm">{branch.contact.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className={`w-5 h-5 text-${branch.accentColor} mt-1`} />
                      <div>
                        <p className="text-gray-900 font-medium">Hours</p>
                        <p className="text-gray-600 text-sm">{branch.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className={`text-2xl font-bold text-${branch.accentColor}`}>{branch.established}</p>
                        <p className="text-gray-600 text-sm">Established</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-2xl font-bold text-${branch.accentColor}`}>{branch.students}</p>
                        <p className="text-gray-600 text-sm">Students</p>
                      </div>
                    </div>
                  </div>

                  <button className={`w-full mt-4 bg-${branch.accentColor} hover:bg-${branch.accentColor} text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200`}>
                    Contact This Branch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Visit Our Branches</h3>
          <p className="text-orange-100 mb-6">
            We welcome visitors to both our branches. Come experience authentic Sikh martial arts training 
            and be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule a Visit
            </a>
            <a
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn About Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;