import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Download, Code, Palette, Zap } from 'lucide-react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    rendererRef.current = renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    const geometryTypes = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 32, 32),
      new THREE.TorusGeometry(0.3, 0.1, 16, 100),
      new THREE.OctahedronGeometry(0.3)
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = geometryTypes[Math.floor(Math.random() * geometryTypes.length)];
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      shapes.push(mesh);
      scene.add(mesh);
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index % 3 + 1);
        shape.rotation.y += 0.01 * (index % 2 + 1);
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        style={{ zIndex: 3 }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 text-purple-400/30"
          variants={floatingVariants}
          animate="animate"
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          className="absolute top-32 right-20 text-blue-400/30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <Palette size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20 text-pink-400/30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Zap size={40} />
        </motion.div>

        {/* Badge */}
        <motion.div 
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-purple-200 dark:border-purple-700 px-8 py-4 rounded-full text-purple-700 dark:text-purple-300 font-medium shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            <Sparkles size={20} className="animate-pulse" />
            <span className="text-lg">UI/UX Designer & Cloud Computing Enthusiast</span>
          </div>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 
          className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
          variants={itemVariants}
        >
          <motion.span 
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Shristi
          </motion.span>
          <br />
          <motion.span 
            className="text-gray-900 dark:text-white drop-shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Khanna
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
          variants={itemVariants}
        >
          B.Tech CSE graduate passionate about crafting intuitive user experiences 
          and innovative design solutions that bridge technology and human needs.
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/25 font-semibold text-lg flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={24} className="group-hover:translate-x-1 transition-transform" />
            Explore My Work
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 px-12 py-6 rounded-2xl hover:bg-purple-600 hover:border-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl font-semibold text-lg flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={24} className="group-hover:translate-y-1 transition-transform" />
            Get In Touch
          </motion.button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="cursor-pointer"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown 
            size={32} 
            className="text-gray-500 dark:text-gray-400 mx-auto hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={scrollToAbout}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;