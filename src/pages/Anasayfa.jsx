import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import ParallaxSection from '../components/Parallax';


// Hizmetler dizisi
const services = [
  { title: "Ticaret ve Şirketler Hukuku", description: "Ticaret ve şirketler hukuku alanında danışmanlık ve temsil hizmetleri sunuyoruz." },
  { title: "Kişisel Verilerin Korunması Hukuku", description: "Kişisel verilerin korunması ve güvenliği konusunda hukuki destek sağlıyoruz." },
  { title: "Aile ve Miras Hukuku", description: "Aile ve miras hukuku ile ilgili her türlü hukuki sorunlarda yanınızdayız." },
  { title: "İş Hukuku", description: "İş hukuku konusunda işçi ve işveren haklarını koruma ve savunma hizmetleri sunuyoruz." },
  { title: "Dava ve Uyuşmazlık Çözümü", description: "Dava süreçlerinin yönetimi ve uyuşmazlıkların çözümü konusunda uzmanlaşmış avukatlarımızla hizmetinizdeyiz." },
  { title: "Ceza Hukuku", description: "Ceza hukuku alanında profesyonel temsil ve danışmanlık sağlıyoruz." },
  { title: "Vergi Hukuku", description: "Vergi hukuku konularında danışmanlık ve temsil hizmetleri sunuyoruz." },
  { title: "Anayasa Mahkemesi Bireysel Başvuru", description: "Anayasa Mahkemesi'ne bireysel başvurular konusunda rehberlik yapıyoruz." },
  { title: "İnsan Hakları Avrupa Mahkemesi Bireysel Başvuru", description: "Avrupa İnsan Hakları Mahkemesi'ne bireysel başvurular için danışmanlık sağlıyoruz." },
  { title: "İdare Hukuku", description: "İdare hukuku kapsamında devlet ve vatandaş arasındaki ilişkilerde hukuki destek sunuyoruz." },
  { title: "Arabuluculuk", description: "Uyuşmazlıkların çözümünde arabuluculuk hizmetleri sunuyoruz." },
  { title: "Yatırım Süreçleri, Birleşme & Devralmalar", description: "Yatırım süreçleri, birleşme ve devralma işlemlerinde profesyonel danışmanlık hizmetleri sağlıyoruz." },
  { title: "Gayrimenkul Hukuku", description: "Gayrimenkul alım-satım ve kira ilişkileri konusunda hukuki destek sunuyoruz." },
  { title: "Tahkim", description: "Tahkim süreçlerinde danışmanlık ve temsil hizmetleri sunuyoruz." },
  { title: "Ceza İnfaz Hukuku", description: "Ceza infaz hukuku alanında hukuki destek ve danışmanlık sağlıyoruz." }
];

// Slider ayarları
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  swipe: true,
  customPaging: () => <div className="slick-dot"></div>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Anasayfa = () => {
  const sliderRef = useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {/* Main Content */}
      <ParallaxSection />

      {/* Services Carousel */}
      <div id="services" className="w-full bg-white p-24 sm:p-12 mt-12 rounded-lg shadow-lg relative overflow-hidden">
        <h2 className="text-2xl font-bold bg-indigo-950 mb-6 text-gray-300 text-center">
          Faaliyet Alanlarımız
        </h2>
        <Slider ref={sliderRef} {...carouselSettings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-gray-50 text-gray-300 p-6 rounded-xl
               hover:shadow-xl transition-shadow duration-300 
               transform hover:scale-105"
              style={{ height: '300px' }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0,0,0,0.3)" }}
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4 }} 
            >
              <h3 className="text-xl font-semibold bg-indigo-950 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </Slider>

        <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4 pb-4">
          <button
            onClick={goToPrev}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300 hover:scale-105"
          >
            Önceki
          </button>
          <button
            onClick={goToNext}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300 hover:scale-105"
          >
            Sonraki
          </button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="w-full bg-gray-100 p-6 sm:p-12 mt-12 rounded-lg shadow-lg relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/scale_of_justice.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.1 }} 
          transition={{ duration: 1 }} 
        ></motion.div>

        <motion.div
          className="relative z-10 text-center p-4 sm:p-8"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1 }}    
        >
          <h2 className="text-2xl font-bold bg-indigo-950 mb-6">
            Bize Ulaşın
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            İletişim bilgileri ve form için aşağıdaki bağlantıları kullanabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://api.whatsapp.com/send?phone=+905057462404&text=ZorluHukuk%20için%20Randevu%20talebi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-colors duration-300"
            >
              WhatsApp ile İletişim
            </a>
            <a
              href="tel:+905057462404"
              className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Bizi Arayın
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Anasayfa;
