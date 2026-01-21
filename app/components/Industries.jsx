'use client';
import { motion } from 'framer-motion';
import { FiBook, FiUsers, FiBriefcase, FiStar, FiGlobe } from 'react-icons/fi';

const Industries = () => {
  const industries = [
    {
      name: 'Education',
      description: 'Schools & Universities',
      icon: <FiBook />,
      color: 'from-blue-500 to-cyan-500',
      count: '150+ Projects'
    },
    {
      name: 'HR & Recruitment',
      description: 'Corporate HR Departments',
      icon: <FiUsers />,
      color: 'from-purple-500 to-pink-500',
      count: '80+ Projects'
    },
    {
      name: 'Startups',
      description: 'Tech Startups & Entrepreneurs',
      icon: <FiBriefcase />,
      color: 'from-green-500 to-emerald-500',
      count: '200+ Projects'
    },
    {
      name: 'Influencers',
      description: 'Content Creators & Brands',
      icon: <FiStar />,
      color: 'from-yellow-500 to-orange-500',
      count: '120+ Projects'
    },
    {
      name: 'Enterprise',
      description: 'Global Corporations',
      icon: <FiGlobe />,
      color: 'from-indigo-500 to-purple-500',
      count: '50+ Projects'
    },
  ];

  return (
    <section id="industries" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">Serving </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in digital transformation across multiple sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all group hover:scale-[1.02]"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform`}>
                <div className="text-2xl text-white">{industry.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-200 mb-2">{industry.name}</h3>
              <p className="text-gray-400 text-center mb-4">{industry.description}</p>
              <div className="text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-cyan-400 text-sm font-medium">
                  {industry.count}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;