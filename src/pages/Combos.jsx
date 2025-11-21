import React from 'react';
import { motion } from 'framer-motion';
import { FiCrown, FiZap, FiCheck, FiArrowRight } from 'react-icons/fi';
import ComboPackages from '../components/combos/ComboPackages';
import { useApp } from '../context/AppContext';

const Combos = () => {
  const { openBookingModal } = useApp();

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-6">Luxury Packages</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our curated selection of premium event packages. 
            Each package is designed to deliver exceptional experiences tailored to your needs.
          </p>
        </motion.div>

        {/* Benefits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="luxury-card rounded-3xl p-8 mb-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '💎', title: 'Premium Quality', desc: 'Luxury materials' },
              { icon: '⭐', title: '5-Star Service', desc: 'Dedicated support' },
              { icon: '🎨', title: 'Custom Design', desc: 'Tailored to you' },
              { icon: '🚀', title: 'Easy Process', desc: 'Stress-free planning' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <div className="font-semibold text-gray-800 mb-1">{benefit.title}</div>
                <div className="text-gray-600 text-sm">{benefit.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Packages Section */}
        <ComboPackages />

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="luxury-card rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheck className="text-green-600 text-2xl" />
            </div>
            <h2 className="font-cinzel text-3xl font-bold text-gray-800 mb-4">
              Our Quality Guarantee
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We stand behind our work with a 100% satisfaction guarantee. 
              If you're not completely happy with our service, we'll make it right.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: '🔒', text: 'Secure Booking' },
                { icon: '💬', text: '24/7 Support' },
                { icon: '✓', text: 'Quality Assured' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Combos;