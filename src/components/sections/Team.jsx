import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../../data/dummyData';

const Team = () => {
  return (
    <section id="team" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to making education accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group h-full flex"
              >
                <div className="card p-6 text-center h-full flex flex-col justify-between">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
                  >
                    {member.avatar}
                  </motion.div>

                  {/* Name and Role */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Hover effect indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center text-primary-600 font-medium">
                      <span>View Profile</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 