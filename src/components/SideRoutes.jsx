import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Anasayfa from '../pages/Anasayfa';
import Hakkimizda from '../pages/Hakkimizda';
import Ekibimiz from '../pages/Ekibimiz';
import Hizmetlerimiz from '../pages/Hizmetlerimiz';
import Blog from '../pages/Blog';
import Bulten from '../pages/Bulten';
import Kariyer from '../pages/Kariyer';
import Iletisim from '../pages/Iletisim';

const SideRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/ekibimiz" element={<Ekibimiz />} />
      <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/bulten" element={<Bulten />} />
      <Route path="/kariyer" element={<Kariyer />} />
      <Route path="/iletisim" element={<Iletisim />} />
    </Routes>
  );
};

export default SideRoutes;
