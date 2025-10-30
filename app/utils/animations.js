'use client';

export const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger animation for cards
        if (entry.target.classList.contains('benefit-card') ||
            entry.target.classList.contains('collection-card') ||
            entry.target.classList.contains('partnership-feature') ||
            entry.target.classList.contains('testimonial') ||
            entry.target.classList.contains('stat-card') ||
            entry.target.classList.contains('craft-item') ||
            entry.target.classList.contains('tier-card')) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        } else {
          entry.target.classList.add('visible');
        }
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
};

export const setupBackToTop = () => {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

export const setupHeaderEffects = () => {
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    
    // Header background effect
    if (scrollY > 100) {
      header.style.background = currentTheme === 'dark' 
        ? 'linear-gradient(135deg, rgba(28,28,28,0.95) 0%, rgba(42,42,42,0.92) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.92) 100%)';
      header.style.backdropFilter = 'blur(25px)';
      header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
    } else {
      header.style.background = currentTheme === 'dark'
        ? 'linear-gradient(135deg, rgba(28, 28, 28, 0.98), rgba(42, 42, 42, 0.95))'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 248, 248, 0.95))';
      header.style.backdropFilter = 'blur(20px)';
      header.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.2)';
    }

    // Hide/show header on scroll
    if (scrollY > lastScrollY && scrollY > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};
