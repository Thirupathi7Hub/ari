import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle, FiHeart } from 'react-icons/fi'; // Replaced FiQuote with FiMessageCircle
import { testimonials } from '../../data/mockData';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">
            Words of <span className="gold-gradient">Appreciation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our cherished clients have to say about their experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg luxury-border flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg luxury-border flex items-center justify-center text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
          >
            <FiChevronRight className="text-xl" />
          </button>

          {/* Testimonial Slider */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="luxury-card rounded-3xl p-8 md:p-12 text-center relative">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiMessageCircle className="text-amber-600 text-2xl" /> {/* Replaced FiQuote with FiMessageCircle */}
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-amber-500 fill-amber-500 text-lg" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left">
                      <h4 className="font-cinzel font-semibold text-gray-800 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-amber-600 font-medium flex items-center gap-1">
                        <FiHeart className="text-amber-500" />
                        {testimonials[currentIndex].event}
                      </p>
                      <p className="text-gray-500 text-sm">{testimonials[currentIndex].date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-amber-50 rounded-full px-6 py-3 border border-amber-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-amber-700 font-semibold">Trusted by 500+ Happy Clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;