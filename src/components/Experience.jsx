import { useEffect, useRef } from 'react'

const timeline = [
  {
    date: 'OCT 2025 – APR 2026',
    role: 'SEO Intern',
    company: 'QuantumQLabs · Coimbatore, Tamil Nadu',
    bullets: [
      'Executed on-page SEO strategies — metadata, structured data, internal linking — tracked via Google Analytics & Search Console.',
      'Delivered measurable improvements in organic click-through rate through technical & content SEO strategies.',
    ],
  },
  {
    date: 'MAR 2024 – AUG 2024',
    role: 'React Developer Intern',
    company: 'Tamizhi.ai · Tirupur, Tamil Nadu',
    bullets: [
      'Built 15+ reusable React components for a production ATS managing end-to-end employee hiring workflows.',
      'Applied memoization & lazy loading to optimize rendering; collaborated via Git branching & pull request reviews.',
    ],
  },
  {
    date: 'AUG 2022 – MAY 2026',
    role: 'B.E. Computer Science & Engineering',
    company: 'Angel College of Engineering & Technology · Tirupur · CGPA: 8.4/10',
    bullets: [],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, [])

  return (
    <section id="experience" ref={ref} style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-label">Work History</div>
      <h2 className="section-title reveal">
        My <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--accent)' }}>journey</em>
      </h2>

      <div className="reveal" style={{ position: 'relative', paddingLeft: '0' }}>
        {/* vertical line */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          opacity: 0.3,
        }} />

        {timeline.map(({ date, role, company, bullets }, i) => (
          <div key={i} style={{
            paddingLeft: '2.5rem',
            paddingBottom: i < timeline.length - 1 ? '3rem' : 0,
            position: 'relative',
          }}>
            {/* dot */}
            <div style={{
              position: 'absolute', left: '-4px', top: '6px',
              width: '9px', height: '9px',
              border: '1.5px solid var(--accent)',
              borderRadius: '50%',
              background: 'var(--bg)',
            }} />

            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.68rem',
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '0.4rem',
            }}>{date}</div>

            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.25rem',
              marginBottom: '0.2rem',
            }}>{role}</div>

            <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {company}
            </div>

            {bullets.length > 0 && (
              <ul style={{ listStyle: 'none' }}>
                {bullets.map((b, j) => (
                  <li key={j} style={{
                    color: 'var(--muted)', fontSize: '0.88rem',
                    lineHeight: 1.7, paddingLeft: '1.2rem',
                    position: 'relative', marginBottom: '0.4rem',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0,
                      color: 'var(--accent)', fontSize: '0.75rem', top: '0.15rem',
                    }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}