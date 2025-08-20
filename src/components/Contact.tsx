import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, MessageCircle, Phone, Globe, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Formspree
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "shristi.khanna@example.com",
      link: "mailto:shristi.khanna@example.com",
      color: "purple",
      bgColor: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/shristi-khanna-3a1801250",
      link: "https://www.linkedin.com/in/shristi-khanna-3a1801250/",
      color: "blue",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/srisht-art",
      link: "https://github.com/srisht-art",
      color: "green",
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Lucknow, India",
      link: null,
      color: "pink",
      bgColor: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I'm always open to new opportunities, collaborations, and interesting conversations.
          Feel free to reach out!
        </p>
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-700/50"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Get in Touch</h3>
            </div>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-r ${method.bgColor} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {method.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-white">{method.title}</p>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target={method.link.startsWith('http') ? "_blank" : "_self"}
                        rel={method.link.startsWith('http') ? "noopener noreferrer" : ""}
                        className={`text-${method.color}-600 dark:text-${method.color}-400 hover:underline transition-colors duration-300`}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className={`text-${method.color}-600 dark:text-${method.color}-400`}>
                        {method.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Collaboration Card */}
          <motion.div 
            className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/30 dark:to-orange-900/30 rounded-3xl p-8 border border-pink-200/50 dark:border-pink-700/50"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl text-white">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Let's Collaborate!</h3>
            </div>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Whether you're looking for a UI/UX designer for your next project, want to discuss 
              design trends, or just want to connect, I'd love to hear from you. Let's create 
              something amazing together!
            </motion.p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
          variants={formVariants}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                key="success"
                className="text-center py-12"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Message Sent!
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Thank you for reaching out. I'll get back to you soon!
                </motion.p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                action="https://formspree.io/f/xovlbevp" 
                method="post" 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'subject' 
                        ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="What's this about?"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="Message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none ${
                      focusedField === 'message' 
                        ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/3 left-10 text-purple-400/20"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Phone size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-10 text-blue-400/20"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Globe size={40} />
      </motion.div>
    </section>
  );
};

export default Contact;