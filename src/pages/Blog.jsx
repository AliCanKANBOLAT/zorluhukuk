import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Ceza Hukuku Güncellemeleri',
      summary: 'Ceza hukuku ile ilgili son gelişmeleri ve önemli davaları öğrenin.',
      image: 'path/to/your/image1.jpg',
      link: '/blog/ceza-hukuku-guncellemeleri'
    },
    {
      id: 2,
      title: 'Aile Hukuku ve Boşanma Süreci',
      summary: 'Aile hukuku ve boşanma süreci ile ilgili bilmeniz gerekenler.',
      image: 'path/to/your/image2.jpg',
      link: '/blog/aile-hukuku-ve-bosanma-sureci'
    },
    {
      id: 3,
      title: 'İş Hukuku Hakları',
      summary: 'İş hukuku kapsamında işçi ve işveren hakları hakkında bilgi edinin.',
      image: 'path/to/your/image3.jpg',
      link: '/blog/is-hukuku-haklari'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold bg-indigo-950 mb-6 text-gray-300 text-center">Blog</h1>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 text-gray-300">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold bg-indigo-950 mb-4 p-1">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <a
                  href={post.link}
                  className="bg-indigo-950 p-1 rounded shadow-lg font-semibold hover:underline"
                >
                  Devamını Oku
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
