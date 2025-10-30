'use client';

export default function Collections() {
  const showCatalog = () => {
    alert('Complete catalog will be shown here. In a real implementation, this would open a modal or navigate to a catalog page.');
  };

  const viewCollectionDetails = (title) => {
    alert(`Showing details for: ${title}\n\nThis would open a detailed modal with more information about the collection, pricing, and customization options.`);
  };

  return (
    <section id="collections" className="collections">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Exquisite Collections</h2>
          <div className="luxury-divider"></div>
          <p className="subtitle">Each piece tells a story of craftsmanship, tradition, and modern elegance. Discover collections that bridge heritage with contemporary luxury.</p>
        </div>
       
        <div className="collection-grid">
          <div className="collection-card fade-in">
            <div className="collection-badge">Bestseller</div>
            <div className="collection-image">
              <div className="collection-overlay">
                <button className="collection-view-btn" onClick={() => viewCollectionDetails('Heritage Lotus Collection')}>
                  <i className="fas fa-expand" aria-hidden="true"></i>
                  View Details
                </button>
              </div>
              <span aria-hidden="true">🪷</span>
            </div>
            <div className="collection-content">
              <h3>Heritage Lotus Collection</h3>
              <p>Inspired by the sacred lotus emerging from pristine waters, this exquisite collection embodies spiritual elegance and cultural heritage. Each piece showcases our artisans&apos; meticulous attention to detail, with intricate petal work that captures and reflects light with ethereal beauty.</p>
              <div className="collection-meta">
                <span className="price">Starting at ₹45,000</span>
                <span className="items">28 Pieces</span>
              </div>
            </div>
          </div>
         
          <div className="collection-card fade-in">
            <div className="collection-badge">New</div>
            <div className="collection-image">
              <div className="collection-overlay">
                <button className="collection-view-btn" onClick={() => viewCollectionDetails('Minimalist Aura Collection')}>
                  <i className="fas fa-expand" aria-hidden="true"></i>
                  View Details
                </button>
              </div>
              <span aria-hidden="true">✨</span>
            </div>
            <div className="collection-content">
              <h3>Minimalist Aura Collection</h3>
              <p>Where modern sophistication meets timeless gold craftsmanship, our Aura collection represents understated luxury at its finest. The clean geometric lines are enhanced by our signature 18k gold&apos;s warm luminosity, creating pieces that transition effortlessly from boardroom to ballroom.</p>
              <div className="collection-meta">
                <span className="price">Starting at ₹38,000</span>
                <span className="items">22 Pieces</span>
              </div>
            </div>
          </div>
         
          <div className="collection-card fade-in">
            <div className="collection-badge">Classic</div>
            <div className="collection-image">
              <div className="collection-overlay">
                <button className="collection-view-btn" onClick={() => viewCollectionDetails('Eternal Embrace Collection')}>
                  <i className="fas fa-expand" aria-hidden="true"></i>
                  View Details
                </button>
              </div>
              <span aria-hidden="true">💍</span>
            </div>
            <div className="collection-content">
              <h3>Eternal Embrace Collection</h3>
              <p>Crafted to commemorate life&apos;s most precious moments, this collection features intricate filigree work that tells the story of eternal commitment. The superior workability of 18k gold allows for delicate detailing that would be impossible with softer alloys, resulting in heirloom pieces of extraordinary beauty.</p>
              <div className="collection-meta">
                <span className="price">Starting at ₹52,000</span>
                <span className="items">35 Pieces</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="collections-cta fade-in">
          <button className="btn btn-outline" onClick={showCatalog}>
            <i className="fas fa-book-open" aria-hidden="true"></i>
            View Complete Catalog
          </button>
        </div>
      </div>
    </section>
  );
}