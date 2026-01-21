'use client';
import { useState, useEffect } from 'react';
import { FiGlobe, FiMenu, FiX, FiChevronDown, FiCode, FiServer, FiDatabase, FiCpu, FiBriefcase, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNextdotjs, SiReact, SiNodedotjs, SiPython, SiFirebase } from 'react-icons/si';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ activeSection, scrollToSection, onGetStarted }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isLink: true },
    { 
      label: 'Services', 
      href: '/services',
      isLink: true,
      dropdown: [
        { label: 'Web Development', href: '/services#web-dev' },
        { label: 'Mobile Apps', href: '/services#mobile-apps' },
        { label: 'Social Media', href: '/services#social-media' },
        { label: 'Digital Business', href: '/services#digital-business' },
        { label: 'Content Creation', href: '/services#content-creation' },
      ]
    },
    { 
      label: 'Portfolio', 
      href: '/portfolio',
      isLink: true,
      dropdown: [
        { label: 'Educational Projects', href: '/portfolio#education' },
        { label: 'HR Solutions', href: '/portfolio#hr' },
        { label: 'Startup Projects', href: '/portfolio#startup' },
        { label: 'Influencer Platforms', href: '/portfolio#influencer' },
        { label: 'All Case Studies', href: '/portfolio#all' },
      ]
    },
    { label: 'About', href: '#about', isLink: false },
    { label: 'Industries', href: '#industries', isLink: false },
    { label: 'Contact', href: '#contact', isLink: false },
  ];

  // Desktop Navigation Items
  const renderNavItem = (item) => {
    if (item.isLink) {
      return (
        <Link
          href={item.href}
          className={`font-medium transition-colors relative group py-2 ${
            pathname === item.href 
              ? 'text-cyan-400' 
              : 'text-gray-300 hover:text-cyan-400'
          }`}
        >
          {item.label}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 ${
            pathname === item.href ? 'w-full' : ''
          }`}></span>
        </Link>
      );
    } else {
      return (
        <motion.button
          onClick={() => scrollToSection(item.href.replace('#', ''))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`font-medium transition-colors relative group py-2 ${
            activeSection === item.href.replace('#', '') 
              ? 'text-cyan-400' 
              : 'text-gray-300 hover:text-cyan-400'
          }`}
        >
          {item.label}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 ${
            activeSection === item.href.replace('#', '') ? 'w-full' : ''
          }`}></span>
        </motion.button>
      );
    }
  };

  // Desktop Dropdown Items
  const renderDropdownItem = (subItem) => {
    if (subItem.href.startsWith('/')) {
      return (
        <Link
          key={subItem.label}
          href={subItem.href}
          className="w-full text-left px-6 py-4 text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-cyan-400 transition-all border-b border-gray-800 last:border-0 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center space-x-3">
            <span className="font-medium">{subItem.label}</span>
          </div>
        </Link>
      );
    } else {
      return (
        <button
          key={subItem.label}
          onClick={() => {
            if (pathname !== '/') {
              // If not on homepage, navigate to homepage first
              window.location.href = `/${subItem.href}`;
            } else {
              scrollToSection(subItem.href.replace('#', ''));
            }
            setIsOpen(false);
          }}
          className="w-full text-left px-6 py-4 text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-cyan-400 transition-all border-b border-gray-800 last:border-0 group"
        >
          <div className="flex items-center space-x-3">
            <span className="font-medium">{subItem.label}</span>
          </div>
        </button>
      );
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl py-3 border-b border-gray-800'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all"
            >
              <FiCode className="text-white text-xl z-10" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Skyreti
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Tech Solutions Agency</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => item.label === 'Services' ? setServicesOpen(true) : setPortfolioOpen(true)}
                    onMouseLeave={() => item.label === 'Services' ? setServicesOpen(false) : setPortfolioOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                      pathname === item.href 
                        ? 'text-cyan-400' 
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}>
                      <span>{item.label}</span>
                      <FiChevronDown className={`transition-transform ${
                        (item.label === 'Services' && servicesOpen) || (item.label === 'Portfolio' && portfolioOpen) 
                          ? 'rotate-180' 
                          : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {(item.label === 'Services' && servicesOpen) || (item.label === 'Portfolio' && portfolioOpen) ? (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => renderDropdownItem(subItem))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  renderNavItem(item)
                )}
              </div>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-4 border-l border-gray-800 pl-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
            </div>

            {/* Get Started Button */}
            <motion.button
              onClick={onGetStarted}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 text-2xl p-2 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl mt-4 border border-gray-800"
            >
              <div className="pt-6 pb-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.dropdown ? (
                      <div className="border-b border-gray-800">
                        <button
                          onClick={() => item.label === 'Services' ? setServicesOpen(!servicesOpen) : setPortfolioOpen(!portfolioOpen)}
                          className={`flex items-center justify-between w-full font-medium py-4 px-6 ${
                            pathname === item.href 
                              ? 'text-cyan-400' 
                              : 'text-gray-300 hover:text-cyan-400'
                          }`}
                        >
                          <span>{item.label}</span>
                          <FiChevronDown className={`transition-transform ${
                            (item.label === 'Services' && servicesOpen) || (item.label === 'Portfolio' && portfolioOpen) 
                              ? 'rotate-180' 
                              : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {((item.label === 'Services' && servicesOpen) || (item.label === 'Portfolio' && portfolioOpen)) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-900/50"
                            >
                              {item.dropdown.map((subItem, idx) => (
                                <div key={idx}>
                                  {subItem.href.startsWith('/') ? (
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block py-3 px-10 text-gray-400 hover:bg-gray-800 hover:text-cyan-400 transition-all border-b border-gray-800 last:border-0"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        if (pathname !== '/') {
                                          window.location.href = `/${subItem.href}`;
                                        } else {
                                          scrollToSection(subItem.href.replace('#', ''));
                                        }
                                        setIsOpen(false);
                                      }}
                                      className="block w-full text-left py-3 px-10 text-gray-400 hover:bg-gray-800 hover:text-cyan-400 transition-all border-b border-gray-800 last:border-0"
                                    >
                                      {subItem.label}
                                    </button>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div>
                        {item.isLink ? (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block font-medium py-4 px-6 border-b border-gray-800 hover:bg-gray-800 transition-all ${
                              pathname === item.href 
                                ? 'text-cyan-400 bg-gray-800/50' 
                                : 'text-gray-300 hover:text-cyan-400'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              if (pathname !== '/') {
                                window.location.href = `/${item.href}`;
                              } else {
                                scrollToSection(item.href.replace('#', ''));
                              }
                              setIsOpen(false);
                            }}
                            className={`block w-full text-left font-medium py-4 px-6 border-b border-gray-800 hover:bg-gray-800 transition-all ${
                              activeSection === item.href.replace('#', '') 
                                ? 'text-cyan-400 bg-gray-800/50' 
                                : 'text-gray-300 hover:text-cyan-400'
                            }`}
                          >
                            {item.label}
                          </button>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile Get Started Button */}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 + 0.3 }}
                  onClick={() => {
                    onGetStarted();
                    setIsOpen(false);
                  }}
                  className="w-full mt-6 mx-6 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;