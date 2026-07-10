import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
