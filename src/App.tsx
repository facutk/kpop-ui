import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import ToUpper from '@/pages/ToUpper';
import Home from '@/pages/Home';

const App = () => (
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="toupper" element={<ToUpper />} />
    </Routes>
  </HashRouter>
);

export default App;
