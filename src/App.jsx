import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';

import Reviews from './components/Reviews';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Process />

      <Reviews />
      <QuoteForm />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
