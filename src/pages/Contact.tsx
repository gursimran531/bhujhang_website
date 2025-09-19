import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        branch: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const branches = [
    {
      name: "Nawanshahr, Punjab",
      country: "India",
      address: "Gurdwara manji sahib patshahi 9ve, Banga Road, Nawanshahr, Punjab",
      phone: "+91 8289044042, +91 9855125651",
      email: "Bhujhangjathanawanshahr@gmail.com",
      hours: "Daily 6:00 AM - 8:00 PM",
      color: "orange"
    },
    {
      name: "Brampton, Ontario", 
      country: "Canada",
      address: "Upper highlands dr, Brampton",
      phone: "+1 (647) 300-5078",
      email: "Jassj7166@gmail.com",
      hours: "Mon-Fri 6:00 PM - 9:00 PM, Weekends 9:00 AM - 5:00 PM",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen py-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ready to start your journey with Bhujhang Jatha? Get in touch with us to learn more 
            about our services, schedule training, or book our cultural programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input-dark"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input-dark"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input-dark"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-300 mb-1">
                      Preferred Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="form-select-dark"
                    >
                      <option value="">Select a branch</option>
                      <option value="nawanshahr">Nawanshahr, India</option>
                      <option value="brampton">Brampton, Canada</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select-dark"
                  >
                    <option value="">Select a service</option>
                    <option value="gatka">Gatka Training</option>
                    <option value="nagar-kirtan">Nagar Kirtan Coordination</option>
                    <option value="gurmat-samagam">Gurmat Samagam</option>
                    <option value="dharmik">Dharmik Songs & Films</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea-dark"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                We're here to help you connect with Sikh martial arts traditions. Whether you're 
                interested in learning Gatka, organizing cultural events, or seeking spiritual guidance, 
                we're ready to serve you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">General Inquiries</p>
                    <p className="text-gray-600">info@bhujhangjatha.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Emergency Contact</p>
                    <p className="text-gray-600">Available 24/7 for urgent matters</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Contacts */}
            {branches.map((branch, index) => (
              <div key={index} className={`bg-gradient-to-br from-${branch.color}-50 to-${branch.color}-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {branch.name}, {branch.country}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className={`w-4 h-4 text-${branch.color}-600 mt-1`} />
                    <p className="text-gray-700 text-sm">{branch.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className={`w-4 h-4 text-${branch.color}-600`} />
                    <p className="text-gray-700 text-sm">{branch.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className={`w-4 h-4 text-${branch.color}-600`} />
                    <p className="text-gray-700 text-sm">{branch.email}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className={`w-4 h-4 text-${branch.color}-600 mt-1`} />
                    <p className="text-gray-700 text-sm">{branch.hours}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Response Times</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Email inquiries: Within 24 hours</p>
                <p>• Service bookings: Within 2-3 business days</p>
                <p>• Emergency cultural events: Immediate assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;