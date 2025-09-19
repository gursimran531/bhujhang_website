import React from 'react';
import { Shield, Heart, BookOpen, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Tradition",
      description: "Preserving authentic Sikh martial arts as passed down through generations."
    },
    {
      icon: <Heart className="w-8 h-8 text-yellow-500" />,
      title: "Devotion",
      description: "Serving the Sikh community with dedication and spiritual commitment."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
      title: "Knowledge",
      description: "Sharing wisdom of Gatka, history, and Sikh cultural practices."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Community",
      description: "Building strong bonds within the global Sikh community."
    }
  ];

  return (
    <div className="min-h-screen py-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-400">Bhujhang Jatha</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated to preserving the warrior spirit of the Khalsa through traditional martial arts, 
            cultural events, and spiritual guidance across two continents.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-300">
              <p className="mb-4">
                Bhujhang Jatha was founded with a sacred mission: to preserve and promote the ancient 
                martial arts traditions of the Sikh community. Rooted in the warrior tradition of the 
                Khalsa, we carry forward the teachings that have been passed down through generations.
              </p>
              <p className="mb-4">
                Our journey began in Nawanshahr, Punjab, the heartland of Sikh culture and tradition. 
                From these humble beginnings, we have expanded our mission to serve the global Sikh 
                diaspora, establishing our presence in Brampton, Canada, to better serve our community 
                in North America.
              </p>
              <p>
                Through Gatka training, cultural events, and spiritual guidance, we aim to strengthen 
                the bond between Sikhs and their rich heritage, ensuring that future generations remain 
                connected to their roots.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Gatka?</h3>
            <p className="text-gray-900 mb-4">
              Gatka is a traditional Sikh martial art that originated in the Punjab region. It combines 
              physical training, weapon techniques, and spiritual discipline, embodying the warrior 
              spirit of the Khalsa.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-900">Traditional weapon training</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-900">Physical fitness and flexibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-900">Mental discipline and focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <span className="text-gray-900">Spiritual connection to Sikh values</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-200">
              To preserve, promote, and teach traditional Sikh martial arts while fostering a strong sense 
              of community, cultural identity, and spiritual growth among Sikhs worldwide. We are committed 
              to maintaining the authentic practices of Gatka while adapting to serve our global community.
            </p>
          </div>
          <div className="bg-yellow-600 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-900">
              To be the leading organization in preserving Sikh martial arts heritage, creating a global 
              network of practitioners who embody the warrior spirit of the Khalsa while contributing 
              positively to their communities and maintaining strong connections to their Sikh identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;