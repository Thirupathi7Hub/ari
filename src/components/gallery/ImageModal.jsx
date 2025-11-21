import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiHeart, 
  FiShare2, 
  FiDownload, 
  FiArrowLeft, 
  FiArrowRight
} from 'react-icons/fi';

const ImageModal = ({ 
  image, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
        case 'ArrowLeft':
          if (hasPrev) onPrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, hasNext, hasPrev, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  const handleDownload = () => {
    // Simulate download functionality
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `elegant-events-${image.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Élégant Events - ${image.title}`,
          text: image.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-amber-600 transition-all duration-300 z-10 shadow-lg hover:scale-110 focus-luxury"
            >
              <FiX className="text-xl" />
            </motion.button>

            {/* Navigation Arrows */}
            {hasPrev && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={onPrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:text-amber-600 transition-all duration-300 z-10 shadow-lg hover:scale-110 focus-luxury"
              >
                <FiArrowLeft className="text-xl" />
              </motion.button>
            )}
            
            {hasNext && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={onNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:text-amber-600 transition-all duration-300 z-10 shadow-lg hover:scale-110 focus-luxury"
              >
                <FiArrowRight className="text-xl" />
              </motion.button>
            )}

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-white">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-amber-500 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {image.category}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <FiHeart className="text-lg" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleShare(); }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <FiShare2 className="text-lg" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDownload(); }}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <FiDownload className="text-lg" />
                    </button>
                  </div>
                </div>
                <h3 className="font-cinzel text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-amber-100 text-sm">{image.description}</p>
              </div>
            </div>

            {/* Keyboard Shortcuts Hint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-4 text-white/60 text-sm"
            >
              Use ← → arrow keys to navigate • Esc to close
            </motion.div>

            {/* Image Counter */}
            {(hasNext || hasPrev) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm"
              >
                {hasPrev ? 'Previous' : ''} {hasNext ? 'Next' : ''} Available
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;