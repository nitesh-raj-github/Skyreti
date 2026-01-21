'use client';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiShare2, FiTrendingUp, FiUsers, FiFileText } from 'react-icons/fi';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites with latest technologies',
      icon: <FiCode />,
      color: 'from-cyan-500 to-blue-600',
      details: [
        'Custom Website Design',
        'E-commerce Solutions',
        'CMS Integration',
        'SEO Optimization',
        'Performance Optimization'
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS & Android',
      icon: <FiSmartphone />,
      color: 'from-purple-500 to-pink-600',
      details: [
        'React Native Development',
        'iOS & Android Apps',
        'UI/UX Design',
        'App Store Deployment',
        'Maintenance & Support'
      ]
    },
    {
      title: 'Social Media Management',
      description: 'Complete social media management & strategy',
      icon: <FiShare2 />,
      color: 'from-green-500 to-emerald-600',
      details: [
        'Content Strategy',
        'Social Media Posts',
        'Community Management',
        'Analytics & Reporting',
        'Influencer Marketing'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns & analytics',
      icon: <FiTrendingUp />,
      color: 'from-orange-500 to-red-600',
      details: [
        'SEO/SEM Services',
        'Email Marketing',
        'PPC Campaigns',
        'Content Marketing',
        'Conversion Optimization'
      ]
    },
    {
      title: 'HR Solutions',
      description: 'Digital HR platforms & recruitment systems',
      icon: <FiUsers />,
      color: 'from-yellow-500 to-amber-600',
      details: [
        'HR Management Systems',
        'Recruitment Platforms',
        'Employee Portals',
        'Payroll Systems',
        'Performance Management'
      ]
    },
    {
      title: 'Content Creation',
      description: 'Professional content in English for global audience',
      icon: <FiFileText />,
      color: 'from-indigo-500 to-purple-600',
      details: [
        'Blog Writing',
        'Video Content',
        'Social Media Content',
        'Technical Writing',
        'Brand Storytelling'
      ]
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900/50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}