import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.body.style.margin = '0';
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Navigation />
      <main className="bg-background">
        <Hero />
        <Projects />
        <About />
      </main>
      <Toaster />
    </>
  );
}

export default App;