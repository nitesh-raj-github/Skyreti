'use client';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiShare2, FiTrendingUp, FiUsers, FiFileText } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites with latest technologies',
      icon: <FiCode />,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS & Android',
      icon: <FiSmartphone />,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Social Media',
      description: 'Complete social media management & strategy',
      icon: <FiShare2 />,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns & analytics',
      icon: <FiTrendingUp />,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'HR Solutions',
      description: 'Digital HR platforms & recruitment systems',
      icon: <FiUsers />,
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Content Creation',
      description: 'Professional content in English for global audience',
      icon: <FiFileText />,
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-2xl text-white">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;