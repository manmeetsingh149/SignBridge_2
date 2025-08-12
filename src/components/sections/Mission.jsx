import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At SignBridge, we believe that every student deserves equal access to quality education. Our platform combines cutting-edge technology with deep understanding of accessibility needs to create a truly inclusive learning experience.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're committed to empowering deaf and hard-of-hearing students by providing real-time sign language translation through our web platform and Chrome extension, making both lectures and learning materials accessible.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Accessibility First</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Technology-Driven</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">User-Centered</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-96 h-96">
                  <DotLottieReact
                    src="/vision-animation.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission; 