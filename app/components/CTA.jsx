'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiMail, FiCalendar, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const CTA = ({ onGetStarted }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleConsultation = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert('🎉 Thank you for your interest! Our tech expert will contact you within 24 hours to schedule your free consultation.\n\nWe will discuss:\n• Your project requirements\n• Timeline & budget\n• Technical solutions\n• Next steps');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleEmailUs = () => {
    window.location.href = 'mailto:contact.skyreti@gmail.com?subject=Project Inquiry - Skyreti&body=Hello Skyreti Team,%0D%0A%0D%0AI would like to discuss a project with your tech experts.%0D%0A%0D%0AProject Type: [Website/App/Digital Solution]%0D%0ABudget Range: %0D%0ATimeline: %0D%0A%0D%0ALooking forward to your response!';
  };

  const handleLiveChat = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const chatConfirmed = window.confirm('💬 Opening Live Chat...\n\nOur support team is available 24/7.\nClick OK to start chatting with our technical experts.');
      if (chatConfirmed) {
        alert('Connecting you to a live agent...\nAgent: "Hello! How can I help you with your project today?"');
      }
      setIsSubmitting(false);
    }, 800);
  };

  const handleEmailSupport = () => {
    window.location.href = 'mailto:contact.skyreti@gmail.com?subject=Support Request - Skyreti&body=Hello Support Team,%0D%0A%0D%0AI need assistance with: %0D%0A%0D%0A[Please describe your issue or question]%0D%0A%0D%0AThank you!';
  };

  const handleScheduleCall = () => {
    const calendarLink = 'https://calendly.com/skyreti/30min';
    const newWindow = window.open(calendarLink, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      alert('📅 Please allow pop-ups to open our scheduling calendar, or visit:\nhttps://calendly.com/skyreti/30min');
    }
  };

  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/917492973201?text=Hello%20Skyreti%20Team!%20I%20would%20like%20to%20discuss%20a%20project.%0AProject%20Type:%20%0ABudget:%20%0ATimeline:`;
    window.open(whatsappLink, '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+917492973201';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-300">Ready to </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Transform Your Digital Presence?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Let's build something amazing together. Get in touch with our tech experts to discuss your project.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              onClick={handleConsultation}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <FiMessageSquare className="mr-2 group-hover:scale-110 transition-transform" />
              {isSubmitting ? 'Connecting...' : 'Start Free Consultation'}
            </motion.button>
            
            <motion.button
              onClick={handleEmailUs}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800/50 text-gray-300 font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 flex items-center justify-center group"
            >
              <FiMail className="mr-2 group-hover:scale-110 transition-transform" />
              Email Us
            </motion.button>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Live Chat Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <FiMessageSquare className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2 text-center">Live Chat</h3>
              <p className="text-gray-400 text-center mb-6">Available 24/7</p>
              <button
                onClick={handleLiveChat}
                className="w-full py-3 text-cyan-400 hover:text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                Chat Now
              </button>
            </motion.div>

            {/* Email Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <FiMail className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2 text-center">Email Support</h3>
              <p className="text-gray-400 text-center mb-6 font-mono">contact.skyreti@gmail.com</p>
              <button
                onClick={handleEmailSupport}
                className="w-full py-3 text-cyan-400 hover:text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                Send Email
              </button>
            </motion.div>

            {/* Schedule Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <FiCalendar className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2 text-center">Schedule Call</h3>
              <p className="text-gray-400 text-center mb-6">Book a meeting</p>
              <button
                onClick={handleScheduleCall}
                className="w-full py-3 text-cyan-400 hover:text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                Book Now
              </button>
            </motion.div>
          </div>

          {/* Quick Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-400 mb-6 text-lg">Quick Connect Options:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp: +91 7492973201
              </motion.button>
              
              <motion.button
                onClick={handlePhoneCall}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                <FiPhone className="text-xl" />
                Call: +91 7492973201
              </motion.button>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                📧 Email: <span className="text-cyan-400 font-mono">contact.skyreti@gmail.com</span>
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                📞 Phone: <span className="text-cyan-400">+91 7492973201</span>
              </span>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                💬 WhatsApp: <span className="text-cyan-400">+91 7492973201</span>
              </span>
            </div>
          </motion.div>

          {/* Response Time Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-10 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/50"
          >
            <p className="text-gray-300">
              ⚡ <span className="font-semibold text-cyan-400">Guaranteed Response:</span> We respond within 2 hours during business hours (9 AM - 6 PM IST)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;