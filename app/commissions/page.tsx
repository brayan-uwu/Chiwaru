'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, DollarSign } from 'lucide-react';
import Navbar from '@/app/components/Navbar.jsx';

const Commissions = () => {
  const commissions = [
    {
      title: "Chibis",
      image: "/chivis.png", // ← PON AQUÍ LA RUTA DE TU IMAGEN
      icon: "🎨",
      prices: [
        { type: "icon", price: "$8", clp: "5,000 clp" },
        { type: "fullbody", price: "$15", clp: "10,000 clp" }
      ],
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "SFW",
      image: "/reference.png", // ← PON AQUÍ LA RUTA DE TU IMAGEN
      icon: "✨",
      prices: [
        { type: "icon", price: "$10", clp: "8,000 clp" },
        { type: "halfbody", price: "$18", clp: "15,000 clp" },
        { type: "fullbody", price: "$25", clp: "20,000 clp" }
      ],
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "NSFW",
      image: "/nsfw.png", // ← PON AQUÍ LA RUTA DE TU IMAGEN
      note: "extra character 50%",
      icon: "💕",
      prices: [
        { type: "icon", price: "$15", clp: "12,000 clp" },
        { type: "halfbody", price: "$25", clp: "20,000 clp" },
        { type: "fullbody", price: "$30", clp: "28,000 clp" }
      ],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const floatingDots = Array.from({ length: 15 }, (_, i) => ({
    left: ((i * 37 + 23) % 100),
    top: ((i * 53 + 17) % 100),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 overflow-hidden">
      <Navbar />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8 relative">
      
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

      <div className="max-w-7xl mx-auto relative z-10">
        
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
            ✨ Comisiones ✨
          </h1>
          <p className="text-xl text-gray-600">
            ¡Elige tu comisión perfecta! 💜
          </p>
        </motion.div>

        {/* Tarjetas de Comisiones */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {commissions.map((commission, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                
                {/* Imagen Placeholder */}
                <div className={`h-80 bg-gradient-to-br ${commission.gradient} relative overflow-hidden flex items-center justify-center`}>
                  {/* Aquí irá tu imagen */}
                  {/* Imagen (usa `public/` como raíz, p. ej. `/chivis.png`) */}
                  {commission.image ? (
                    <img
                      src={commission.image}
                      alt={commission.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="text-8xl"
                      >
                        {commission.icon}
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Decoraciones flotantes */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${15 + (i % 2) * 30}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      {i % 2 === 0 ? (
                        <Heart className="w-6 h-6 text-white/30" fill="currentColor" />
                      ) : (
                        <Sparkles className="w-6 h-6 text-white/30" />
                      )}
                    </motion.div>
                  ))}

                  {/* Badge de título */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <h3 className="font-bold text-lg text-gray-800">{commission.title}</h3>
                  </div>

                  {/* Nota adicional */}
                  {commission.note && (
                    <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {commission.note}
                    </div>
                  )}
                </div>

                {/* Precios */}
                <div className="p-6 space-y-3">
                  {commission.prices.map((price, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 bg-purple-50 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${commission.gradient}`} />
                        <span className="font-semibold text-gray-700 capitalize">{price.type}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                          {price.price}
                        </div>
                        <div className="text-xs text-gray-500">{price.clp}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Botón de acción */}
                <div className="p-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${commission.gradient} text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2`}
                  >
                    <DollarSign className="w-5 h-5" />
                    Ordenar Ahora
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
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
            ¿Listo para tu comisión? 🎨
          </motion.h2>
          <p className="text-lg mb-6 relative z-10 opacity-90">
            ¡Contáctame y hagamos realidad tu idea!
          </p>
          
          <motion.a
            href="https://vgen.co/chiwaru"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-lg relative z-10"
          >
            Ver en VGen →
          </motion.a>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Commissions;