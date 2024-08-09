import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-white py-6 mt-12">
      <div className="container mx-auto md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
          {/* Office Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Ofisimiz</h3>
            <div className="flex flex-col space-y-1 text-sm md:text-base">
              <p>Bayındır Mahallesi 322. Sokak</p>
              <p>Çiftçioğlu Apartmanı Kat: 1 Daire: 5</p>
              <p>Muratpaşa, Antalya</p>
              <p>
                Telefon: <a href="tel:+905057462404" className="text-cyan-400 hover:underline">+90 505 935 56 95</a>
              </p>
              <p>
                Email: <a href="mailto:info@hukukburosu.com" className="text-cyan-400 hover:underline">info@hukukburosu.com</a>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold mb-2">Bizi Takip Edin</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/gamze-zorlu-926bb4282/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Legal Information */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Yasal Bilgiler</h3>
            <p className="text-sm md:text-base mb-1">&copy; {currentYear} Hukuk Bürosu. Tüm hakları saklıdır.</p>
            <a href="/privacy-policy" className="text-cyan-400 hover:underline text-sm md:text-base">Gizlilik Politikası</a> | 
            <a href="/terms-of-service" className="text-cyan-400 hover:underline text-sm md:text-base">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
