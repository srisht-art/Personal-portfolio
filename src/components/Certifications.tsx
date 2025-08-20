import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Database, Brain, Cloud, Zap, Palette, Code } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "SQL Certification Course: Basics to Advance",
      issuer: "Professional Training Institute",
      date: "March 2024",
      credentialId: "SQL-ADV-SK-789",
      description: "Comprehensive SQL training covering database design, complex queries, optimization, and advanced database management techniques.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Analysis"],
      color: "blue",
      status: "Verified",
      icon: <Database size={24} />,
      link: "#"
    },
    {
      title: "Machine Learning with Python",
      issuer: "Python Institute",
      date: "February 2024",
      credentialId: "ML-PY-SK-456",
      description: "Hands-on machine learning implementation using Python, covering algorithms, data preprocessing, and model evaluation.",
      skills: ["Python", "Machine Learning", "Data Science", "Model Training"],
      color: "green",
      status: "Verified",
      icon: <Brain size={24} />,
      link: "#"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Tech Academy",
      date: "January 2024",
      credentialId: "ML-INTRO-SK-123",
      description: "Foundational machine learning concepts, algorithms, and practical applications in real-world scenarios.",
      skills: ["ML Fundamentals", "Algorithms", "Data Analysis", "Problem Solving"],
      color: "purple",
      status: "Verified",
      icon: <Brain size={24} />,
      link: "#"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "AI Institute",
      date: "December 2023",
      credentialId: "GEN-AI-SK-321",
      description: "Comprehensive overview of generative AI technologies, including GPT models, image generation, and ethical AI considerations.",
      skills: ["Generative AI", "GPT Models", "AI Ethics", "Prompt Engineering"],
      color: "pink",
      status: "Verified",
      icon: <Zap size={24} />,
      link: "#"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Cloud Academy",
      date: "November 2023",
      credentialId: "CLOUD-FUND-SK-654",
      description: "Essential cloud computing concepts, deployment models, and service architectures across major cloud platforms.",
      skills: ["Cloud Architecture", "Deployment Models", "Security", "Scalability"],
      color: "indigo",
      status: "Verified",
      icon: <Cloud size={24} />,
      link: "#"
    },
    {
      title: "Prompt Engineering Bootcamp",
      issuer: "AI Training Hub",
      date: "October 2023",
      credentialId: "PE-BOOT-SK-987",
      description: "Advanced techniques for crafting effective prompts for AI systems, optimization strategies, and best practices.",
      skills: ["Prompt Engineering", "AI Optimization", "Creative Writing", "System Design"],
      color: "orange",
      status: "Verified",
      icon: <Code size={24} />,
      link: "#"
    },
    {
      title: "UI/UX Design Training",
      issuer: "Design Institute",
      date: "September 2023",
      credentialId: "UIUX-TRAIN-SK-555",
      description: "Comprehensive UI/UX design training covering design principles, user research, prototyping, and design systems.",
      skills: ["UI Design", "UX Research", "Design Systems", "User Testing"],
      color: "teal",
      status: "Verified",
      icon: <Palette size={24} />,
      link: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-300 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      orange: "border-orange-300 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      purple: "border-purple-300 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      green: "border-green-300 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      pink: "border-pink-300 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
      indigo: "border-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
      teal: "border-teal-300 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-800",
      orange: "bg-orange-100 dark:bg-orange-800",
      purple: "bg-purple-100 dark:bg-purple-800",
      green: "bg-green-100 dark:bg-green-800",
      pink: "bg-pink-100 dark:bg-pink-800",
      indigo: "bg-indigo-100 dark:bg-indigo-800",
      teal: "bg-teal-100 dark:bg-teal-800"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600 dark:text-blue-400",
      orange: "text-orange-600 dark:text-orange-400",
      purple: "text-purple-600 dark:text-purple-400",
      green: "text-green-600 dark:text-green-400",
      pink: "text-pink-600 dark:text-pink-400",
      indigo: "text-indigo-600 dark:text-indigo-400",
      teal: "text-teal-600 dark:text-teal-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-30 animate-pulse delay-2000"></div>

      <div className="text-center mb-16 relative">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Continuous learning through professional certifications that enhance my expertise 
          in design, technology, and user experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`h-2 bg-gradient-to-r from-${cert.color}-400 to-${cert.color}-500`}></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${getIconBgColor(cert.color)} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={getIconColor(cert.color)}>
                      {cert.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle size={14} className="text-green-500" />
                        <span className="text-green-600 dark:text-green-400 font-medium">{cert.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors group-hover:scale-110">
                  <ExternalLink size={20} className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" />
                </button>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Credential ID: {cert.credentialId}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border-2 ${getColorClasses(cert.color)} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Stats with Animation */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-8 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-700 dark:to-blue-700 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-700 dark:to-purple-700 rounded-full opacity-20 animate-pulse"></div>
        
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white relative z-10">Certification Overview</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">7</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Professional Certificates</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">5</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Technology Domains</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Verification Rate</p>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">2024</div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Latest Achievement</p>
          </div>
        </div>
        
        <div className="mt-8 text-center relative z-10">
          <p className="text-gray-600 dark:text-gray-300 italic">
            "Committed to lifelong learning and staying current with industry trends and best practices."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;