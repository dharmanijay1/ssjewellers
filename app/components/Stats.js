'use client';
import { useEffect, useRef } from 'react';

export default function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
      } else {
        counter.innerText = target;
      }
    };

    counters.forEach(counter => {
      animateCounter(counter);
    });
  };

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number" data-count="39">0</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-count="5000">0</div>
            <div className="stat-label">Designs Created</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-count="250">0</div>
            <div className="stat-label">Partner Stores</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-count="99">0</div>
            <div className="stat-label">% Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}