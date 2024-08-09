import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const ParallaxSection = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = document.getElementById('services')?.offsetTop || 0;

    if (scrollPosition >= sectionPosition - window.innerHeight / 1.2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 });
  }, [isVisible, controls]);

  return (
    <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/scale_of_justice.svg')`, // Corrected URL
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
        }}
        initial={{ y: 0 }}
        animate={{ y: ['-5%', '5%', '-5%'] }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      ></motion.div>
      <div className="relative z-10 p-4 text-center">
        <motion.h1
          className="text-4xl text-gray-300 font-bold rounded-xl bg-indigo-950 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Hoşgeldiniz
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 bg-indigo-950 mb-8 p-5 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Profesyonel hukuk danışmanlığı ve temsil hizmetleri sunuyoruz.
        </motion.p>
        <a
          href="#services"
          className="py-3 px-6 bg-indigo-950 text-white font-semibold rounded-md shadow-md hover:bg-cyan-900 transition-colors duration-300"
        >
          Faaliyet Alanlarımızı Keşfedin
        </a>
      </div>
    </div>
  );
};

export default ParallaxSection;
