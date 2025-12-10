'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Heart, Palette, Mail, Instagram, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Navbar from './components/Navbar';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Generar posiciones fijas para evitar hydration error
  const floatingDots = Array.from({ length: 20 }, (_, i) => ({
    left: ((i * 37 + 23) % 100),
    top: ((i * 53 + 17) % 100),
  }));

  const finalSectionDots = Array.from({ length: 15 }, (_, i) => ({
    left: ((i * 41 + 31) % 100),
    top: ((i * 47 + 13) % 100),
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden">
      <Navbar />
      {/* Elementos flotantes de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 3) * 10 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Logo móvil - solo visible en móvil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden mb-8 flex justify-center"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl shadow-2xl overflow-hidden bg-white p-4">
              <img 
                src="/logo.png" 
                alt="Chiwaru Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left z-10"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-12 h-12 text-purple-600" />
              </motion.div>

              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, -2, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨ Chiwaru ✨
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Comisiones de arte digital personalizadas con mucho amor y color 💜
                <br />
                <span className="text-purple-600 font-semibold">¡Dale vida a tus ideas!</span>
              </motion.p>

              {/* Botones CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/commissions">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(147, 51, 234, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-base sm:text-lg overflow-hidden shadow-lg"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Ver Comisiones
                    </span>
                  </motion.button>
                </Link>

                <Link href="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-full font-bold text-base sm:text-lg shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Galería
                    </span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 px-4 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { number: "500+", label: "Comisiones" },
                  { number: "100%", label: "Amor" },
                  { number: "∞", label: "Creatividad" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Imagen/Ilustración Hero */}
            <motion.div
              style={{ y: y1 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={floatingAnimation}
                className="relative"
              >
                <div className="w-full h-[500px] rounded-[3rem] shadow-2xl relative overflow-hidden flex items-center justify-center bg-white">
                  {/* Logo / Imagen principal - CAMBIA "/logo.png" por la ruta de tu imagen */}
                  <img 
                    src="/logo.png" 
                    alt="Chiwaru Logo"
                    className="w-full h-full object-contain p-8"
                  />
                  
                  {/* Decoraciones */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${20 + (i % 3) * 25}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      {i % 2 === 0 ? (
                        <Heart className="w-full h-full text-purple-400/40" fill="currentColor" />
                      ) : (
                        <Sparkles className="w-full h-full text-pink-400/40" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Cards flotantes */}
                <motion.div
                  className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
                    <div>
                      <div className="font-bold text-sm">Chibi Art</div>
                      <div className="text-xs text-gray-500">Desde $8</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [5, -5, 5],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-8 h-8 text-purple-500" />
                    <div>
                      <div className="font-bold text-sm">Full Color</div>
                      <div className="text-xs text-gray-500">¡Wow! 🎨</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          style={{ y: y2 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            ¿Por qué elegir Chiwaru? 💜
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-12 h-12" />,
                title: "Estilo Único",
                description: "Arte personalizado que refleja tu personalidad",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Hecho con Amor",
                description: "Cada pieza es creada con dedicación y cariño especial",
                color: "from-pink-400 to-pink-600"
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Calidad Premium",
                description: "Alta resolución y detalles increíbles en cada obra",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0 opacity-20">
            {finalSectionDots.map((dot, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  left: `${dot.left}%`,
                  top: `${dot.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (i % 5) * 0.4,
                }}
              />
            ))}
          </div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 relative z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ¡Hagamos magia juntos! ✨
          </motion.h2>
          <p className="text-xl mb-8 relative z-10 opacity-90">
            ¿Listo para tener tu arte personalizado? ¡Contáctame ahora!
          </p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="https://www.instagram.com/_chiwaru_?igsh=MWIzc215dGs0bTd0Yw==" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-4 bg-pink-500 text-white rounded-full font-bold text-lg shadow-lg flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;