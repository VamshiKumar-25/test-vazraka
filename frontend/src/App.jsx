import { useEffect, useState } from 'react';
import Lenis from 'lenis';

import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Innovation from './components/Innovation';
import ProductsShowcase from './components/ProductsShowcase';
import Pricing from './components/Pricing';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [prefilledPlan, setPrefilledPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setPrefilledPlan(plan);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <ThemeProvider>
      <main>
        {/* <ScrollProgress /> */}
        <Navbar />
        <Hero />
        <Innovation />
        <Services />
        <ProductsShowcase />
        <Pricing onSelectPlan={handleSelectPlan} />
        {/* <CallToAction /> */}
        <Contact prefilledPlan={prefilledPlan} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
