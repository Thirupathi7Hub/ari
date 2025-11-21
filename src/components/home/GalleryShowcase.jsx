import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiEye, FiHeart } from 'react-icons/fi';
import { galleryImages } from '../../data/mockData';

const GalleryShowcase = () => {
  const featuredImages = galleryImages.slice(0, 4);

  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">
            Our <span className="gold-gradient">Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the elegance and perfection we bring to every event. 
            Each celebration is a unique story waiting to be told.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl luxury-card cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-amber-500 rounded-full text-xs font-semibold mb-2 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="font-cinzel text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-amber-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {image.description}
                  </p>
                </div>
                
                {/* View Icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FiEye className="text-white text-lg" />
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <FiHeart className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luxury-border px-8 py-4 rounded-full text-amber-700 font-semibold flex items-center gap-3 mx-auto hover:bg-amber-50 transition-all duration-300 group"
            >
              View Complete Gallery
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryShowcase;