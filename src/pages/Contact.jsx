import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend, FiClock, FiMessageCircle, FiCheck } from 'react-icons/fi';
import { useApp } from '../context/AppContext';

const Contact = () => {
  const { openBookingModal, submitContact, isLoading } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitContact(formData);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'hello@elegantevents.com',
      description: 'We reply within 24 hours',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FiMapPin,
      title: 'Office',
      content: '123 Luxury Avenue',
      description: 'Premium City, PC 10001',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      content: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM',
      color: 'from-amber-400 to-amber-600'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let's discuss your vision and 
            start planning your perfect event today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-4">
                Let's Start Your Journey
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We're here to answer any questions you may have about our services 
                and help you begin planning your unforgettable event. Reach out to us 
                through any of the following channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 luxury-card rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-semibold text-gray-800 mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-medium mb-1 text-base">{item.content}</p>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="luxury-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiMessageCircle className="text-amber-600 text-xl" />
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-gray-800 mb-2">
                  Quick Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Prefer to speak directly? Book a complimentary 15-minute consultation call.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openBookingModal}
                  className="luxury-button px-6 py-3 rounded-full text-white font-semibold text-sm"
                >
                  Book a Call
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="luxury-card rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="text-green-600 text-3xl" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-gray-800 mb-4">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="luxury-button px-8 py-3 rounded-full text-white font-semibold"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiSend className="text-amber-600 text-2xl" />
                  </div>
                  <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="package-information">Package Information</option>
                        <option value="custom-event">Custom Event Planning</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your event vision, requirements, questions, or how we can help you create something extraordinary..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed text-white' 
                        : 'luxury-button text-white hover:shadow-xl'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-gray-500 text-sm">
                    🔒 We respect your privacy and will never share your information
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;