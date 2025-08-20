import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "CMP Techsseract",
      role: "Web Design Intern",
      duration: "May 2025 – Jun 2025",
      location: "Remote",
      description: "Focused on developing responsive website layouts and creating visual assets to enhance user experience and brand consistency.",
      achievements: [
        "Developed responsive website layouts aligned with brand guidelines",
        "Designed icons, banners, and graphics to enhance visual appeal",
        "Optimized design assets for faster load times and better user experience"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Responsive Design", "Brand Guidelines"],
      color: "purple"
    },
    {
      company: "Krypton",
      role: "UI/UX Design Intern",
      duration: "Jul 2025 – Sep 2025",
      location: "Remote",
      description: "Specialized in designing NFT marketplace UI components with modern, minimal styling and cross-platform compatibility.",
      achievements: [
        "Designed NFT marketplace UI components with modern, minimal styling",
        "Created wireframes, prototypes, and asset libraries for developers",
        "Ensured design compatibility across multiple screen sizes"
      ],
      technologies: ["Figma", "Wireframing", "Prototyping", "Asset Libraries"],
      color: "blue"
    },
    {
      company: "Votastra",
      role: "Product Design Intern",
      duration: "Nov 2024 – Dec 2024",
      location: "Hybrid",
      description: "Designed mobile app UI screens with pastel-themed color palettes and collaborated with the product team to improve navigation flow.",
      achievements: [
        "Designed and developed 10+ mobile app UI screens, including 'Report Us & User,' 'Feed,' 'Language,' and 'Calendar' features",
        "Applied pastel-themed color palettes and modern typography for a consistent, appealing experience",
        "Collaborated with the product team to improve navigation flow"
      ],
      technologies: ["Figma", "Mobile UI Design", "Color Theory", "Navigation Design"],
      color: "green"
    },
    {
      company: "MyDailyWork",
      role: "UI/UX Design Intern",
      duration: "Nov 2024 – Dec 2024",
      location: "Remote",
      description: "Designed responsive web interfaces with focus on usability and accessibility, conducting user feedback sessions to refine prototypes.",
      achievements: [
        "Designed responsive web interfaces using Figma, focusing on usability and accessibility",
        "Conducted user feedback sessions to refine prototypes and improve interaction flow",
        "Prepared design handoff files for pixel-perfect implementation"
      ],
      technologies: ["Figma", "Responsive Design", "User Feedback", "Design Handoff"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-300 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      blue: "border-blue-300 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      green: "border-green-300 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      pink: "border-pink-300 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Internship Experience
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          My professional journey through diverse internship experiences, each contributing 
          to my growth as a designer and problem solver.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 dark:from-purple-300 dark:to-blue-300 hidden lg:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-purple-400 dark:border-purple-300 rounded-full hidden lg:block"></div>
              
              <div className="lg:ml-20">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className={`h-2 ${getColorClasses(exp.color).split(' ')[1]}`}></div>
                  
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
                        <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">{exp.company}</p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-sm font-medium border-2 ${getColorClasses(exp.color)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">Experience Summary</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Companies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Months Experience</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">UI Screens Designed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;