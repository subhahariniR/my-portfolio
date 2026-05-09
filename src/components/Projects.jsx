export default function Projects() {
  const projects = [
    {
      number: '01 — FLAGSHIP',
      name: 'SaveHer',
      desc: "A women's safety PWA with one-tap SOS dispatching alerts via SMS, WhatsApp & call simultaneously — response in under 2 seconds. Offline-first architecture with shake-to-SOS, fake call escape & live GPS tracking.",
      tags: ['React.js', 'Leaflet.js', 'PWA', 'Service Worker', 'IndexedDB', 'Geolocation API'],
      link: 'https://github.com/subhahariniR/saveher-app',
      linkLabel: '⭐ View SaveHer on GitHub →',
      accent: 'var(--accent)',
    },
    {
      number: '02 — WEB',
      name: 'Personal Portfolio',
      desc: 'Responsive portfolio deployed on GitHub Pages with 100% uptime and GitHub API integration for live project display.',
      tags: ['React.js', 'HTML/CSS', 'GitHub API', 'GitHub Pages'],
      link: 'https://github.com/subhahariniR',
      linkLabel: 'View Profile →',
      accent: 'var(--accent2)',
    },
    {
      number: '03 — WEB',
      name: 'Affiliate Marketing App',
      desc: 'Mobile-first product listing site with navigable sections, semantic markup, and accessible responsive layout optimised for conversions.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      link: null,
      accent: 'var(--accent3)',
    },
  ]

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border)', padding: '6rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-label">Selected Work</div>
      <h2 className="section-title">
        Projects I've{' '}
        <em style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', color: 'var(--accent)' }}>
          built
        </em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {projects.map(({ number, name, desc, tags, link, linkLabel, accent }) => (
          <div
            key={name}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'transform 0.3s, box-shadow 0.3s',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = ''
            }}
          >
            {/* Number */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              color: accent,
              opacity: 0.7,
              letterSpacing: '0.2em',
              marginBottom: '0.8rem',
            }}>{number}</div>

            {/* Name */}
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              marginBottom: '0.8rem',
              color: 'var(--text)',
            }}>{name}</div>

            {/* Description */}
            <p style={{
              color: 'var(--muted)',
              fontSize: '0.87rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
              flex: 1,
            }}>{desc}</p>

            {/* Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: link ? '1.5rem' : 0,
            }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.05em',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '3px',
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}>{tag}</span>
              ))}
            </div>

            {/* Link */}
            {link && (
              
              <a href={link} target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.72rem',
                  color: accent,
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  transition: 'gap 0.2s',
                  fontWeight: 700,
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '0.8rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
              >
                {linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}