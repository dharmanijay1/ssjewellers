'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "The quality and design of S.S. Jewellers' collections are simply unmatched. They have become an essential part of our exclusive inventory. Our customers consistently praise both the craftsmanship and the intelligent pricing structure that allows us to offer luxury at accessible price points.",
      author: "Priya Sharma",
      company: "Owner, The Gold Emporium, Mumbai",
      initials: "PS"
    },
    {
      id: 2,
      text: "Working with S.S. Jewellers has transformed our business model entirely. Their ready-to-display ornaments and competitive wholesale rates have allowed us to expand our premium offerings while maintaining healthy margins. The partnership has been nothing short of revolutionary for our retail operations.",
      author: "Rajesh Gupta",
      company: "Managing Director, Heritage Jewels, Delhi",
      initials: "RG"
    },
    {
      id: 3,
      text: "In thirty years of retail jewelry, I've never encountered such consistent quality combined with market-intelligent pricing. S.S. Jewellers understands both the artistry of craftsmanship and the realities of commerce. They're not just suppliers—they're strategic partners in our success.",
      author: "Meera Patel",
      company: "Proprietor, Golden Dreams Boutique, Ahmedabad",
      initials: "MP"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Voices of Excellence</h2>
          <div className="luxury-divider"></div>
          <p className="subtitle">Trust built through excellence, one partnership at a time. Discover what industry leaders say about our commitment to quality and service.</p>
        </div>
       
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
                <div className="author-info">
                  <div className="author-avatar">{testimonial.initials}</div>
                  <div className="author-details">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="carousel-controls">
            <button className="carousel-prev" onClick={prevSlide} aria-label="Previous testimonial">
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button className="carousel-next" onClick={nextSlide} aria-label="Next testimonial">
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}