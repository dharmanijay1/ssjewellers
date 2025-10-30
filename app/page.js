'use client';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Why18k from './components/Why18k';
import Collections from './components/Collections';
import Partnership from './components/Partnership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { setupScrollAnimations, setupBackToTop, setupHeaderEffects } from './utils/animations';

export default function Home() {
  useEffect(() => {
    // Loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 800);
      }, 1500);
    }

    // Setup animations
    setupScrollAnimations();
    setupBackToTop();
    const cleanupHeaderEffects = setupHeaderEffects();

    return () => {
      if (cleanupHeaderEffects) cleanupHeaderEffects();
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className="loading-screen">
        <div className="loading-content">
          <div className="diamond-loader">
            <div className="diamond"></div>
            <div className="diamond"></div>
            <div className="diamond"></div>
          </div>
          <p className="loading-text">S.S. Jewellery</p>
        </div>
      </div>

      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Why18k />
        <Collections />
        <Partnership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button className="back-to-top" aria-label="Back to top">
        <i className="fas fa-chevron-up" aria-hidden="true"></i>
      </button>
    </>
  );
}
