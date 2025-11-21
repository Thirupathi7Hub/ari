import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiCalendar, 
  FiUsers, 
  FiDollarSign, 
  FiMessageCircle, 
  FiSend,
  FiCheck 
} from 'react-icons/fi';
import { useApp } from '../../context/AppContext';

const BookingForm = ({ selectedCombo = null, standalone = false }) => {
  const { submitBooking, isLoading } = useApp();
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitBooking(formData);
      setIsSubmitted(true);
      
      // Reset form after success in standalone mode
      if (standalone) {
        setTimeout(() => {
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
      }
    } catch (error) {
      console.error('Booking submission error:', error);
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

  if (isSubmitted && standalone) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheck className="text-green-600 text-3xl" />
        </div>
        <h3 className="font-cinzel text-2xl font-bold text-gray-800 mb-4">
          Request Received!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in Élégant Events. We've received your booking request 
          and will contact you within 24 hours to discuss your event in detail.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="luxury-button px-8 py-3 rounded-full text-white font-semibold"
        >
          Submit Another Request
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full ${standalone ? 'max-w-4xl mx-auto' : ''}`}
    >
      {selectedCombo && (
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
          <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
            📦 Selected Package
          </h4>
          <p className="text-amber-700 font-medium">{selectedCombo.name}</p>
          <p className="text-amber-600 text-sm">${selectedCombo.price.toLocaleString()}</p>
        </div>
      )}

      {standalone && (
        <div className="text-center mb-8">
          <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-4">
            Book Your Dream Event
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll get back to you within 24 hours to start planning your perfect event.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">
              <FiUser className="inline mr-2 text-amber-600" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-luxury"
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              <FiMail className="inline mr-2 text-amber-600" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-luxury"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">
              <FiPhone className="inline mr-2 text-amber-600" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-luxury"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              <FiCalendar className="inline mr-2 text-amber-600" />
              Event Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="input-luxury"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="form-label">
              <FiUsers className="inline mr-2 text-amber-600" />
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="input-luxury"
              placeholder="50"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              <FiDollarSign className="inline mr-2 text-amber-600" />
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="input-luxury"
            >
              <option value="">Select budget range</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="25000-50000">$25,000 - $50,000</option>
              <option value="50000+">$50,000+</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            🎯 Event Type *
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="input-luxury"
          >
            <option value="">Select your event type</option>
            {eventTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            <FiMessageCircle className="inline mr-2 text-amber-600" />
            Tell Us About Your Vision *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="input-luxury resize-none"
            placeholder="Describe your dream event, any specific themes, colors, special requirements, or questions you might have..."
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed text-white' 
              : 'luxury-button text-white hover:shadow-xl'
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <FiSend />
              {standalone ? 'Submit Booking Request' : 'Request Booking'}
            </>
          )}
        </motion.button>

        <div className="text-center space-y-2">
          <p className="text-gray-500 text-sm">
            ✨ We'll contact you within 24 hours to discuss your event details
          </p>
          <p className="text-gray-400 text-xs">
            🔒 Your information is secure and will never be shared with third parties
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm;