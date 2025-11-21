import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiArrowRight, FiAward, FiZap } from 'react-icons/fi'; // Replaced FiCrown with FiAward
import { comboPackages } from '../../data/mockData';
import ComboCard from './ComboCard';
import { useApp } from '../../context/AppContext';

const ComboPackages = () => {
  const { openBookingModal } = useApp();

  return (
    <div className="pt-8">
      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {comboPackages.map((combo, index) => (
          <ComboCard key={combo.id} combo={combo} index={index} />
        ))}
      </div>

      {/* Custom Package CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mt-16"
      >
        <div className="luxury-card rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-32 translate-y-32"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FiAward className="text-white text-2xl" /> {/* Replaced FiCrown with FiAward */}
            </div>
            
            <h2 className="font-cinzel text-4xl font-bold text-gray-800 mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Every event is unique. Let us create a bespoke package tailored specifically 
              to your vision, requirements, and budget. Your dream event deserves a personalized touch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openBookingModal()}
                className="luxury-button px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 group"
              >
                <FiZap className="group-hover:scale-110 transition-transform duration-300" />
                Request Custom Quote
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="luxury-border px-6 py-4 rounded-full text-amber-700 font-semibold hover:bg-amber-50 transition-all duration-300 flex items-center gap-2"
              >
                <FiStar className="text-amber-500" />
                Schedule Consultation
              </motion.button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-amber-200">
              {[
                { icon: '🎨', text: 'Custom Design' },
                { icon: '💎', text: 'Premium Materials' },
                { icon: '⭐', text: 'Personal Service' }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-gray-700 font-medium">{feature.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComboPackages;