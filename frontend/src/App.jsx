import { useEffect } from 'react';
import Lenis from 'lenis';

import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import GlowingOrb from './components/GlowingOrb';

import Intro from './components/Intro';
import Hero from './components/Hero';
import Innovation from './components/Innovation';
import ProductsShowcase from './components/ProductsShowcase';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling via Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <main>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <NeuralNetworkBackground />
      <GlowingOrb />
      
      <Intro />
      <Hero />
      <Innovation />
      <Services />
      <ProductsShowcase />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
