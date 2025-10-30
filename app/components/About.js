'use client';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Crafting Excellence Since 1985</h2>
          <div className="luxury-divider"></div>
          <p className="subtitle">Where visionary craftsmanship meets strategic market intelligence, creating timeless treasures for discerning clientele</p>
        </div>
       
        <div className="about-content">
          <div className="about-text slide-in-left">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1985</div>
                <div className="timeline-content">
                  <h4>The Beginning</h4>
                  <p>Founded by visionary artisan Sanjay Singh with a single workshop dedicated to mastering traditional goldsmithing</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">1995</div>
                <div className="timeline-content">
                  <h4>Innovation in 18k Gold</h4>
                  <p>Pioneered the strategic use of 18k gold as a thoughtful response to changing market dynamics</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <h4>National Recognition</h4>
                  <p>Became a trusted partner for India&apos;s most prestigious jewelry retailers across major cities</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Modern Legacy</h4>
                  <p>Continuing to set new standards in gold craftsmanship while honoring traditional techniques</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual slide-in-right">
            <div className="craftsmanship-showcase">
              <div className="craft-item">
                <div className="craft-icon">
                  <i className="fas fa-hammer" aria-hidden="true"></i>
                </div>
                <h4>Traditional Techniques</h4>
                <p>Mastering age-old goldsmithing methods passed through generations</p>
              </div>
              <div className="craft-item">
                <div className="craft-icon">
                  <i className="fas fa-lightbulb" aria-hidden="true"></i>
                </div>
                <h4>Modern Innovation</h4>
                <p>Blending contemporary design with timeless traditional aesthetics</p>
              </div>
              <div className="craft-item">
                <div className="craft-icon">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </div>
                <h4>Quality Assurance</h4>
                <p>7-stage inspection process ensuring perfection in every piece</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
