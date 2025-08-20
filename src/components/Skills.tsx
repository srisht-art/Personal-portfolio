import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Figma, Palette, Search, Zap, Users, BarChart, Layers, Smartphone, Code, Settings, TrendingUp, Award, Rocket, Target } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Figma size={24} />,
      color: "purple",
      description: "Mastery of industry-standard design software",
      skills: [
        { name: "Figma", level: 95, description: "Advanced prototyping and collaboration" },
        { name: "Sketch", level: 75, description: "UI/UX design and prototyping" },
        { name: "WordPress", level: 85, description: "Website development and customization" }
      ]
    },
    {
      title: "Research & Testing",
      icon: <Search size={24} />,
      color: "blue",
      description: "User research and validation methodologies",
      skills: [
        { name: "Usability Testing", level: 88, description: "User behavior analysis and feedback" },
        { name: "A/B Testing", level: 82, description: "Performance optimization and validation" },
        { name: "User Feedback Sessions", level: 90, description: "Qualitative user insights" }
      ]
    },
    {
      title: "Design Fundamentals",
      icon: <Palette size={24} />,
      color: "green",
      description: "Core principles of visual design",
      skills: [
        { name: "Typography", level: 85, description: "Type hierarchy and readability" },
        { name: "Color Theory", level: 90, description: "Color psychology and accessibility" },
        { name: "Layout Composition", level: 88, description: "Visual balance and hierarchy" }
      ]
    },
    {
      title: "Development Skills",
      icon: <Code size={24} />,
      color: "pink",
      description: "Technical implementation capabilities",
      skills: [
        { name: "HTML", level: 85, description: "Semantic markup and accessibility" },
        { name: "CSS", level: 88, description: "Responsive design and animations" },
        { name: "Basic JavaScript", level: 75, description: "Interactive functionality" },
        { name: "C", level: 80, description: "System programming fundamentals" },
        { name: "Python", level: 82, description: "Data analysis and automation" }
      ]
    },
    {
      title: "Project Management",
      icon: <Settings size={24} />,
      color: "indigo",
      description: "Agile methodologies and team collaboration",
      skills: [
        { name: "Agile", level: 85, description: "Iterative development approach" },
        { name: "Scrum", level: 80, description: "Sprint planning and execution" },
        { name: "Sprint Planning", level: 78, description: "Task breakdown and estimation" },
        { name: "Stand-Ups", level: 85, description: "Daily progress tracking" },
        { name: "Iterative Design", level: 88, description: "Continuous improvement process" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      pink: "from-pink-500 to-pink-600 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    };
    return colors[color as keyof typeof colors];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.2
      }
    })
  };

  const processVariants = {
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

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
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
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A comprehensive toolkit combining design thinking, technical skills, and user-centered methodologies 
          to create exceptional digital experiences.
        </p>
      </motion.div>

      {/* Category Navigation */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {skillCategories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === index
                ? `bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} text-white shadow-lg`
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.title}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className={`group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 ${
              activeCategory === index ? 'ring-2 ring-purple-500/50' : ''
            }`}
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredSkill(category.title)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className={`p-4 rounded-2xl ${getColorClasses(category.color).split(' ')[2]} ${getColorClasses(category.color).split(' ')[4]} shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            </div>
            
            {/* Skills */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex}
                  className="group/skill"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className={`h-3 rounded-full bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} shadow-sm`}
                      variants={skillBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  {/* Skill Description */}
                  <AnimatePresence>
                    {hoveredSkill === category.title && (
                      <motion.p 
                        className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Design Process Expertise */}
      <motion.div 
        className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-3xl p-8 border border-purple-200/50 dark:border-purple-700/50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Design Process Expertise
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Search size={24} />, title: "Research", description: "Understanding user needs and market requirements", color: "purple" },
            { icon: <Layers size={24} />, title: "Ideation", description: "Brainstorming and conceptualizing solutions", color: "blue" },
            { icon: <Smartphone size={24} />, title: "Prototyping", description: "Creating interactive mockups and wireframes", color: "green" },
            { icon: <BarChart size={24} />, title: "Testing", description: "Validating designs through user feedback", color: "pink" }
          ].map((process, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              variants={processVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`bg-${process.color}-200 dark:bg-${process.color}-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className={`text-${process.color}-600 dark:text-${process.color}-300`}>
                  {process.icon}
                </span>
              </motion.div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{process.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;