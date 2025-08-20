import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewingWireframes, setViewingWireframes] = useState(false);

  const currentImages = viewingWireframes ? project.wireframes : project.finalUI;
  


  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 py-8">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex justify-between items-center z-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{project.title}</h2>
              <p className="text-purple-600 font-medium">{project.category}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8">
            {/* Problem Statement */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Problem Statement</h3>
              <p className="text-gray-600 leading-relaxed bg-red-50 p-6 rounded-xl border-l-4 border-red-300">
                {project.problemStatement}
              </p>
            </div>

            {/* Design Process */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Design Process</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.designProcess.map((step: string, index: number) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-300">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature: string, index: number) => (
                  <div key={index} className="bg-green-50 p-4 rounded-xl border-l-4 border-green-300">
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {viewingWireframes ? 'Wireframes' : 'Final UI'}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewingWireframes(false)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      !viewingWireframes 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Final UI
                  </button>
                  <button
                    onClick={() => setViewingWireframes(true)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      viewingWireframes 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Wireframes
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={currentImages[currentImageIndex]} 
                    alt={`${viewingWireframes ? 'Wireframe' : 'Final UI'} ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${currentImages[currentImageIndex]}`);
                      e.currentTarget.src = '/placeholder-image.jpg'; // Fallback image
                    }}
                  />
                </div>
                
                {currentImages.length > 1 && (
                  <div className="flex justify-between absolute top-1/2 left-4 right-4 transform -translate-y-1/2">
                    <button
                      onClick={prevImage}
                      className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
                
                <div className="flex justify-center gap-2 mt-4">
                  {currentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Results & Impact</h3>
              <p className="text-lg text-gray-700 font-medium">{project.results}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;