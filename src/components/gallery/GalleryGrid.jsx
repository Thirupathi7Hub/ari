import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiHeart, FiShare2, FiZoomIn } from 'react-icons/fi';
import { galleryImages } from '../../data/mockData';

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', 'wedding', 'corporate', 'birthday', 'anniversary'];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-8">
      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === category
                ? 'luxury-button text-white shadow-lg'
                : 'luxury-border text-amber-700 hover:bg-amber-50'
            }`}
          >
            {category === 'all' ? (
              <>
                <FiFilter className="text-sm" />
                All Events
              </>
            ) : (
              <>
                {category === 'wedding' && '💒'}
                {category === 'corporate' && '💼'}
                {category === 'birthday' && '🎂'}
                {category === 'anniversary' && '💝'}
                {category + 's'}
              </>
            )}
          </button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl luxury-card cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-amber-500 rounded-full text-xs font-semibold mb-2 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="font-cinzel text-lg font-semibold">{image.title}</h3>
                </div>
                
                {/* Action Icons */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <FiZoomIn className="text-white text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <FiHeart className="text-white text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <FiShare2 className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">📷</div>
          <h3 className="text-2xl font-cinzel text-gray-600 mb-2">No images found</h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryGrid;