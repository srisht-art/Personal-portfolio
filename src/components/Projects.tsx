import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Code, Palette, Smartphone, Globe } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);



  const projects = [
    {
      id: 1,
      title: "Wallpaper Download App Design",
      category: "Mobile App Design",
      description: "A fast, aesthetic, and intuitive wallpaper browsing experience",
      image: "/wallpaper.jpeg",
      tags: ["Mobile UI", "Visual Design", "User Experience"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      problemStatement: "Existing wallpaper apps are cluttered and slow, making it hard to discover and preview wallpapers. The goal was to design a fast, aesthetic, and intuitive browsing experience.",
      designProcess: [
        "Analyzed competitor apps and UX flaws",
        "Built wireframes for browsing, preview, and download flow",
        "Designed vibrant, minimal high-fidelity UI",
        "Conducted usability tests and refined previews and favorites"
      ],
      keyFeatures: [
        "Organized categories and search filters",
        "Wallpaper preview on lock/home screen",
        "Favorites for saving wallpapers",
        "One-tap download and apply"
      ],
      wireframes: [
        "/Wallpaper Wireframe.jpeg",
        "/Wallpaper Wireframe.jpeg"
      ],
      finalUI: [
        "/wallpaper.jpeg",
        "/wallpaper.jpeg"
      ],
      results: "40% faster browsing with improved navigation. Preview feature increased user satisfaction. Positive usability feedback: 'clean' and 'easy to use.'"
    },
    {
      id: 2,
      title: "Perfume Web Page Design",
      category: "E-commerce Web Design",
      description: "Luxurious, visually immersive web page to showcase perfumes and drive sales",
      image: "/Perfum.jpeg",
      tags: ["E-commerce", "Luxury Brand", "Web Design"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      problemStatement: "The client needed a luxurious, visually immersive web page to showcase perfumes and drive sales.",
      designProcess: [
        "Studied luxury e-commerce design patterns",
        "Wireframed core sections: hero, collections, scent profiles",
        "Applied elegant typography, high-quality visuals, and refined layouts",
        "Tested navigation clarity and brand storytelling"
      ],
      keyFeatures: [
        "Hero banner with brand storytelling",
        "High-quality product images",
        "Scent descriptions with emotional appeal",
        "Responsive design across devices"
      ],
      wireframes: [
        "/Perfum Wireframe.jpeg",
        "/Perfum Wireframe.jpeg"
      ],
      finalUI: [
        "/Perfum.jpeg",
        "/Perfum.jpeg"
      ],
      results: "35% increase in time spent on site during testing. Improved navigation boosted browsing flow. Well-received by the client for brand alignment."
    },
    {
      id: 3,
      title: "Bus App & Payment Gateway Design",
      category: "Mobile App Design",
      description: "Seamless bus booking app with integrated payment solutions",
      image: "/Bus Booking .jpeg",
      tags: ["Transportation", "Payment Integration", "Mobile UX"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      problemStatement: "Commuters face issues with slow booking, lack of live updates, and limited payments. The goal was to create a seamless bus booking app with integrated payment solutions.",
      designProcess: [
        "Researched commuter needs and pain points",
        "Sketched booking, seat selection, and payment flows",
        "Created intuitive UI with route highlights and clear CTAs",
        "Tested booking flow and payment steps with users"
      ],
      keyFeatures: [
        "Real-time bus tracking with live maps",
        "Interactive seat reservation",
        "Multiple payment options (cards, UPI, wallets)",
        "Digital QR tickets for contactless boarding"
      ],
      wireframes: [
        "/Bus Booking Wireframe .jpeg",
        "/Bus Booking Wireframe .jpeg"
      ],
      finalUI: [
        "/Bus Booking .jpeg",
        "/Bus Booking .jpeg"
      ],
      results: "Booking time reduced from 5 minutes to <2 minutes. Payment gateway improved checkout speed by 40%. Testers praised clarity and convenience."
    },
    {
      id: 4,
      title: "Journal App UI/UX",
      category: "Mobile App Design",
      description: "Digital journaling tool with motivation and secure features",
      image: "/Journal.png",
      tags: ["Personal Productivity", "Security", "Wellness"],
      icon: <Palette className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      problemStatement: "People struggle to journal regularly due to lack of motivation, inspiration, and secure digital tools.",
      designProcess: [
        "Explored user needs for daily reflection",
        "Designed wireframes for entries, mood tracking, and progress",
        "Developed calming, minimal UI for focus",
        "Tested reminders, cloud sync, and export features"
      ],
      keyFeatures: [
        "Guided daily prompts and quick entry option",
        "Mood tracking with emotion tags",
        "Calendar view and progress visualization",
        "Cloud sync with encryption and biometric login",
        "Export to PDF for sharing"
      ],
      wireframes: [
        "/Journal Wireframe.jpeg",
        "/Journal Wireframe.jpeg"
      ],
      finalUI: [
        "/Journal.png",
        "/Journal.png"
      ],
      results: "Journaling consistency increased by 60% among testers. Users found patterns via mood tracking. Lightweight UI made journaling a quick 2-minute habit. Positive reviews for simplicity and security."
    }
  ];

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
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Showcasing my design journey through comprehensive case studies that demonstrate 
          problem-solving, user-centered design, and impactful results.
        </p>
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700"
            variants={cardVariants}
            whileHover="hover"
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
            onClick={() => setSelectedProject(project)}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            {/* Project Icon Badge */}
            <div className={`absolute top-6 right-6 z-10 p-3 rounded-2xl bg-gradient-to-r ${project.color} text-white shadow-lg transform rotate-12 transition-transform duration-300 group-hover:rotate-0`}>
              {project.icon}
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden h-64">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                variants={imageVariants}
                onError={(e) => {
                  console.error(`Failed to load project image: ${project.image}`);
                  e.currentTarget.src = '/placeholder-image.jpg'; // Fallback image
                }}
              />
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.span 
                    className="inline-block bg-white/95 text-black px-4 py-2 rounded-full text-sm font-semibold mb-2 backdrop-blur-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
              </motion.div>

              {/* View Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0,
                  scale: hoveredProject === project.id ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl">
                  <Eye size={20} />
                  View Case Study
                </div>
              </motion.div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <motion.h3 
                className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex}
                    className="bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.button 
                className="inline-flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>View Case Study</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>

            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;