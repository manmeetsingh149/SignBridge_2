import React from 'react';
import { motion } from 'framer-motion';

const Values = () => {
  const values = [
    {
      id: 1,
      title: "Accessibility First",
      description: "Every feature we build prioritizes making education accessible to deaf and hard-of-hearing students.",
      icon: "♿",
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Innovation",
      description: "We continuously explore new technologies to improve sign language translation and user experience.",
      icon: "🚀",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Inclusivity",
      description: "Creating learning environments where every student feels valued and supported.",
      icon: "🤝",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Quality",
      description: "Maintaining high standards in our technology and ensuring reliable performance in classrooms.",
      icon: "⭐",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at SignBridge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="card p-8 h-full relative overflow-hidden text-center">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <span className="text-3xl">{value.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values; 