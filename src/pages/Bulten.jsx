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
      title: 'Avukatlarımızın Katıldığı Seminerler',
      summary: 'Son dönemde avukatlarımızın katıldığı seminerler ve eğitimler hakkında bilgi alın.',
      image: 'path/to/your/image3.jpg',
      link: '/bultens/avukatlarimiz-seminerler'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold bg-indigo-950 mb-6 text-gray-300 rounded text-center">Bültenler</h1>
        <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
          {bulten.map((bulten) => (
            <div key={bulten.id} className="bg-white rounded text-gray-300 shadow-md overflow-hidden">
              <img src={bulten.image} alt={bulten.title} className="w-full rounded p-4 h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl rounded font-bold bg-indigo-950 mb-4">{bulten.title}</h2>
                <p className="text-gray-600 mb-4">{bulten.summary}</p>
                <a
                  href={bulten.link}
                  className="bg-indigo-950 font-semibold hover:underline rounded p-1"
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
