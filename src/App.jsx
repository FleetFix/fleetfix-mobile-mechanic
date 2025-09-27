import React from 'react'
import './style.css'

function Feature({title, children, emoji}){
  return (
    <div className="feature">
      <div className="feature-emoji" aria-hidden>{emoji}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export default function App(){
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          {/* decorative logo: empty alt so it doesn't show fallback text */}
          <img src="/logo.png" alt="" className="logo" aria-hidden />
          <div>
            <div className="brand-title">Fleet Fix</div>
            <div className="brand-sub">Mobile Fleet Repair</div>
          </div>
        </div>
        <div className="header-actions">
          <a className="cta-phone" href="tel:7197557767">Call: 719-755-7767</a>
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1>We come to your vehicles — fast, professional, trusted.</h1>
          <p className="lead">On-site repairs and maintenance for fleets and individuals. Reduce downtime, avoid towing, and keep your drivers moving.</p>
          <div className="hero-ctas">
            <a className="button primary" href="tel:7197557767">Call Now</a>
            <a className="button ghost" href="mailto:fleetfixmobile@gmail.com">Email</a>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden>
          <img src="/logo.png" alt="" />
        </div>
      </main>

      <section className="features">
        <Feature emoji="🛠️" title="Mobile Repairs">Full-service on-site mechanical repairs for light and medium duty vehicles.</Feature>
        <Feature emoji="⏱️" title="Fast Response">Priority service to minimize fleet downtime and get you back on the road.</Feature>
        <Feature emoji="📋" title="Preventative Maintenance">Scheduled maintenance to catch problems early and reduce costs.</Feature>
      </section>

      <section className="why-choose">
        <div className="why-inner">
          <h2>Why choose Fleet Fix?</h2>
          <p className="why-lead">We blend fast response, certified technicians, and flexible scheduling so your fleet keeps moving. Trusted by local businesses and independent drivers.</p>
          <div className="badges">
            <div className="badge">✅ Certified Technicians</div>
            <div className="badge">🚚 Fleet-Friendly</div>
            <div className="badge">⏱️ Fast Response</div>
            <div className="badge">🔧 12-Month Warranty</div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What customers say</h2>
        <div className="test-list">
          <blockquote className="test">"Saved our day — mechanic arrived on site and had us back within an hour." <cite>— J. Morales, Logistics</cite></blockquote>
          <blockquote className="test">"Excellent service and clear pricing. Highly recommend." <cite>— Dana P., Fleet Manager</cite></blockquote>
          <blockquote className="test">"Quick, professional, and friendly. Will use again." <cite>— R. Singh</cite></blockquote>
        </div>
      </section>

      <section className="quote">
        <h2>Request a Quote</h2>
        <form className="quote-form" onSubmit={(e)=>{
          e.preventDefault();
          const form = e.target;
          const name = encodeURIComponent(form.name.value || '');
          const company = encodeURIComponent(form.company.value || '');
          const details = encodeURIComponent(form.details.value || '');
          const subject = encodeURIComponent(`Quote request from ${name || company || 'website'}`);
          const body = encodeURIComponent(`Name: ${name}%0ACompany: ${company}%0ADetails: ${details}`);
          window.location.href = `mailto:fleetfixmobile@gmail.com?subject=${subject}&body=${body}`;
        }}>
          <div className="row">
            <input name="name" placeholder="Your name" />
            <input name="company" placeholder="Company (optional)" />
          </div>
          <textarea name="details" placeholder="Vehicle / Job details (location, vehicle type, issue)"></textarea>
          <div className="row">
            <button className="button primary" type="submit">Request Quote</button>
            <a className="button ghost" href="tel:7197557767">Call Now</a>
          </div>
        </form>
      </section>

      <section className="contact-strip">
        <div>
          <strong>Ready to dispatch a mechanic?</strong>
          <div className="contact-actions">
            <a className="button primary" href="tel:7197557767">Call 719-755-7767</a>
            <a className="button ghost" href="mailto:fleetfixmobile@gmail.com">fleetfixmobile@gmail.com</a>
            <a className="button ghost" href="https://www.instagram.com/fleetfixmobile/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Fleet Fix — On-site vehicle repair. All rights reserved.</p>
      </footer>

      {/* Floating social button */}
      <a className="floating-ig" href="https://www.instagram.com/fleetfixmobile/" target="_blank" rel="noopener noreferrer" aria-label="Fleet Fix on Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11.37a4 4 0 11-7.99.63A4 4 0 0116 11.37z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 6.5h.01" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}
