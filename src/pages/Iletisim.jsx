import React from 'react';

const Iletisim = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-6 border border-indigo-950">
        <h1 className="text-3xl font-bold bg-indigo-950 mb-6 text-center text-gray-300">İletişim</h1>
        
        {/* Google Maps */}
        <div className="mb-8">
          <iframe
            title="Hukuk Bürosu Konumu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.6409837815596!2d30.676073335843856!3d36.902181645809534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3917f1b60f479%3A0x3a571e5a124cb5b7!2sBay%C4%B1nd%C4%B1r%20Mahallesi%2C%20%C3%87ift%C3%A7io%C4%9Flu%20Ap.%2C%20Kat%3A1%2C%20322.%20Sk.%2C%20070940%20Muratpa%C5%9Fa%2FAntalya!5e0!3m2!1str!2str!4v1638927433481!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between border border-indigo-950">
          <div className="mb-8 md:mb-0 bg-gray-50 p-5 rounded shadow-xl">
            <h2 className="text-xl font-semibold bg-indigo-950 mb-4 text-gray-300 px-3 text-center">İletişim Bilgileri</h2>
            <p className="text-gray-700 text-center">
              Bayındır Mahallesi 322. Sokak <br />
              Çiftçioğlu Apartmanı Kat: 1 Daire: 5 <br />
              Muratpaşa/Antalya
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Telefon:</strong> <a href="tel:+905057462404" className="text-cyan-600 hover:underline">+90 505 746 24 04</a>
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:avgamzezorlu@gmail.com" className="text-cyan-600 hover:underline">avgamzezorlu@gmail.com</a>
            </p>
          </div>

          {/* Contact Actions */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50 p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold bg-indigo-950 mb-4 text-gray-300 rounded px-2 text-center">Bize Ulaşın</h2>
            <div className="space-y-4">
              <a
                href="https://api.whatsapp.com/send?phone=+905057462404&text=ZorluHukuk için Randevu talebi: "
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 text-center"
              >
                WhatsApp ile iletişime geç
              </a>
              <a
                href="tel:+905057462404"
                className="block py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 text-center"
              >
                Bizi Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
