'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      if (hero) {
        hero.style.backgroundPositionY = rate + 'px';
      }

      // Parallax for floating gems
      const gems = document.querySelectorAll('.gem');
      gems.forEach((gem, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        gem.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-gems">
          <div className="gem gem-1" aria-hidden="true">💎</div>
          <div className="gem gem-2" aria-hidden="true">✨</div>
          <div className="gem gem-3" aria-hidden="true">🔶</div>
          <div className="gem gem-4" aria-hidden="true">💫</div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Since 1985</span>
          </div>
          <h1 className="hero-title">The New Standard in Gold Ornaments</h1>
          <h2 className="hero-subtitle">Exquisite 18k Gold. Uncompromising Value.</h2>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => smoothScroll('#collections')}>
              <span>Explore Collections</span>
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
            <button className="btn btn-secondary" onClick={() => smoothScroll('#partnership')}>
              <span>Become a Partner</span>
              <i className="fas fa-handshake" aria-hidden="true"></i>
            </button>
          </div>
         
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-gem" aria-hidden="true"></i>
              </div>
              <h3>Ready-to-Use Designs</h3>
              <p>Meticulously crafted ornaments, finished and display-ready for immediate retail excellence</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-crown" aria-hidden="true"></i>
              </div>
              <h3>18k Gold Excellence</h3>
              <p>Strategic innovation delivering superior durability and unmatched design flexibility</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tag" aria-hidden="true"></i>
              </div>
              <h3>Market-Best Rates</h3>
              <p>Direct-to-refinery sourcing ensures unparalleled wholesale value and competitive advantage</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-award" aria-hidden="true"></i>
              </div>
              <h3>Trusted Legacy</h3>
              <p>Four decades of craftsmanship excellence serving India&apos;s most prestigious retailers</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
}