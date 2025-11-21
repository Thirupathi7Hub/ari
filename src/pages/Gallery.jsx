import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';
import GalleryGrid from '../components/gallery/GalleryGrid';
import ImageModal from '../components/gallery/ImageModal';
import { galleryImages } from '../data/mockData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid');

  const openImageModal = (image) => {
    const index = galleryImages.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="heading-primary mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through our most memorable events. Each image tells a story of elegance, precision, and unforgettable moments.
          </p>
        </motion.div>

        {/* View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-semibold flex items-center gap-2">
              <FiFilter className="text-amber-600" />
              Filter by:
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-semibold">View:</span>
            <div className="flex bg-amber-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-white text-amber-700 shadow-sm' 
                    : 'text-amber-600 hover:text-amber-700'
                }`}
              >
                <FiGrid className="text-lg" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-white text-amber-700 shadow-sm' 
                    : 'text-amber-600 hover:text-amber-700'
                }`}
              >
                <FiList className="text-lg" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Gallery Content */}
        <GalleryGrid onImageClick={openImageModal} />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-amber-200"
        >
          {[
            { number: galleryImages.length, label: 'Total Photos' },
            { number: new Set(galleryImages.map(img => img.category)).size, label: 'Event Categories' },
            { number: '500+', label: 'Events Captured' },
            { number: '2020-2024', label: 'Years of Work' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold gold-gradient mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeImageModal}
        onNext={nextImage}
        onPrev={prevImage}
        hasNext={currentImageIndex < galleryImages.length - 1}
        hasPrev={currentImageIndex > 0}
      />
    </div>
  );
};

export default Gallery;