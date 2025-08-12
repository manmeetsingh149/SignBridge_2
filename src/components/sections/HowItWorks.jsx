import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, FileText, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Teacher Uploads Materials",
      description: "Educators upload notes and learning materials to the web platform",
      icon: User,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Content in Sign Language",
      description: "Materials are displayed to students using a 3D avatar in sign language",
      icon: Users,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Live Classroom Translation",
      description: "Chrome extension listens to speech and translates it in real-time",
      icon: FileText,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Active Participation",
      description: "Deaf students can now fully participate in classroom discussions",
      icon: MessageSquare,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-gradient">SignBridge</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SignBridge works through two main components: a web platform for learning materials and a Chrome extension for live classroom translation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {step.id}
              </div>

              {/* Card */}
              <div className="card p-8 text-center relative h-full min-h-[340px] flex flex-col justify-start">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HowItWorks; 