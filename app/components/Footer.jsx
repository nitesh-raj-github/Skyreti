'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Skyreti
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through cutting-edge digital solutions and innovative technology.
            </p>
            <div className="flex space-x-4">
              {[FiGithub, FiLinkedin, FiTwitter, FiYoutube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -3 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Industries', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI/ML', 'Social Media', 'Content Creation'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <FiMail className="text-cyan-400" />
                <span>contact@skyreti.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FiPhone className="text-cyan-400" />
                <span>+91 7492973201</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FiMapPin className="text-cyan-400" />
                <span>Rajkot, Gujarat</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Skyreti. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;