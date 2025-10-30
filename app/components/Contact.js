'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Begin Your Partnership Journey</h2>
          <div className="luxury-divider"></div>
          <p className="subtitle">Ready to discover how S.S. Jewellers can enhance your jewelry retail offering? Our partnership specialists await your inquiry.</p>
        </div>
       
        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Connect With Excellence</h3>
            <div className="contact-method">
              <i className="fas fa-phone" aria-hidden="true"></i>
              <div>
                <span className="highlight">Phone:</span>
                <p>+91-98765-43210</p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <div>
                <span className="highlight">Email:</span>
                <p>partnerships@ssjewellery.com</p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <div>
                <span className="highlight">Address:</span>
                <p>123 Jewelers Street, Gold Souk, Mumbai - 400001</p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-clock" aria-hidden="true"></i>
              <div>
                <span className="highlight">Business Hours:</span>
                <p>Monday-Saturday, 10:00 AM - 7:00 PM</p>
              </div>
            </div>
           
            <div className="contact-features">
              <h4>Partnership Excellence</h4>
              <div className="feature-item">
                <i className="fas fa-eye" aria-hidden="true"></i>
                <span>Private Viewing: Experience our collections firsthand</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-chess-queen" aria-hidden="true"></i>
                <span>Strategic Partnership: Join India&apos;s leading retailers</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-cogs" aria-hidden="true"></i>
                <span>Custom Solutions: Tailored inventory solutions</span>
              </div>
            </div>
           
            <div className="inspirational-quote">
              <i className="fas fa-quote-left" aria-hidden="true"></i>
              <p>&quot;Your success is our legacy. Let&apos;s craft it together.&quot;</p>
            </div>
          </div>
         
          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="businessName">
                  <i className="fas fa-building" aria-hidden="true"></i> Business Name
                </label>
                <input 
                  type="text" 
                  id="businessName" 
                  name="businessName" 
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Prestigious Business Name" 
                  required 
                />
              </div>
             
              <div className="form-group">
                <label htmlFor="contactName">
                  <i className="fas fa-user" aria-hidden="true"></i> Contact Person
                </label>
                <input 
                  type="text" 
                  id="contactName" 
                  name="contactName" 
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your Full Name" 
                  required 
                />
              </div>
            </div>
           
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope" aria-hidden="true"></i> Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@business.com" 
                  required 
                />
              </div>
             
              <div className="form-group">
                <label htmlFor="phone">
                  <i className="fas fa-phone" aria-hidden="true"></i> Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-98765-43210" 
                  required 
                />
              </div>
            </div>
           
            <div className="form-group">
              <label htmlFor="businessType">
                <i className="fas fa-store" aria-hidden="true"></i> Business Type
              </label>
              <select 
                id="businessType" 
                name="businessType" 
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="">Select Business Type</option>
                <option value="luxury-retailer">Luxury Jewelry Retailer</option>
                <option value="boutique">Boutique Store</option>
                <option value="department-store">Department Store</option>
                <option value="online-retailer">Online Retailer</option>
                <option value="wholesale">Wholesale Distributor</option>
                <option value="other">Other</option>
              </select>
            </div>
           
            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment" aria-hidden="true"></i> Partnership Requirements
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business vision, current inventory needs, target market, and how we can create a mutually beneficial partnership that drives exceptional results..." 
                required
              ></textarea>
            </div>
           
            <button 
              type="submit" 
              className="btn btn-submit"
              disabled={isSubmitting}
            >
              <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-handshake"} aria-hidden="true"></i>
              {isSubmitting ? 'Processing...' : 'Request Partnership Consultation'}
            </button>

            {submitStatus === 'success' && (
              <div className="form-success">
                <div style={{
                  background: 'rgba(40, 167, 69, 0.1)',
                  border: '1px solid #28a745',
                  color: '#28a745',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  marginTop: '1.5rem',
                  textAlign: 'center',
                  animation: 'fadeInLux 0.6s ease'
                }}>
                  <i className="fas fa-check-circle"></i>
                  <h4 style={{ margin: '1rem 0 0.5rem', color: '#28a745' }}>Thank You for Your Interest!</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>Our partnership specialist will contact you within 24 hours to discuss exclusive wholesale opportunities and arrange a private collection viewing.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-error">
                <div style={{
                  background: 'rgba(220, 53, 69, 0.1)',
                  border: '1px solid #dc3545',
                  color: '#dc3545',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  marginTop: '1.5rem',
                  textAlign: 'center'
                }}>
                  <i className="fas fa-exclamation-triangle"></i>
                  <h4 style={{ margin: '1rem 0 0.5rem', color: '#dc3545' }}>Submission Failed</h4>
                  <p style={{ margin: 0, opacity: 0.9 }}>Please try again or contact us directly at partnerships@ssjewellery.com</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}