import React from 'react';

const Bulten = () => {
  const bulten = [
    {
      id: 1,
      title: 'Yeni Yasa Düzenlemeleri',
      summary: 'Son yasa düzenlemeleri hakkında detaylı bilgi edinmek için bültenimizi okuyun.',
      image: 'path/to/your/image1.jpg',
      link: '/bultens/yeni-yasa-duzenlemeleri'
    },
    {
      id: 2,
      title: 'Hukuk Büromuzun Yıl Sonu Raporu',
      summary: 'Hukuk büromuzun yıl sonu performans raporunu ve önemli başarıları öğrenin.',
      image: 'path/to/your/image2.jpg',
      link: '/bultens/yil-sonu-raporu'
    },
    {
      id: 3,
      title: 'Avukatlarımızın Katıldığı Seminerler',
      summary: 'Son dönemde avukatlarımızın katıldığı seminerler ve eğitimler hakkında bilgi alın.',
      image: 'path/to/your/image3.jpg',
      link: '/bultens/avukatlarimiz-seminerler'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-cyan-800 mb-6 text-center">Bültenler</h1>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
          {bulten.map((bulten) => (
            <div key={bulten.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={bulten.image} alt={bulten.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-cyan-800 mb-4">{bulten.title}</h2>
                <p className="text-gray-600 mb-4">{bulten.summary}</p>
                <a
                  href={bulten.link}
                  className="text-cyan-800 font-semibold hover:underline"
                >
                  Detayları Gör
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bulten;
