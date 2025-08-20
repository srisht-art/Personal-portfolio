import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cloud, Palette, Users, Award, Rocket, Target, Heart, Zap, Lightbulb } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: "Journey", icon: <Rocket size={20} /> },
    { id: 1, title: "Values", icon: <Heart size={20} /> },
    { id: 2, title: "Facts", icon: <Award size={20} /> },
    { id: 3, title: "Philosophy", icon: <Lightbulb size={20} /> }
  ];

  const tabSpecificImageVariants = {
    0: { // Journey
      scale: 1,
      rotateY: 0,
      filter: "brightness(1) saturate(1.1)",
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    1: { // Values
      scale: 1.02,
      rotateY: 2,
      filter: "brightness(1.05) saturate(1.2)",
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    2: { // Facts
      scale: 0.98,
      rotateY: -1,
      filter: "brightness(0.95) saturate(0.9)",
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    3: { // Philosophy
      scale: 1.01,
      rotateY: 1,
      filter: "brightness(1.02) saturate(1.15)",
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const [imageAnimation, setImageAnimation] = useState(tabSpecificImageVariants[0]);

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

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateY: 15,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn" as const
      }
    }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Update image animation when tab changes
  useEffect(() => {
    setImageAnimation(tabSpecificImageVariants[activeTab as keyof typeof tabSpecificImageVariants]);
  }, [activeTab]);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate B.Tech Computer Science Engineering graduate with a specialization in Cloud Computing 
          and Machine Learning, combined with 1-2 years of hands-on UI/UX design experience.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.icon}
            {tab.title}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-3 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Profile Picture Section - Left Column */}
        <motion.div 
          className="lg:col-span-1 flex justify-center lg:justify-start"
          variants={imageContainerVariants}
        >
          <div className="relative">
                         {/* Main Profile Picture */}
             <motion.div
               className="relative w-80 h-80 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-2xl"
               key={activeTab} // This triggers re-animation when tab changes
               initial={{ opacity: 0, scale: 0.8, rotateY: -15, y: 20 }}
               animate={{ ...imageAnimation, opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" as const }}
             >
                             <img
                 src="/Me.jpeg"
                 alt="Shristi Khanna - UI/UX Designer & B.Tech Graduate"
                 className="w-full h-full object-cover"
                 style={{
                   background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                   objectPosition: 'center top'
                 }}
               />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Tab-specific Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Floating Elements Around Image */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Palette size={16} />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [5, -5, 5],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Code2 size={16} />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Target size={12} />
            </motion.div>

            {/* Name and Title */}
            <motion.div 
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Shristi Khanna
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                UI/UX Designer & B.Tech Graduate
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section - Right Columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Journey Card */}
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="journey"
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Journey</h3>
                </div>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                  variants={contentVariants}
                >
                  My journey in design began with a curiosity about how technology can be made more human-centered. 
                  Through my academic pursuits in CSE and practical experience in UI/UX design, I've developed 
                  a unique perspective that combines technical expertise with creative problem-solving.
                </motion.p>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  variants={contentVariants}
                >
                  I have a curious mind that constantly explores new design trends, tools, and human–computer 
                  interaction patterns, and I'm an absolute learner who thrives on turning feedback into refined, 
                  impactful designs.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Values Card */}
          <AnimatePresence mode="wait">
            {activeTab === 1 && (
              <motion.div
                key="values"
                className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-700/50"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">What Drives Me</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Palette size={20} />, title: "Creative Problem Solving", description: "Finding innovative solutions through design thinking", color: "purple" },
                    { icon: <Users size={20} />, title: "User-Centered Design", description: "Putting user needs at the heart of every design", color: "blue" },
                    { icon: <Code2 size={20} />, title: "Technical Integration", description: "Bridging design and development seamlessly", color: "green" },
                    { icon: <Cloud size={20} />, title: "Future-Forward Thinking", description: "Embracing emerging technologies and trends", color: "pink" }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 group"
                      variants={contentVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`bg-${value.color}-200 dark:bg-${value.color}-700 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`text-${value.color}-600 dark:text-${value.color}-300`}>
                          {value.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{value.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Facts Card */}
          <AnimatePresence mode="wait">
            {activeTab === 2 && (
              <motion.div
                key="facts"
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Quick Facts</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Experience", value: "1-2 Years in UI/UX" },
                    { label: "Education", value: "B.Tech CSE" },
                    { label: "Specialization", value: "Cloud Computing & ML" },
                    { label: "Projects Completed", value: "15+" },
                    { label: "Internships", value: "4 Companies" }
                  ].map((fact, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      variants={contentVariants}
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">{fact.label}</span>
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">{fact.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Design Philosophy Card */}
          <AnimatePresence mode="wait">
            {activeTab === 3 && (
              <motion.div
                key="philosophy"
                className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 rounded-3xl p-8 border border-pink-200/50 dark:border-pink-700/50"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-white">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Design Philosophy</h3>
                </div>
                <motion.blockquote 
                  className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                  variants={contentVariants}
                >
                  "Good design is not just what looks good. It's what works well, feels intuitive, 
                  and creates a meaningful connection between the user and the product."
                </motion.blockquote>
                <motion.p 
                  className="text-right text-purple-600 dark:text-purple-400 font-medium"
                  variants={contentVariants}
                >
                  - My Design Mantra
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 text-purple-400/20"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-10 text-blue-400/20"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Target size={40} />
      </motion.div>
    </section>
  );
};

export default About;