import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiCalendar, FiUser, FiMail, FiPhone, FiUsers, FiHeart } from 'react-icons/fi';
import { useApp } from '../../context/AppContext';

const BookingModal = () => {
  const { isBookingModalOpen, closeBookingModal, selectedCombo, submitBooking, isLoading } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: selectedCombo?.category || '',
    date: '',
    guests: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await submitBooking(formData);
      setSubmitMessage(result.message);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        closeBookingModal();
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: selectedCombo?.category || '',
          date: '',
          guests: '',
          budget: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      setSubmitMessage('There was an error submitting your request. Please try again.');
    }
  };

  const eventTypes = [
    { value: 'wedding', label: '💒 Wedding', icon: '💒' },
    { value: 'corporate', label: '💼 Corporate Event', icon: '💼' },
    { value: 'birthday', label: '🎂 Birthday Party', icon: '🎂' },
    { value: 'anniversary', label: '💝 Anniversary', icon: '💝' },
    { value: 'graduation', label: '🎓 Graduation', icon: '🎓' },
    { value: 'baby-shower', label: '👶 Baby Shower', icon: '👶' },
    { value: 'other', label: '✨ Other Celebration', icon: '✨' }
  ];

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeBookingModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto luxury-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-amber-100">
              <button
                onClick={closeBookingModal}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-300"
              >
                <FiX className="text-xl" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiHeart className="text-amber-600 text-2xl" />
                </div>
                <h2 className="font-cinzel text-2xl font-bold text-gray-800">
                  {isSubmitted ? 'Thank You!' : 'Start Your Journey'}
                </h2>
                {selectedCombo && (
                  <p className="text-center text-amber-600 font-semibold mt-2">
                    {selectedCombo.name}
                  </p>
                )}
              </div>
            </div>

            {/* Success State */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-gray-800 mb-4">
                    Request Received!
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {submitMessage}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    We'll contact you within 24 hours to discuss your event in detail.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeBookingModal}
                    className="luxury-button px-8 py-3 rounded-full text-white font-semibold"
                  >
                    Wonderful!
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Booking Form */}
            {!isSubmitted && (
              <div className="p-6">
                {selectedCombo && (
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      📦 Selected Package
                    </h4>
                    <p className="text-amber-700 font-medium">{selectedCombo.name}</p>
                    <p className="text-amber-600 text-sm">${selectedCombo.price.toLocaleString()}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiUser className="inline mr-2 text-amber-600" />
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
                        <FiMail className="inline mr-2 text-amber-600" />
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiPhone className="inline mr-2 text-amber-600" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiCalendar className="inline mr-2 text-amber-600" />
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FiUsers className="inline mr-2 text-amber-600" />
                        Number of Guests
                      </label>
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        💰 Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-25000">$10,000 - $25,000</option>
                        <option value="25000-50000">$25,000 - $50,000</option>
                        <option value="50000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      🎯 Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select your event type</option>
                      {eventTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      📝 Tell Us About Your Vision
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your dream event, any specific themes, colors, special requirements, or questions you might have..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed text-white' 
                        : 'luxury-button text-white hover:shadow-xl'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      'Submit Booking Request'
                    )}
                  </motion.button>

                  <p className="text-center text-gray-500 text-sm">
                    ✨ We'll contact you within 24 hours to discuss your event details
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;