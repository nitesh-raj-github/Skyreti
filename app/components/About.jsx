'use client';
import { motion } from 'framer-motion';
import { FiUsers, FiTarget, FiAward, FiGlobe } from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: <FiAward /> },
    { label: 'Team Members', value: '50+', icon: <FiUsers /> },
    { label: 'Projects Delivered', value: '500+', icon: <FiTarget /> },
    { label: 'Countries Served', value: '20+', icon: <FiGlobe /> },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skyreti
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We are a global digital solutions agency specializing in transforming businesses through cutting-edge technology and innovative strategies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-200 mb-6">Our Mission</h3>
            <p className="text-gray-400 mb-6">
              To empower schools, universities, HR departments, startups, and influencers with comprehensive digital solutions that drive growth, efficiency, and innovation.
            </p>
            <p className="text-gray-400 mb-8">
              With a team of 50+ tech experts, we combine technical expertise with creative thinking to deliver solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-4 bg-gray-900/50 rounded-xl">
                  <div className="text-cyan-400 text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-200 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {[
                'Industry-specific expertise across multiple sectors',
                'End-to-end digital transformation solutions',
                'Cutting-edge technology stack',
                'Dedicated project management',
                '24/7 support and maintenance',
                'Proven track record of success',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;