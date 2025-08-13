import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { features } from '../../data/dummyData';

const Features = () => {
  return (
    <section id="features" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful components working together to make classrooms accessible for deaf students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card p-8 h-full relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                    {feature.comingSoon && (
                      <span className="ml-2 inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-primary-600 font-medium">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Ready to Transform Learning?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-center">
              Join thousands of students and educators who are already experiencing the power of accessible education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={() => window.location.href = '/login'}>
                Start Your Free Trial
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                  Why <span className="text-gradient">SignBridge</span> Works
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Our innovative approach removes the need for live sign interpreters while supporting both lectures and learning materials through simple, scalable technology.
                </p>
                <ul className="space-y-4">
                  {[
                    'Real-time sign language translation',
                    'Works directly in the browser',
                    'Scales easily in classrooms',
                    'No live interpreters needed',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mt-1 mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"></span>
                      <span className="text-base md:text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="absolute -inset-6 bg-gradient-to-tr from-primary-100 to-secondary-100 opacity-60 blur-2xl rounded-3xl" aria-hidden></div>
                <div className="relative w-[420px] h-[420px] max-w-full">
                  <DotLottieReact
                    src="/3d-avatar-animation.lottie"
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

export default Features; 