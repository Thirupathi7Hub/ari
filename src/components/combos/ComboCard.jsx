import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiStar, FiClock, FiUsers, FiMapPin, FiHeart } from 'react-icons/fi';
import { useApp } from '../../context/AppContext';

const ComboCard = ({ combo, index }) => {
  const { openBookingModal } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`relative rounded-3xl overflow-hidden luxury-card group ${
        combo.popular ? 'ring-2 ring-amber-500 transform scale-105' : ''
      }`}
    >
      {/* Popular Badge */}
      {combo.popular && (
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
            <FiStar className="fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Package Image */}
      <div className="aspect-video overflow-hidden relative">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Category Icon */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">{combo.icon}</span>
          </div>
        </div>
      </div>

      {/* Package Content */}
      <div className="p-8">
        {/* Category & Price */}
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            {combo.category}
          </span>
          <div className="text-right">
            <div className="text-2xl font-bold font-cinzel gold-gradient">
              ${combo.price.toLocaleString()}
            </div>
            {combo.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ${combo.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        {/* Package Name */}
        <h3 className="font-cinzel text-2xl font-bold text-gray-800 mb-3">
          {combo.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {combo.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {combo.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiCheck className="text-amber-600 text-sm" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-1">
            <FiClock className="text-amber-500" />
            <span>{combo.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiUsers className="text-amber-500" />
            <span>{combo.guests}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiMapPin className="text-amber-500" />
            <span>Venue</span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openBookingModal(combo)}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            combo.popular
              ? 'luxury-button text-white shadow-lg hover:shadow-xl'
              : 'luxury-border text-amber-700 hover:bg-amber-50'
          }`}
        >
          {combo.popular ? (
            <>
              <FiHeart className="text-lg" />
              Book This Package
            </>
          ) : (
            'Get Custom Quote'
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ComboCard;