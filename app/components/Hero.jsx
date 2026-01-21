'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiGlobe, 
  FiTrendingUp, 
  FiUsers, 
  FiCode, 
  FiServer, 
  FiCloud, 
  FiCpu,
  FiDatabase,
  FiZap,
  FiShield,
  FiCommand
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiAmazon

} from 'react-icons/si';

const Hero = ({ onGetStarted }) => {
  const [activeTech, setActiveTech] = useState('Next.js');
  const [showTerminal, setShowTerminal] = useState(true);

  const techStack = [
    { 
      icon: <SiNextdotjs />, 
      name: 'Next.js', 
      color: 'from-gray-800 to-gray-900',
      desc: 'Full-stack React framework',
      gradient: 'bg-gradient-to-br from-gray-800 to-gray-900'
    },
    { 
      icon: <SiReact />, 
      name: 'React', 
      color: 'from-cyan-500 to-blue-600',
      desc: 'Modern UI library',
      gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    { 
      icon: <SiNodedotjs />, 
      name: 'Node.js', 
      color: 'from-green-500 to-emerald-600',
      desc: 'Backend runtime',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    { 
      icon: <SiPython />, 
      name: 'Python', 
      color: 'from-blue-500 to-indigo-600',
      desc: 'AI/ML & Data Science',
      gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    { 
      icon: <SiFirebase />, 
      name: 'Firebase', 
      color: 'from-orange-500 to-yellow-500',
      desc: 'Real-time database',
      gradient: 'bg-gradient-to-br from-orange-500 to-yellow-500'
    },
    { 
      icon: <SiTypescript />, 
      name: 'TypeScript', 
      color: 'from-blue-600 to-blue-800',
      desc: 'Type-safe JavaScript',
      gradient: 'bg-gradient-to-br from-blue-600 to-blue-800'
    },
    { 
      icon: <SiTailwindcss />, 
      name: 'Tailwind', 
      color: 'from-teal-500 to-cyan-600',
      desc: 'Utility-first CSS',
      gradient: 'bg-gradient-to-br from-teal-500 to-cyan-600'
    },
    { 
      icon: <SiMongodb />, 
      name: 'MongoDB', 
      color: 'from-green-600 to-green-800',
      desc: 'NoSQL database',
      gradient: 'bg-gradient-to-br from-green-600 to-green-800'
    },
  ];

  const stats = [
    { 
      label: 'Projects Delivered', 
      value: '500+', 
      icon: <FiCheckCircle />, 
      color: 'text-green-400',
      animation: 'Projects' 
    },
    { 
      label: 'Global Clients', 
      value: '120+', 
      icon: <FiGlobe />, 
      color: 'text-cyan-400',
      animation: 'Clients' 
    },
    { 
      label: 'Uptime', 
      value: '99.9%', 
      icon: <FiTrendingUp />, 
      color: 'text-blue-400',
      animation: 'Uptime' 
    },
    { 
      label: 'Team Experts', 
      value: '50+', 
      icon: <FiUsers />, 
      color: 'text-purple-400',
      animation: 'Experts' 
    },
  ];

  const systemMetrics = [
    { label: 'API Requests', value: '2.4M', color: 'from-cyan-500 to-blue-500', percent: 85, icon: <FiCode /> },
    { label: 'Data Processed', value: '15TB', color: 'from-purple-500 to-pink-500', percent: 92, icon: <FiDatabase /> },
    { label: 'System Uptime', value: '99.9%', color: 'from-green-500 to-emerald-500', percent: 99, icon: <FiShield /> },
    { label: 'Response Time', value: '45ms', color: 'from-orange-500 to-red-500', percent: 78, icon: <FiZap /> },
  ];

  // Terminal command animation
  const terminalCommands = [
    '$ npm create-next-app@latest',
    '✓ Successfully created project',
    '✓ Installing dependencies...',
    '✓ Setting up TypeScript...',
    '✓ Initializing Git repository...',
    'Ready to build! 🚀'
  ];

  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % terminalCommands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleTechClick = (techName) => {
    setActiveTech(techName);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      </div>
      
      {/* Animated Binary Code Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            className="absolute text-cyan-400/30 font-mono text-sm"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      {techStack.slice(0, 6).map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ y: 0, x: 0 }}
          animate={{ 
            y: [0, -30, 0],
            x: Math.sin(index) * 20,
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
          className={`absolute w-20 h-20 ${tech.gradient} rounded-2xl flex items-center justify-center shadow-2xl border border-gray-700/50 cursor-pointer hover:scale-110 transition-transform z-10 ${
            index === 0 ? 'top-1/4 left-1/4' :
            index === 1 ? 'top-1/3 right-1/4' :
            index === 2 ? 'bottom-1/4 left-1/3' :
            index === 3 ? 'bottom-1/3 right-1/3' :
            index === 4 ? 'top-1/2 left-1/2' :
            'top-2/3 left-1/4'
          } opacity-30 hover:opacity-70`}
          onClick={() => handleTechClick(tech.name)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="text-3xl text-white">{tech.icon}</div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-800 mb-6 group hover:border-cyan-500/50 transition-colors"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-2"
              />
              <span className="text-sm font-medium text-cyan-400">Enterprise-Grade Tech Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-300">
                Digital Transformation
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block ml-2 text-cyan-400"
                >
                  →
                </motion.span>
              </span>
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                Powered by Innovation
              </motion.span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We architect <span className="font-semibold text-cyan-400">cutting-edge digital solutions</span> for{' '}
              <span className="font-semibold text-blue-400">schools</span>,{' '}
              <span className="font-semibold text-purple-400">universities</span>,{' '}
              <span className="font-semibold text-pink-400">HR systems</span>,{' '}
              <span className="font-semibold text-indigo-400">startups</span>, and{' '}
              <span className="font-semibold text-teal-400">influencer platforms</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                onClick={onGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center group"
              >
                <span className="relative z-10 flex items-center">
                  Start Tech Project
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <FiArrowRight />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800/50 text-gray-300 font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 backdrop-blur-sm group"
              >
                <span className="flex items-center">
                  <FiCommand className="mr-2" />
                  View Tech Stack
                </span>
              </motion.button>
            </div>

            {/* Active Tech Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Active Technology:</span>
                <span className="text-cyan-400 font-mono text-sm">v14.1.0</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg ${techStack.find(t => t.name === activeTech)?.gradient} flex items-center justify-center`}>
                  <div className="text-xl text-white">
                    {techStack.find(t => t.name === activeTech)?.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">{activeTech}</h4>
                  <p className="text-sm text-gray-400">
                    {techStack.find(t => t.name === activeTech)?.desc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">Our Technology Stack:</p>
                <button 
                  onClick={() => setShowTerminal(!showTerminal)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {showTerminal ? 'Hide Terminal' : 'Show Terminal'}
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <motion.button
                    key={tech.name}
                    onClick={() => handleTechClick(tech.name)}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg border ${
                      activeTech === tech.name 
                        ? 'border-cyan-500/50 bg-gray-800' 
                        : 'border-gray-700 hover:border-cyan-500/30'
                    } backdrop-blur-sm transition-all`}
                  >
                    <div className={`text-xl ${activeTech === tech.name ? 'text-cyan-400' : 'text-gray-300'}`}>
                      {tech.icon}
                    </div>
                    <span className={`font-medium ${activeTech === tech.name ? 'text-cyan-300' : 'text-gray-300'}`}>
                      {tech.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Terminal Window */}
            <AnimatePresence>
              {showTerminal && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="bg-gray-900/80 rounded-lg border border-gray-800 font-mono text-sm">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-gray-400">terminal</div>
                    </div>
                    <div className="p-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentCommand}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-green-400"
                        >
                          {terminalCommands[currentCommand]}
                        </motion.div>
                      </AnimatePresence>
                      <div className="flex items-center mt-2">
                        <span className="text-cyan-400">skyreti@tech ~ $</span>
                        <motion.div
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="ml-2 w-2 h-4 bg-cyan-400"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`text-xl ${stat.color}`}>{stat.icon}</div>
                    <div className="text-xs px-2 py-1 bg-gray-900 rounded text-cyan-300 font-mono">
                      {stat.animation}
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Tech Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl p-6 border border-gray-800">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center"
                  >
                    <FiCode className="text-white text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-200">Skyreti Control Panel</h3>
                    <p className="text-sm text-gray-400">Real-time System Analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-400">Live</span>
                </div>
              </div>

              {/* System Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {systemMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-2xl font-bold text-gray-200">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                        <div className="text-white text-xl">{metric.icon}</div>
                      </div>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.percent}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${metric.color}`}
                      />
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-400">{metric.percent}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cloud Services */}
              <div className="pt-6 border-t border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-gray-400">Cloud Infrastructure</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400">
                      <SiAmazon />
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400">
                      <SiDocker />
                    </div>
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400">
                      <SiKubernetes />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  {['Web', 'API', 'DB', 'AI', 'Cloud'].map((service, index) => (
                    <div
                      key={service}
                      className="text-center"
                    >
                      <div className="w-14 h-14 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg mb-2 border border-gray-700">
                        <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {service}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-400">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Explore Tech Stack</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;