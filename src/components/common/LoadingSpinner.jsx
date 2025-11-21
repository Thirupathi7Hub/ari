import React from 'react';
import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'amber',
  text = null,
  overlay = false 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const colorClasses = {
    amber: 'text-amber-600',
    white: 'text-white',
    gray: 'text-gray-600'
  };

  const spinnerContent = (
    <div className={`flex flex-col items-center justify-center ${overlay ? 'p-8' : ''}`}>
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} flex items-center justify-center`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <FiLoader className="w-full h-full" />
      </motion.div>
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 font-semibold ${
            color === 'white' ? 'text-white' : 'text-gray-600'
          }`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (overlay) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl shadow-2xl luxury-card">
          {spinnerContent}
        </div>
      </motion.div>
    );
  }

  return spinnerContent;
};

// Page Loading Spinner Variant
export const PageLoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-white">
    <div className="text-center">
      <LoadingSpinner size="xl" color="amber" />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-amber-700 font-cinzel text-xl font-semibold"
      >
        Élégant Events
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-gray-600"
      >
        Loading your luxury experience...
      </motion.p>
    </div>
  </div>
);

// Content Loading Skeleton
export const ContentSkeleton = ({ type = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count }, (_, i) => i);

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletons.map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="luxury-card rounded-2xl p-6 space-y-4"
          >
            <div className="skeleton-loader aspect-video rounded-xl"></div>
            <div className="space-y-2">
              <div className="skeleton-loader skeleton-text w-3/4"></div>
              <div className="skeleton-loader skeleton-text w-1/2"></div>
              <div className="skeleton-loader skeleton-text w-5/6"></div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="skeleton-loader w-20 h-8 rounded-full"></div>
              <div className="skeleton-loader w-20 h-8 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="space-y-3">
        {skeletons.map((index) => (
          <div key={index} className="skeleton-loader skeleton-text"></div>
        ))}
      </div>
    );
  }

  return null;
};

export default LoadingSpinner;