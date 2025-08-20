import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          My academic foundation in computer science and engineering, with specialized focus 
          on cloud computing, machine learning, and design thinking.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          
          <div className="p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-purple-100 p-4 rounded-xl">
                <GraduationCap size={32} className="text-purple-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-xl text-purple-600 font-semibold mb-1">
                      Computer Science & Engineering
                    </p>
                    <p className="text-lg text-gray-600">
                      Specialization: Cloud Computing & Machine Learning
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                      BBD University, Lucknow
                    </p>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="flex flex-col lg:items-end text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-medium">2023 - 2026 (Expected)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Lucknow, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-purple-600" />
                  Key Coursework
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <span className="font-medium text-gray-700">Data Structures & Algorithms</span>
                    <span className="text-purple-600 font-semibold">A</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Cloud Computing & Security</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">A</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Machine Learning & Artificial Intelligence</span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">A</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Web & App Development</span>
                    <span className="text-pink-600 dark:text-pink-400 font-semibold">A+</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award size={20} className="text-purple-600" />
                  Academic & Leadership Achievements
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border-l-4 border-purple-400">
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-1">Management Head</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">BBDU Entrepreneurship & Incubation Center (BBDEIC) - Led event planning, team coordination, and cross-functional collaboration</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-1">Technical Team Member</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">BBDU Community - Handled design, technical setup, and digital engagement for events</p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-green-50 to-pink-50 dark:from-green-900/30 dark:to-pink-900/30 rounded-lg border-l-4 border-green-400">
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-1">Research Paper</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      <strong>"Quantum Cryptography: Securing Data in the Era of Quantum Computing"</strong>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Comprehensive research exploring quantum key distribution protocols, advanced security mechanisms, 
                      and future applications in cybersecurity. The paper investigates how quantum computing will 
                      revolutionize data protection and encryption methodologies.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Quantum Computing</span>
                      <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">Cryptography</span>
                      <span className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">Security Protocols</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Developed */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Skills Developed Through Education</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h5 className="font-bold text-gray-800 dark:text-white mb-2">Technical Skills</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Figma, Adobe XD, Miro, HTML, CSS, JavaScript, usability principles, accessibility, typography, cloud deployment, encryption, ML basics, problem-solving with DSA.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <h5 className="font-bold text-gray-800 dark:text-white mb-2">Soft Skills</h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Leadership, team collaboration, research writing, adaptability, public speaking, user-centered thinking.
                  </p>
                </div>
              </div>
            </div>

            {/* University Highlights */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">University Highlights</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Leadership Role</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Management Head at BBDEIC</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Research Work</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Quantum Cryptography Paper</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">Community Impact</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Technical Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;