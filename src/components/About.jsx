import { useEffect, useRef } from 'react'

const stats = [
  { number: '8.4', label: 'CGPA / 10' },
  { number: '14', label: 'Months Internship' },
  { number: '15+', label: 'React Components' },
  { number: '3', label: 'Live Projects' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, [])

  return (
    <section id="about" ref={ref} style={{ borderTop: '1px solid var(--border)' }}>
      <div className="section-label">Who I Am</div>
      <div className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '5rem',
        alignItems: 'center',
      }}>
        <div>
          <h2 className="section-title">
            Crafting digital{' '}
            <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--accent)' }}>
              experiences
            </em>{' '}
            that matter
          </h2>
          {[
            "I'm a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Computer Science Engineering graduate</strong> from Angel College of Engineering with a CGPA of 8.4/10, with a deep passion for building applications that address real human challenges.</>",
            "My flagship project <strong>SaveHer</strong> — a women's safety PWA — reflects my commitment to purposeful engineering. It dispatches SOS alerts in under 2 seconds, works fully offline, and is installable without an app store.",
            "With <strong>14 months of internship experience</strong> across React development and SEO, I bring both technical depth and business impact to everything I build."
          ].map((text, i) => (
            <p key={i} style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.2rem' }}>
              {text}
            </p>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {stats.map(({ number, label }) => (
            <div key={label} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.4rem',
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>{number}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}