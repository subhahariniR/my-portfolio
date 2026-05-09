function Skills() {
  const skills = [
    { category: 'Languages', items: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Python'] },
    { category: 'Frameworks', items: ['React.js', 'Node.js', 'Express.js', 'Leaflet.js', 'styled-components'] },
    { category: 'PWA & Web APIs', items: ['Service Worker', 'Geolocation API', 'IndexedDB', 'Device Motion API', 'REST APIs'] },
    { category: 'SEO & Analytics', items: ['On-page SEO', 'Google Analytics', 'Search Console', 'Keyword Research'] },
    { category: 'Tools & Platforms', items: ['Git / GitHub', 'VS Code', 'Figma', 'Canva', 'MongoDB', 'GitHub Pages'] },
  ]

  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)', padding: '6rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-label">Technical Arsenal</div>
      <h2 className="section-title">
        What I{' '}
        <em style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', color: 'var(--accent)' }}>
          work with
        </em>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '1.5rem',
      }}>
        {skills.map(({ category, items }) => (
          <div
            key={category}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.5rem',
              transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.borderColor = 'rgba(232,201,126,0.35)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(232,201,126,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.borderColor = ''
              e.currentTarget.style.boxShadow = ''
            }}
          >
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
            }}>{category}</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {items.map(item => (
                <span key={item} style={{
                  background: 'rgba(232,201,126,0.07)',
                  color: 'var(--muted)',
                  fontSize: '0.72rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '3px',
                }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills