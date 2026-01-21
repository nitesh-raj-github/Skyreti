'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiCpu, 
  FiUsers,
  FiDatabase, 
  FiCloud, 
  FiShield,
  FiZap,
  FiSmartphone,
  FiGlobe,
  FiTrendingUp,
  FiLock,
  FiBarChart2,
  FiSettings,
  FiPlay,
  FiPause,
  FiChevronLeft,
  FiChevronRight
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
  SiAmazon,
  SiGooglecloud,
  SiMicrosoftAzure,
  SiGit,
  SiJavascript,
  SiGraphql,
  SiRedis,
  SiPostgresql,
  SiFigma,
  SiAdobexd
} from 'react-icons/si';

const TechShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FiCode />,
      color: 'from-cyan-500 to-blue-600',
      description: 'Modern, responsive user interfaces with cutting-edge frameworks'
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: <FiServer />,
      color: 'from-purple-500 to-pink-600',
      description: 'Scalable server architecture and REST/GraphQL APIs'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: <FiCpu />,
      color: 'from-green-500 to-emerald-600',
      description: 'Intelligent systems and predictive analytics'
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: <FiCloud />,
      color: 'from-orange-500 to-red-600',
      description: 'CI/CD pipelines and cloud infrastructure'
    },
    {
      id: 'database',
      title: 'Database Solutions',
      icon: <FiDatabase />,
      color: 'from-yellow-500 to-amber-600',
      description: 'Data storage, optimization, and real-time sync'
    },
    {
      id: 'security',
      title: 'Security',
      icon: <FiShield />,
      color: 'from-indigo-500 to-purple-600',
      description: 'Enterprise-grade security protocols and encryption'
    }
  ];

  const techStacks = {
    frontend: [
      { icon: <SiNextdotjs />, name: 'Next.js 14', expertise: 'Expert', projects: 150, color: 'text-gray-800' },
      { icon: <SiReact />, name: 'React 18', expertise: 'Expert', projects: 200, color: 'text-cyan-500' },
      { icon: <SiTypescript />, name: 'TypeScript', expertise: 'Advanced', projects: 180, color: 'text-blue-600' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', expertise: 'Expert', projects: 220, color: 'text-teal-500' },
      { icon: <SiJavascript />, name: 'JavaScript', expertise: 'Expert', projects: 250, color: 'text-yellow-500' },
    ],
    backend: [
      { icon: <SiNodedotjs />, name: 'Node.js', expertise: 'Expert', projects: 120, color: 'text-green-600' },
      { icon: <SiPython />, name: 'Python', expertise: 'Advanced', projects: 90, color: 'text-blue-500' },
      { icon: <SiGraphql />, name: 'GraphQL', expertise: 'Advanced', projects: 60, color: 'text-pink-600' },
      { icon: <SiFirebase />, name: 'Firebase', expertise: 'Expert', projects: 110, color: 'text-orange-500' },
    ],
    'ai-ml': [
      { icon: <SiPython />, name: 'TensorFlow', expertise: 'Advanced', projects: 45, color: 'text-orange-600' },
      { icon: <FiCpu />, name: 'OpenAI API', expertise: 'Expert', projects: 70, color: 'text-purple-500' },
      { icon: <FiBarChart2 />, name: 'PyTorch', expertise: 'Intermediate', projects: 30, color: 'text-red-500' },
      { icon: <FiTrendingUp />, name: 'Scikit-learn', expertise: 'Advanced', projects: 55, color: 'text-blue-400' },
    ],
    devops: [
      { icon: <SiDocker />, name: 'Docker', expertise: 'Expert', projects: 85, color: 'text-blue-500' },
      { icon: <SiKubernetes />, name: 'Kubernetes', expertise: 'Advanced', projects: 45, color: 'text-blue-600' },
      { icon: <SiAmazon />, name: 'AWS', expertise: 'Expert', projects: 95, color: 'text-orange-500' },
      { icon: <SiGooglecloud />, name: 'Google Cloud', expertise: 'Advanced', projects: 65, color: 'text-blue-400' },
      { icon: <SiMicrosoftAzure />, name: 'Azure', expertise: 'Intermediate', projects: 40, color: 'text-blue-700' },
    ],
    database: [
      { icon: <SiMongodb />, name: 'MongoDB', expertise: 'Expert', projects: 100, color: 'text-green-600' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', expertise: 'Advanced', projects: 75, color: 'text-blue-700' },
      { icon: <SiRedis />, name: 'Redis', expertise: 'Expert', projects: 60, color: 'text-red-600' },
      { icon: <FiDatabase />, name: 'MySQL', expertise: 'Advanced', projects: 85, color: 'text-orange-600' },
    ],
    security: [
      { icon: <FiShield />, name: 'Auth Systems', expertise: 'Expert', projects: 120, color: 'text-indigo-500' },
      { icon: <FiLock />, name: 'Encryption', expertise: 'Advanced', projects: 90, color: 'text-green-500' },
      { icon: <FiZap />, name: 'Pen Testing', expertise: 'Intermediate', projects: 50, color: 'text-yellow-500' },
    ]
  };

  const techProjects = [
    {
      title: 'University Management System',
      description: 'Complete digital transformation for a major university with 50,000+ students',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
      category: 'backend',
      progress: 100,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'HR Recruitment Platform',
      description: 'AI-powered recruitment system with video interviewing and analytics',
      tech: ['React', 'Python', 'TensorFlow', 'Firebase'],
      category: 'ai-ml',
      progress: 85,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Influencer Marketing Suite',
      description: 'Platform connecting brands with influencers with real-time analytics',
      tech: ['Next.js', 'GraphQL', 'Redis', 'Docker'],
      category: 'frontend',
      progress: 100,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'School ERP System',
      description: 'Enterprise resource planning for K-12 schools with parent portals',
      tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'database',
      progress: 90,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Startup Accelerator Platform',
      description: 'All-in-one platform for startup funding, mentorship, and resources',
      tech: ['React', 'Firebase', 'Stripe', 'Google Cloud'],
      category: 'devops',
      progress: 75,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const activeProjects = techProjects.filter(project => project.category === activeCategory);

  // Auto-rotate projects
  useEffect(() => {
    if (!isAutoPlaying || activeProjects.length === 0) return;

    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % activeProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeProjects.length]);

  const handleNextProject = () => {
    setActiveProject((prev) => (prev + 1) % activeProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevProject = () => {
    setActiveProject((prev) => (prev === 0 ? activeProjects.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getExpertiseColor = (level) => {
    switch(level.toLowerCase()) {
      case 'expert': return 'bg-green-500/20 text-green-400';
      case 'advanced': return 'bg-blue-500/20 text-blue-400';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-800 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-400">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver scalable, secure, and innovative solutions
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {techCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveProject(0);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border transition-all text-left group ${
                activeCategory === category.id
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'bg-gray-900/50 border-gray-800 hover:border-cyan-500/30'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <div className="text-xl text-white">{category.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-200 mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Tech Stack Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-200">
                  {techCategories.find(c => c.id === activeCategory)?.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Technologies:</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-cyan-400 font-medium">
                    {techStacks[activeCategory].length}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {techStacks[activeCategory].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-200">{tech.name}</h4>
                        <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getExpertiseColor(tech.expertise)}`}>
                          {tech.expertise}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-200">{tech.projects}+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">Performance Metrics</h3>
              
              <div className="space-y-6">
                {[
                  { label: 'Load Time', value: 95, target: 100, color: 'from-green-500 to-emerald-500' },
                  { label: 'Security Score', value: 98, target: 100, color: 'from-blue-500 to-cyan-500' },
                  { label: 'Code Quality', value: 92, target: 100, color: 'from-purple-500 to-pink-500' },
                  { label: 'Uptime SLA', value: 99.9, target: 100, color: 'from-orange-500 to-yellow-500' },
                ].map((metric, index) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className="text-cyan-400 font-bold">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${metric.color} relative`}
                      >
                        <motion.div
                          animate={{ x: ['0%', '100%', '0%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Project Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-200">Project Showcase</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    {isAutoPlaying ? <FiPause /> : <FiPlay />}
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrevProject}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <FiChevronLeft />
                    </button>
                    <span className="text-sm text-gray-400">
                      {activeProject + 1} / {activeProjects.length}
                    </span>
                    <button
                      onClick={handleNextProject}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeProjects.length > 0 && (
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {/* Project Image/Placeholder */}
                    <div className={`h-48 rounded-xl bg-gradient-to-br ${activeProjects[activeProject].color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-4xl">
                          {activeCategory === 'frontend' && <FiCode />}
                          {activeCategory === 'backend' && <FiServer />}
                          {activeCategory === 'ai-ml' && <FiCpu />}
                          {activeCategory === 'devops' && <FiCloud />}
                          {activeCategory === 'database' && <FiDatabase />}
                          {activeCategory === 'security' && <FiShield />}
                        </div>
                      </div>
                      
                      {/* Progress Indicator */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between text-sm text-white mb-1">
                          <span>Project Progress</span>
                          <span>{activeProjects[activeProject].progress}%</span>
                        </div>
                        <div className="h-1.5 bg-white/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${activeProjects[activeProject].progress}%` }}
                            className={`h-full bg-white`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-200 mb-2">
                        {activeProjects[activeProject].title}
                      </h4>
                      <p className="text-gray-400 mb-6">
                        {activeProjects[activeProject].description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {activeProjects[activeProject].tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800/50 rounded-lg text-sm text-cyan-400 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Development', value: '6 Months', icon: <FiSettings /> },
                        { label: 'Team Size', value: '8 Members', icon: <FiUsers /> },
                        { label: 'Client', value: 'Enterprise', icon: <FiGlobe /> },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 text-center"
                        >
                          <div className="text-cyan-400 text-xl mb-2 flex justify-center">
                            {stat.icon}
                          </div>
                          <div className="text-lg font-bold text-gray-200 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-400">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Development Tools */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800">
              <h3 className="text-2xl font-bold text-gray-200 mb-6">Development Tools</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <SiGit />, name: 'Git', color: 'text-orange-500' },
                  { icon: <SiFigma />, name: 'Figma', color: 'text-pink-500' },
                  { icon: <SiAdobexd />, name: 'Adobe XD', color: 'text-purple-500' },
                  { icon: <FiZap />, name: 'VS Code', color: 'text-blue-500' },
                  { icon: <FiServer />, name: 'Postman', color: 'text-orange-400' },
                  { icon: <FiDatabase />, name: 'DataGrip', color: 'text-green-500' },
                  { icon: <FiCloud />, name: 'Cloud CLI', color: 'text-cyan-400' },
                  { icon: <FiShield />, name: 'Security', color: 'text-yellow-500' },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="text-center group"
                  >
                    <div className={`w-14 h-14 mx-auto bg-gray-800/50 rounded-xl flex items-center justify-center mb-2 group-hover:bg-gray-700 transition-colors ${tool.color}`}>
                      <div className="text-2xl">{tool.icon}</div>
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-8 text-center">Certifications & Partnerships</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'AWS Certified', color: 'from-orange-500 to-yellow-500' },
              { name: 'Google Cloud Partner', color: 'from-blue-500 to-cyan-500' },
              { name: 'Microsoft Gold Partner', color: 'from-green-500 to-emerald-500' },
              { name: 'Security Verified', color: 'from-purple-500 to-pink-500' },
              { name: 'React Certified', color: 'from-cyan-500 to-blue-500' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`px-6 py-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-20 border border-gray-700/50 backdrop-blur-sm`}
              >
                <span className="text-gray-300 font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Floating Code Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            {`<Code />`}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechShowcase;