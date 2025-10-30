'use client';

export default function Partnership() {
  const startPartnership = (tier) => {
    alert(`Starting ${tier} Partnership process. You will be redirected to the contact form.`);
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="partnership" className="partnership">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Strategic Partnership Advantages</h2>
          <div className="luxury-divider"></div>
          <p className="subtitle">Elevate your retail offering with partnership benefits designed to drive exceptional business growth and customer satisfaction.</p>
        </div>
       
        <div className="partnership-tiers">
          <div className="tier-card fade-in">
            <div className="tier-header">
              <h3>Starter</h3>
              <div className="tier-price">For New Retailers</div>
            </div>
            <ul className="tier-features">
              <li><i className="fas fa-check" aria-hidden="true"></i> Minimum order: ₹2 Lakhs</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> 15+ Collection access</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Standard support</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Quality certification</li>
            </ul>
            <button className="btn btn-tier" onClick={() => startPartnership('Starter')}>Start Partnership</button>
          </div>
          
          <div className="tier-card featured fade-in">
            <div className="tier-badge">Most Popular</div>
            <div className="tier-header">
              <h3>Premium</h3>
              <div className="tier-price">For Growing Businesses</div>
            </div>
            <ul className="tier-features">
              <li><i className="fas fa-check" aria-hidden="true"></i> Minimum order: ₹5 Lakhs</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> 30+ Collection access</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Priority support</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Custom designs available</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Extended payment terms</li>
            </ul>
            <button className="btn btn-tier" onClick={() => startPartnership('Premium')}>Start Partnership</button>
          </div>
          
          <div className="tier-card fade-in">
            <div className="tier-header">
              <h3>Elite</h3>
              <div className="tier-price">For Established Retailers</div>
            </div>
            <ul className="tier-features">
              <li><i className="fas fa-check" aria-hidden="true"></i> Minimum order: ₹15 Lakhs</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Full collection access</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Dedicated account manager</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Exclusive designs</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Flexible payment options</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Market analysis reports</li>
            </ul>
            <button className="btn btn-tier" onClick={() => startPartnership('Elite')}>Start Partnership</button>
          </div>
        </div>
       
        <div className="partnership-grid">
          <div className="partnership-feature fade-in">
            <div className="feature-icon">
              <i className="fas fa-industry" aria-hidden="true"></i>
            </div>
            <h3>Direct-to-Refinery Sourcing</h3>
            <p>Our streamlined supply chain eliminates unnecessary intermediaries, ensuring you receive the most competitive wholesale rates in the market while maintaining consistent quality. This direct relationship translates into significant cost savings passed directly to our wholesale partners.</p>
          </div>
         
          <div className="partnership-feature fade-in">
            <div className="feature-icon">
              <i className="fas fa-certificate" aria-hidden="true"></i>
            </div>
            <h3>Certified Quality Assurance</h3>
            <p>Every S.S. Jewellers ornament comes with independent laboratory certification guaranteeing purity and authenticity. Our rigorous quality control process means zero surprises—every piece meets our exacting standards before reaching your display cases.</p>
          </div>
         
          <div className="partnership-feature fade-in">
            <div className="feature-icon">
              <i className="fas fa-box-open" aria-hidden="true"></i>
            </div>
            <h3>Ready-to-Display Inventory</h3>
            <p>Our finished ornaments arrive professionally polished and presentation-ready, reducing your preparation time and allowing for immediate retail display. This operational efficiency translates directly into faster inventory turnover and improved cash flow.</p>
          </div>
         
          <div className="partnership-feature fade-in">
            <div className="feature-icon">
              <i className="fas fa-chart-bar" aria-hidden="true"></i>
            </div>
            <h3>Market-Intelligent Pricing</h3>
            <p>Our strategic focus on 18k gold creates compelling value propositions for your customers: substantial, beautifully crafted pieces at accessible price points. This approach expands your addressable market while maintaining premium positioning.</p>
          </div>
         
          <div className="partnership-feature fade-in">
            <div className="feature-icon">
              <i className="fas fa-pencil-ruler" aria-hidden="true"></i>
            </div>
            <h3>Design Innovation</h3>
            <p>Our in-house design team continuously develops fresh collections that blend traditional Indian aesthetics with contemporary appeal, ensuring your inventory remains current with evolving customer preferences and market trends.</p>
          </div>
         
          <div className="partnership-feature fade-in">
            <div className="feature-icon">
              <i className="fas fa-headset" aria-hidden="true"></i>
            </div>
            <h3>Dedicated Support</h3>
            <p>Experience personalized service with dedicated account management, flexible order quantities, and customized solutions tailored to your specific business requirements and market positioning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}