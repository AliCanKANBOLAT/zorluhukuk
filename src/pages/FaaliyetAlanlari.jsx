import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { 
    id: 1, 
    name: "Ticaret ve Şirketler Hukuku", 
    description: "Ticaret ve Şirketler Hukuku alanında uzman ekibimiz, şirketinizin hukuki ihtiyaçlarını en yüksek standartlarda karşılar. Şirket kuruluşları, birleşme ve devralmalar, ortaklık sözleşmeleri ve ticari uyuşmazlıkların çözümü konusunda profesyonel destek sağlıyoruz. Amacımız, ticari faaliyetlerinizi güvence altına almak ve büyüme hedeflerinize ulaşmanızda yanınızda olmaktır."
  },
  { 
    id: 2, 
    name: "Kişisel Verilerin Korunması Hukuku", 
    description: "Kişisel Verilerin Korunması Hukuku alanında uzman kadromuz, GDPR ve KVKK gibi düzenlemelere uyum sağlamanız için gerekli danışmanlık hizmetlerini sunar. Kişisel veri yönetimi, veri işleme politikaları, veri ihlalleri ve denetim süreçleri gibi konularda profesyonel destek sağlıyoruz. Amacımız, verilerinizi koruyarak itibarınızı ve yasal uyumunuzu güvence altına almaktır."
  },
  { 
    id: 3, 
    name: "Aile ve Miras Hukuku", 
    description: "Aile ve Miras Hukuku alanında uzman avukatlarımız, boşanma, velayet, nafaka, miras paylaşımı gibi hassas konularda müvekkillerimize destek olmaktadır. Duyarlılık ve profesyonellik çerçevesinde hareket eden ekibimiz, aile hukuku davalarında haklarınızı korumanız ve en iyi sonucu almanız için yanınızdadır."
  },
  { 
    id: 4, 
    name: "İş Hukuku", 
    description: "İş Hukuku alanında uzman ekibimiz, işçi ve işveren arasındaki uyuşmazlıkların çözümünde, iş sözleşmeleri, tazminat davaları, işe iade ve iş güvenliği konularında profesyonel hizmet sunmaktadır. İş hukuku alanında karşılaştığınız her türlü sorunda yanınızdayız."
  },
  { 
    id: 5, 
    name: "Dava ve Uyuşmazlık Çözümü", 
    description: "Dava ve Uyuşmazlık Çözümü konusunda uzman ekibimiz, hukuki anlaşmazlıklarınızın en etkili ve hızlı şekilde çözülmesini sağlamak için profesyonel hizmet sunar. Alternatif uyuşmazlık çözüm yöntemleri, arabuluculuk ve tahkim süreçlerinde de yanınızdayız."
  },
  { 
    id: 6, 
    name: "Ceza Hukuku", 
    description: "Ceza Hukuku alanında uzman avukatlarımız, suç isnatlarına karşı müvekkillerimize en iyi savunmayı sunmakta, ceza davalarında haklarınızı korumakta ve adil yargılanma sürecinde yanınızda olmaktadır. Amacımız, adaletin sağlanması ve haklarınızın korunmasıdır."
  },
  { 
    id: 7, 
    name: "Vergi Hukuku", 
    description: "Vergi Hukuku alanında uzman ekibimiz, vergi planlaması, vergi uyuşmazlıkları ve vergi cezalarına karşı savunma konularında profesyonel danışmanlık hizmeti sunar. Vergi hukuku ile ilgili her türlü sorunda yanınızdayız."
  },
  { 
    id: 8, 
    name: "Anayasa Mahkemesi Bireysel Başvuru", 
    description: "Anayasa Mahkemesi Bireysel Başvuru alanında uzman ekibimiz, temel hak ve özgürlüklerinizin ihlal edildiği durumlarda bireysel başvuru yapma süreçlerinde profesyonel destek sunar. Haklarınızın korunması ve adaletin sağlanması için yanınızdayız."
  },
  { 
    id: 9, 
    name: "İnsan Hakları Avrupa Mahkemesi Bireysel Başvuru", 
    description: "İnsan Hakları Avrupa Mahkemesi Bireysel Başvuru alanında uzman ekibimiz, insan hakları ihlallerine karşı uluslararası düzeyde hak arama sürecinde profesyonel destek sağlar. İnsan haklarınızın korunması için yanınızdayız."
  },
  { 
    id: 10, 
    name: "İdare Hukuku", 
    description: "İdare Hukuku alanında uzman ekibimiz, kamu kurumları ile olan uyuşmazlıklarınızda profesyonel danışmanlık ve dava hizmeti sunar. İdari işlemlere karşı itiraz, iptal davaları ve tam yargı davalarında yanınızdayız."
  },
  { 
    id: 11, 
    name: "Arabuluculuk", 
    description: "Arabuluculuk hizmetlerimiz ile uyuşmazlıklarınızı daha hızlı ve dostane bir şekilde çözmeyi amaçlıyoruz. Uzman arabulucularımız, tarafsız ve etkili çözümler sunarak hukuki süreçlerinizi kolaylaştırır."
  },
  { 
    id: 12, 
    name: "Yatırım Süreçleri, Birleşme & Devralmalar", 
    description: "Yatırım Süreçleri, Birleşme & Devralmalar konusunda uzman ekibimiz, yatırım projelerinizde, birleşme ve devralma işlemlerinde hukuki danışmanlık ve destek sağlar. Ticari hedeflerinize ulaşmanız için yanınızdayız."
  },
  { 
    id: 13, 
    name: "Gayrimenkul Hukuku", 
    description: "Gayrimenkul Hukuku alanında uzman ekibimiz, gayrimenkul alım satım işlemleri, kira sözleşmeleri, tapu işlemleri ve gayrimenkul davalarında profesyonel destek sunar. Gayrimenkul işlemlerinizde hukuki güvence sağlıyoruz."
  },
  { 
    id: 14, 
    name: "Tahkim", 
    description: "Tahkim hizmetlerimiz ile ulusal ve uluslararası düzeyde ticari uyuşmazlıkların çözümünde hızlı ve etkin çözümler sunuyoruz. Uzman tahkim avukatlarımız, hakem kararlarının uygulanması sürecinde de yanınızdadır."
  },
  { 
    id: 15, 
    name: "Ceza İnfaz Hukuku", 
    description: "Ceza İnfaz Hukuku alanında uzman avukatlarımız, ceza infaz süreçlerinde haklarınızın korunması ve adil bir infaz sürecinin sağlanması için profesyonel destek sunar. Amacımız, adaletin sağlanması ve haklarınızın korunmasıdır."
  }
];

const FaaliyetAlanlari = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold bg-indigo-950  text-gray-300 mb-12 text-center">Faaliyet Alanlarımız</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <motion.div 
              key={service.id} 
              layoutId={service.id} 
              className="bg-white text-gray-300 p-6 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedId(service.id)}
            >
              <motion.h2 className="text-xl font-semibold p-6 hover:bg-indigo-900 bg-indigo-950">{service.name}</motion.h2>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div 
              layoutId={selectedId} 
              className="fixed inset-0 bg-gray-800  bg-opacity-75 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button 
                  className="absolute top-2 right-2 text-gray-500" 
                  onClick={() => setSelectedId(null)}
                >
                  ✖
                </button>
                <motion.h2 className="text-xl font-semibold text-gray-300 rounded text-center bg-indigo-950">{services.find(service => service.id === selectedId).name}</motion.h2>
                <p className="mt-4 text-center">{services.find(service => service.id === selectedId).description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaaliyetAlanlari;
