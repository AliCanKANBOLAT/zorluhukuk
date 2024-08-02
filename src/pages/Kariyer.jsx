import React from 'react';
import { motion } from 'framer-motion';
import scaleOfJustice from '../../public/scale_of_justice.svg'; // SVG dosyasını import edin

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}

const Kariyer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-6 relative transform transition-transform duration-500 hover:scale-105">
        <div className="flex flex-col lg:flex-row">
          {/* Open Positions */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <h5 className="text-2xl font-bold text-cyan-800 mb-4">Açık Pozisyonlar</h5>
            <div className="space-y-4">
              {["Avukat", "Stajyer Avukat", "Yaz Stajı", "İdari Personel"].map((position, index) => (
                <motion.li
                  key={index}
                  className="block p-3 bg-cyan-100 rounded-md shadow hover:bg-cyan-200 transition duration-300 text-cyan-800 font-semibold"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {position}
                </motion.li>
              ))}
            </div>
            <div className="mt-6 text-center text-gray-600 flex flex-col space-y-4">
              <motion.a
                href="https://api.whatsapp.com/send?phone=+905057462404&text=ZorluHukuk açık pozsiyon başvurusu  "
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                WhatsApp ile iletişime geç
              </motion.a>
              <motion.a
                href="tel:+905057462404"
                className="py-3 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                Bizi Arayın
              </motion.a>
            </div>
          </div>

          {/* 3D Background with Justice Scale */}
          <div className="w-full lg:w-1/2 p-4 flex items-center justify-center">
            <div className="w-full h-64 lg:h-full bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
              <img src={scaleOfJustice} alt="Adalet Terazisi" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kariyer;
