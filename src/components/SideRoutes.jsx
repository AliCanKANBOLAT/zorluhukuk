import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Anasayfa from '../pages/Anasayfa';
import Hakkimizda from '../pages/Hakkimizda';
import Blog from '../pages/Blog';
import Bulten from '../pages/Bulten';
import Iletisim from '../pages/Iletisim';
import FaaliyetAlanlari from '../pages/FaaliyetAlanlari';

const SideRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/faaliyetalanlari" element={<FaaliyetAlanlari />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/bulten" element={<Bulten />} />
      <Route path="/iletisim" element={<Iletisim />} />
    </Routes>
  );
};

export default SideRoutes;
