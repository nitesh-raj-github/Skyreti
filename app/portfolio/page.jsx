'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGlobe, FiUsers, FiTrendingUp, FiBook, FiStar, FiDollarSign, FiCheck, FiX, FiMail } from 'react-icons/fi';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    package: '',
    budget: '',
    timeline: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const servicePackages = [
    {
      category: 'University',
      icon: <FiBook />,
      color: 'from-blue-500 to-cyan-500',
      projects: [
        {
          title: 'Learning Management System',
          description: 'Complete online education platform with course management, video lectures, and student tracking',
          features: ['Course Management', 'Video Lectures', 'Student Portal', 'Gradebook', 'Mobile App'],
          price: '₹4,50,000',
          duration: '3-4 Months',
          clients: ['IIT Delhi', 'University of Mumbai', 'Manipal University']
        },
        {
          title: 'University Website & Portal',
          description: 'Modern responsive website with admin panel, student login, and payment integration',
          features: ['Responsive Design', 'Admin Panel', 'Student Portal', 'Payment Gateway', 'SEO Optimized'],
          price: '₹2,50,000',
          duration: '2-3 Months',
          clients: ['Delhi University', 'Anna University', 'JNU']
        }
      ]
    },
    {
      category: 'Schools',
      icon: <FiBook />,
      color: 'from-purple-500 to-pink-500',
      projects: [
        {
          title: 'School Management System',
          description: 'Complete ERP for K-12 schools with attendance, fees, and parent communication',
          features: ['Student Management', 'Fee Collection', 'Parent App', 'Attendance System', 'Report Cards'],
          price: '₹1,80,000',
          duration: '2 Months',
          clients: ['DPS Chain', 'The Shri Ram School', 'Modern School']
        },
        {
          title: 'E-Learning Platform',
          description: 'Interactive learning platform with animated content and progress tracking',
          features: ['Interactive Content', 'Progress Tracking', 'Parent Dashboard', 'Quiz System', 'Mobile App'],
          price: '₹1,20,000',
          duration: '1.5 Months',
          clients: ['Podar International', 'Billabong High', 'Ryan International']
        }
      ]
    },
    {
      category: 'HR Departments',
      icon: <FiUsers />,
      color: 'from-green-500 to-emerald-500',
      projects: [
        {
          title: 'HR Recruitment Platform',
          description: 'AI-powered recruitment system with video interviews and candidate tracking',
          features: ['AI Screening', 'Video Interviews', 'Candidate Tracking', 'Analytics Dashboard', 'Integration APIs'],
          price: '₹3,20,000',
          duration: '2.5 Months',
          clients: ['TCS', 'Infosys', 'Wipro']
        },
        {
          title: 'Employee Management System',
          description: 'Complete HRMS with payroll, leave management, and performance tracking',
          features: ['Payroll System', 'Leave Management', 'Performance Reviews', 'Document Management', 'Mobile App'],
          price: '₹2,80,000',
          duration: '2-3 Months',
          clients: ['HCL', 'Tech Mahindra', 'Accenture']
        }
      ]
    },
    {
      category: 'Startups',
      icon: <FiTrendingUp />,
      color: 'from-orange-500 to-yellow-500',
      projects: [
        {
          title: 'MVP Development',
          description: 'Minimum Viable Product development for startups to validate ideas quickly',
          features: ['Basic MVP', 'Core Features', 'User Authentication', 'Payment Integration', 'Admin Dashboard'],
          price: '₹1,50,000 - ₹5,00,000',
          duration: '1-3 Months',
          clients: ['Fintech Startup', 'Edtech Platform', 'Healthtech App']
        },
        {
          title: 'Scale-up Platform',
          description: 'Scalable platform development for growing startups with advanced features',
          features: ['Scalable Architecture', 'Advanced Features', 'Real-time Analytics', 'Cloud Hosting', 'API Integration'],
          price: '₹3,50,000 - ₹8,00,000',
          duration: '3-6 Months',
          clients: ['E-commerce Platform', 'SaaS Product', 'Marketplace App']
        }
      ]
    },
    {
      category: 'Influencers',
      icon: <FiStar />,
      color: 'from-indigo-500 to-purple-500',
      projects: [
        {
          title: 'Personal Brand Website',
          description: 'Premium website for influencers with portfolio, booking, and monetization',
          features: ['Portfolio Showcase', 'Booking System', 'E-commerce Integration', 'Social Media Links', 'Analytics'],
          price: '₹75,000 - ₹2,00,000',
          duration: '1-2 Months',
          clients: ['Fashion Influencers', 'Travel Bloggers', 'Fitness Coaches']
        },
        {
          title: 'Content Management Platform',
          description: 'Platform to manage and monetize content across multiple channels',
          features: ['Content Scheduler', 'Multi-platform Posting', 'Revenue Dashboard', 'Audience Analytics', 'Brand Deals'],
          price: '₹1,50,000 - ₹3,00,000',
          duration: '2-3 Months',
          clients: ['YouTube Creators', 'Instagram Influencers', 'Podcasters']
        }
      ]
    }
  ];

  const allProjects = servicePackages.flatMap(pkg => pkg.projects.map(proj => ({
    ...proj,
    category: pkg.category,
    color: pkg.color,
    icon: pkg.icon
  })));

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(proj => proj.category === activeCategory);

  const handleGetQuote = (project) => {
    setSelectedPackage(project);
    setFormData(prev => ({
      ...prev,
      category: project.category,
      package: project.title,
      budget: project.price.includes('-') 
        ? project.price.split('-')[1].trim() 
        : project.price
    }));
    setShowQuoteForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
const handleSubmitQuote = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_eb2qnf7';
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_52tr5fq';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'DkbkyqTjeHcGL1x7-';

    // Use the form element directly
    const form = e.target;
    
    const result = await emailjs.sendForm(
      serviceID,
      templateID,
      form,
      publicKey
    );

    console.log('Email sent successfully:', result);
    alert('Thank you! Your quote request has been sent.');
    
    // Reset form
    form.reset();
    
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Sorry, there was an error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
 
      // Fallback to mailto if EmailJS fails
      const emailBody = `
New Quote Request from Skyreti Website:

📋 Contact Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Company: ${formData.company || 'Not provided'}

🎯 Project Details:
• Category: ${formData.category}
• Package: ${formData.package}
• Budget: ${formData.budget}
• Timeline: ${formData.timeline}

📝 Requirements:
${formData.requirements}

---
Submitted on: ${new Date().toLocaleString()}
This quote request was submitted via Skyreti Portfolio Page.
      `;

      const mailtoLink = `mailto:contact.skyreti@gmail.com?subject=New Quote Request - ${formData.category}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setShowQuoteForm(false);
        setSubmitSuccess(false);
      }, 2000);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-800 mb-6">
            <FiDollarSign className="text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Transparent Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">Our </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Service Packages
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Customized solutions with transparent pricing for each industry
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Services
          </button>
          {servicePackages.map((pkg) => (
            <button
              key={pkg.category}
              onClick={() => setActiveCategory(pkg.category)}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeCategory === pkg.category
                  ? 'bg-gray-800 text-cyan-400 border border-cyan-500/50'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-cyan-300'
              }`}
            >
              <span>{pkg.icon}</span>
              <span>{pkg.category}</span>
            </button>
          ))}
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.category}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-white text-xl">{project.icon}</div>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{project.price}</div>
                    <div className="text-white/80 text-sm">Starting Price</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/90">{project.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FiCheck className="text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Timeline</div>
                    <div className="text-lg font-bold text-cyan-400">{project.duration}</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">Delivery</div>
                    <div className="text-lg font-bold text-cyan-400">Phase-wise</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-3">Previous Clients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.clients.map((client, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleGetQuote(project)}
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    Get Quote
                  </button>
                  <button className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Form Modal */}
        <AnimatePresence>
          {showQuoteForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => !isSubmitting && setShowQuoteForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full max-w-2xl border border-gray-800 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Form Header */}
                <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Get Custom Quote</h3>
                      <p className="text-white/90">For: {selectedPackage?.title}</p>
                    </div>
                    <button
                      onClick={() => !isSubmitting && setShowQuoteForm(false)}
                      className="text-white hover:text-gray-200 text-2xl"
                      disabled={isSubmitting}
                    >
                      <FiX />
                    </button>
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmitQuote} className="p-6">
                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                        <FiCheck className="text-white text-3xl" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-200 mb-4">Quote Request Sent Successfully!</h4>
                      <p className="text-gray-400 mb-6">
                        Thank you, {formData.name}! Your quote request has been sent to our team.
                      </p>
                      <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                        <p className="text-gray-300">
                          We will contact you within <span className="text-cyan-400">24 hours</span> at:
                        </p>
                        <p className="text-cyan-300 font-medium mt-2">{formData.email}</p>
                        <p className="text-sm text-gray-400 mt-4">
                          Check your email for confirmation. If you don't see it, please check spam folder.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowQuoteForm(false)}
                        className="px-6 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-gray-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            placeholder="+91 9876543210"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Company / Organization</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-gray-300 mb-2">Project Category</label>
                          <input
                            type="text"
                            value={formData.category}
                            readOnly
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Selected Package</label>
                          <input
                            type="text"
                            value={formData.package}
                            readOnly
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Expected Budget *</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          >
                            <option value="">Select Budget Range</option>
                            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                            <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                            <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                            <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                            <option value="₹10,00,000+">₹10,00,000+</option>
                            <option value="Custom Quote">Custom Quote Needed</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-300 mb-2">Project Timeline *</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          >
                            <option value="">Select Timeline</option>
                            <option value="1-2 Months">1-2 Months</option>
                            <option value="2-3 Months">2-3 Months</option>
                            <option value="3-6 Months">3-6 Months</option>
                            <option value="6+ Months">6+ Months</option>
                            <option value="Flexible">Flexible Timeline</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-300 mb-2">Project Requirements *</label>
                        <textarea
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="Please describe your project requirements in detail..."
                        />
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending Quote Request...
                            </>
                          ) : (
                            <>
                              <FiMail />
                              Send Quote Request
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowQuoteForm(false)}
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-gray-800 text-gray-300 font-medium rounded-lg border border-gray-700 hover:border-gray-600 hover:text-gray-200 transition-all disabled:opacity-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">Need a Custom Package?</h3>
              <p className="text-gray-400">
                All prices are indicative. Get a detailed custom quote based on your specific requirements.
              </p>
            </div>
            <button 
              onClick={() => {
                setSelectedPackage(null);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  category: '',
                  package: '',
                  budget: '',
                  timeline: '',
                  requirements: '',
                });
                setShowQuoteForm(true);
              }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all whitespace-nowrap"
            >
              Request Custom Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
