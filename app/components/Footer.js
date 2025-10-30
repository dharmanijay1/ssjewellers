'use client';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
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
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">S.S. Jewellery</div>
            <p>Crafting Excellence Since 1985. Where tradition meets innovation, creating timeless treasures for discerning clientele worldwide.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
            </div>
          </div>
         
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); smoothScroll('#home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('#about'); }}>About Us</a></li>
              <li><a href="#collections" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Collections</a></li>
              <li><a href="#why-18k" onClick={(e) => { e.preventDefault(); smoothScroll('#why-18k'); }}>Why 18k Gold</a></li>
              <li><a href="#partnership" onClick={(e) => { e.preventDefault(); smoothScroll('#partnership'); }}>Partnership</a></li>
            </ul>
          </div>
         
          <div className="footer-section">
            <h4>Collections</h4>
            <ul>
              <li><a href="#collections" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Heritage Lotus</a></li>
              <li><a href="#collections" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Minimalist Aura</a></li>
              <li><a href="#collections" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Eternal Embrace</a></li>
              <li><a href="#collections" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Bridal Collection</a></li>
              <li><a href="#collections" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Festival Specials</a></li>
            </ul>
          </div>
         
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-phone" aria-hidden="true"></i> +91-98765-43210</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> partnerships@ssjewellery.com</p>
              <p><i className="fas fa-map-marker-alt" aria-hidden="true"></i> 123 Jewelers Street, Gold Souk, Mumbai</p>
            </div>
          </div>
        </div>
       
        <div className="luxury-divider"></div>
       
        <div className="footer-bottom">
          <p>&copy; <span id="currentYear">2024</span> S.S. Jewellers. All rights reserved. | Crafting Excellence Since 1985</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}