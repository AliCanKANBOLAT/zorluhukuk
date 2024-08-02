import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import scaleOfJustice from '../../public/scale_of_justice.svg';

const ParallaxSection = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = document.getElementById('services')?.offsetTop || 0;

    // Ekranın biraz üzerinde görünmesi için ayar yapıyoruz
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
          backgroundImage: `url(${scaleOfJustice})`,
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
          className="text-4xl font-bold text-cyan-800 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Hoşgeldiniz
        </motion.h1>
        <motion.p
          className="text-lg text-cyan-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Profesyonel hukuk danışmanlığı ve temsil hizmetleri sunuyoruz.
        </motion.p>
        <a
          href="#services"
          className="py-3 px-6 bg-cyan-800 text-white font-semibold rounded-md shadow-md hover:bg-cyan-900 transition-colors duration-300"
        >
          Hizmetlerimizi Keşfedin
        </a>
      </div>
    </div>
  );
};

export default ParallaxSection;
