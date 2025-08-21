import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, MessageCircle, Phone, Globe, Heart } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      {/* Heading */}
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Get in Touch</h3>
            </div>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.bgColor} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 dark:text-white">{method.title}</p>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target={method.link.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`text-${method.color}-600 dark:text-${method.color}-400 hover:underline`}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className={`text-${method.color}-600 dark:text-${method.color}-400`}>{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Form with Formspree */}
        <motion.div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                key="success"
                className="text-center py-12"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form 
                action="https://formspree.io/f/xovlbevp" 
                method="POST"
                onSubmit={() => setIsSubmitted(true)}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border rounded-xl border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border rounded-xl border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 border rounded-xl border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-xl border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
