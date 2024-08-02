import React from 'react';

const Ekibimiz = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-cyan-800 mb-12 text-center">Ekibimiz</h1>

        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-cyan-800 mb-2">Gamze Zorlu</h2>
              <h3 className="text-lg font-medium text-gray-600 mb-4">Avukat</h3>
              <p className="text-gray-700">
                Gamze Zorlu, ceza hukuku ve medeni hukuk alanlarında deneyimli bir avukattır. Müvekkillerine etkili ve profesyonel hukuki danışmanlık hizmetleri sunarak, adaletin sağlanmasına katkıda bulunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ekibimiz;
