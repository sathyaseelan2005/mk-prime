import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={3} />
      <About />
      <Gallery />
      <Process />
      <Reviews />
    </>
  );
}


