import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiUsers, FiTarget, FiStar, FiCheck } from 'react-icons/fi';
import { services, teamMembers } from '../data/mockData';

const About = () => {
  const values = [
    {
      icon: FiHeart,
      title: 'Passion',
      description: 'We pour our heart into every event, ensuring each detail reflects our love for creating beautiful memories.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect, from planning to execution, delivering unparalleled quality.'
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients, understanding their vision and bringing it to life together.'
    },
    {
      icon: FiTarget,
      title: 'Innovation',
      description: 'We continuously evolve with trends and technologies to create unique and memorable experiences.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="heading-primary mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, Élégant Events has been transforming visions into reality, 
            creating moments that last a lifetime through exceptional event planning and execution.
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="font-cinzel text-4xl font-bold text-gray-800 mb-6">
              Crafting Unforgettable Experiences Since 2008
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to redefine luxury event planning, Élégant Events has grown 
                from a passionate startup to an industry leader in creating extraordinary celebrations.
              </p>
              <p>
                Our journey began with a simple belief: every event, no matter how big or small, 
                deserves the same level of attention, creativity, and excellence.
              </p>
              <p>
                Today, we're proud to have orchestrated over 500 events, each one unique and 
                special, building lasting relationships with clients who trust us with their most important occasions.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: '⭐', text: '5.0 Star Rating' },
                { icon: '🏆', text: '50+ Awards' },
                { icon: '💼', text: '200+ Partners' },
                { icon: '🌎', text: 'Global Reach' }
              ].map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <span className="text-gray-700 font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden luxury-card">
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl font-cinzel font-bold mb-4">15+</div>
                  <div className="text-xl">Years of Excellence</div>
                  <div className="text-lg opacity-90">in Event Planning</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="font-cinzel text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="gold-gradient">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 luxury-card rounded-2xl group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 luxury-border rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="font-cinzel text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="gold-gradient">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 luxury-card rounded-2xl group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 luxury-border rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-50 transition-colors duration-300">
                  <value.icon className="text-amber-600 text-2xl" />
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="font-cinzel text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our <span className="gold-gradient">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center luxury-card rounded-2xl p-6 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <div className="text-amber-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="luxury-card rounded-3xl p-12 text-center max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiStar className="text-amber-600 text-2xl" />
          </div>
          <h2 className="font-cinzel text-4xl font-bold text-gray-800 mb-6">
            Our Philosophy
          </h2>
          <blockquote className="text-2xl text-gray-600 italic leading-relaxed mb-6">
            "We believe that every event is a unique story waiting to be told. 
            Our mission is to listen, understand, and transform your vision into 
            a breathtaking reality that exceeds all expectations."
          </blockquote>
          <div className="text-amber-600 font-cinzel text-lg font-semibold">
            - The Élégant Events Team
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;