'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, X, ZoomIn } from 'lucide-react';
import Navbar from '@/app/components/Navbar.jsx';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // Aquí pondrás tus imágenes
  const images = [
    { src: "/gallery.webp", title: "Arte 1" },
    { src: "/gallery1.webp", title: "Arte 2" },
    { src: "/gallery2.webp", title: "Arte 3" },
    { src: "/gallery3.webp", title: "Arte 4" },
    { src: "/gallery4.webp", title: "Arte 5" },
    { src: "/gallery5.webp", title: "Arte 6" },
    { src: "/gallery6.webp", title: "Arte 7" },
    { src: "/gallery7.webp", title: "Arte 8" },
    { src: "/gallery8.webp", title: "Arte 9" },
    { src: "/gallery9.webp", title: "Arte 10" },
    { src: "/chiwa.gif", title: "Arte 11" },
  ];

  const floatingDots = Array.from({ length: 15 }, (_, i) => ({
    left: ((i * 37 + 23) % 100),
    top: ((i * 53 + 17) % 100),
  }));

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

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-16 h-16 text-purple-600" />
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              ✨ Mi Galería ✨
            </h1>
            <p className="text-xl text-gray-600">
              Explora mi mundo de color y creatividad 💜
            </p>
          </motion.div>

          {/* Galería Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                  {/* Placeholder para imagen */}
                  <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 relative">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                    >
                      <div className="text-white flex items-center gap-2">
                        <ZoomIn className="w-5 h-5" />
                        <span className="font-semibold">Ver más</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decoración de corazón flotante */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-white rounded-full"
                  style={{
                    left: `${(i * 11) % 100}%`,
                    top: `${(i * 17) % 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4 relative z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ¿Te gustó mi arte? 🎨
            </motion.h2>
            <p className="text-lg relative z-10 opacity-90 mb-6">
              ¡Ordena tu comisión personalizada ahora!
            </p>
            
            <motion.a
              href="https://vgen.co/chiwaru"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-lg relative z-10"
            >
              Ordenar Comisión →
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mt-4"
              >
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;