import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../data/mockData';

const LuxuryStats = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-amber-900 to-amber-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Why Choose Élégant Events?
          </h2>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            With over 15 years of excellence, we've built a reputation for creating 
            unforgettable events that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="w-20 h-20 luxury-border rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-all duration-300 text-2xl">
                {stat.icon}
              </div>
              <motion.div 
                className="text-4xl lg:text-5xl font-bold font-cinzel mb-2 gold-gradient"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                {stat.number}
                {stat.suffix}
              </motion.div>
              <div className="text-amber-200 font-semibold uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-amber-700"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-amber-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>Rated 5.0 on Google</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>Industry Award Winner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💎</span>
              <span>Luxury Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryStats;