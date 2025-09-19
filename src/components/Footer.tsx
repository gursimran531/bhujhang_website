import React from 'react';
import { MapPin, Phone, Mail, Sword, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Bhujhang Jatha Logo" 
               className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
              <div>
               <h3 className="text-xl font-bold">Bhujhang Jatha</h3>
                <p className="text-sm text-gray-400">Sikh Martial Arts</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Preserving and promoting Sikh martial arts traditions through Gatka and cultural education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/branches" className="text-gray-300 hover:text-white transition-colors">Our Branches</a></li>
            </ul>
          </div>

          {/* Nawanshahr Branch */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Nawanshahr, India</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-1" />
                <p className="text-gray-300 text-sm">Gurdwara manji sahib patshahi 9ve, Banga Road, Nawanshahr, Punjab</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <p className="text-gray-300 text-sm">+91 8289044042, +91 9855125651</p>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-orange-400" />
                <a href="https://www.instagram.com/bhujhang_jatha_nawanshahr_/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm transition-colors">
                  @bhujhang_jatha_nawanshahr_
                </a>
              </div>
            </div>
          </div>

          {/* Brampton Branch */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Brampton, Canada</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-400 mt-1" />
                <p className="text-gray-300 text-sm">Brampton, Ontario, Canada</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <p className="text-gray-300 text-sm">+1 (647) 300-5078</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <p className="text-gray-300 text-sm">info@bhujhangjatha.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-orange-400" />
                <a href="https://www.instagram.com/bhujhang_jatha_brampton/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm transition-colors">
                  @bhujhang_jatha_brampton
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.youtube.com/@bhujhangjathanawanshahr4991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bhujhang Jatha. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Proudly serving the Sikh community worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;