'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, DollarSign, Sparkles, Heart, Send } from 'lucide-react';
import Navbar from '@/app/components/Navbar.jsx';

const Contact = () => {
  const contactLinks = [
    {
      name: 'VGen',
      icon: <Sparkles className="w-6 h-6" />,
      url: 'https://vgen.co/chiwaru',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
      description: '¡Ordena tu comisión aquí!'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/_chiwaru_?igsh=MWIzc215dGs0bTd0Yw==',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      description: '¡Sígueme para ver mi arte!'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/share/18XNhMt8iD/',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
      description: 'Conéctate conmigo'
    },
    {
      name: 'PayPal',
      icon: <DollarSign className="w-6 h-6" />,
      url: 'https://www.paypal.me/ClownyDayi',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-gradient-to-r from-blue-400 to-blue-500',
      description: 'Pagos seguros'
    }
  ];

  const floatingDots = Array.from({ length: 20 }, (_, i) => ({
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
        <div className="max-w-4xl mx-auto">
          
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
              <Mail className="w-16 h-16 text-purple-600" />
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              ✨ ¡Hablemos! ✨
            </h1>
            <p className="text-xl text-gray-600">
              ¿Tienes una idea en mente? ¡Contáctame y hagámosla realidad! 💜
            </p>
          </motion.div>

          {/* Tarjeta Principal de Contacto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-2xl mb-8 relative overflow-hidden"
          >
            {/* Decoraciones */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
                ¿Listo para tu comisión?
              </h2>
              <p className="text-center text-gray-600 mb-6 leading-relaxed">
                Si quieres una comisión personalizada, sígueme en mis redes sociales 
                y envíame un mensaje directo con tu idea. ¡Estoy emocionada de trabajar contigo! 🎨
              </p>

              {/* Pasos */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { step: '1', text: 'Sígueme en redes', icon: <Heart /> },
                  { step: '2', text: 'Envía tu idea', icon: <Send /> },
                  { step: '3', text: '¡Arte mágico!', icon: <Sparkles /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center p-4 bg-purple-50 rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">{item.step}</div>
                    <div className="text-sm text-gray-600">{item.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links de Contacto */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group">
                  {/* Efecto hover */}
                  <motion.div
                    className={`absolute inset-0 ${link.bgColor} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4 mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {link.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {link.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-purple-600 font-semibold text-sm">
                      <span>Visitar</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
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
              ¡No seas tímido! 💕
            </motion.h2>
            <p className="text-lg relative z-10 opacity-90 mb-4">
              Cada comisión es única y especial. ¡Estoy aquí para ayudarte!
            </p>
            <div className="flex justify-center gap-2 relative z-10">
              <Sparkles className="w-6 h-6" />
              <Heart className="w-6 h-6" fill="currentColor" />
              <Sparkles className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;