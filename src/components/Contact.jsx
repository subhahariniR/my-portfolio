import { useEffect, useRef } from 'react'

const links = [
  { label: '✉ jeevikaravi03@gmail.com', href: 'mailto:jeevikaravi03@gmail.com' },
  { label: '📞 +91 93618 78359', href: 'tel:+919361878359' },
  { label: 'in LinkedIn', href: 'https://linkedin.com/in/shubhaharini-r-849371252' },
  { label: '⌥ GitHub', href: 'https://github.com/subhahariniR' },
]

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }, [])

  return (
    <section id="contact" ref={ref} style={{ borderTop: '1px solid var(--border)', textAlign: 'center' }}>
      <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>

      <h2 className="reveal" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        marginBottom: '1rem', lineHeight: 1.15,
      }}>
        Let's build something<br />
        <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>remarkable</em> together
      </h2>

      <p className="reveal" style={{
        color: 'var(--muted)', fontSize: '1rem',
        maxWidth: '440px', margin: '0 auto 2.5rem', lineHeight: 1.7,
      }}>
        Open to on-site, hybrid, and remote roles. References and project demos available on request.
      </p>

      <div className="reveal" style={{
        display: 'flex', gap: '1.5rem',
        justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem',
      }}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              color: 'var(--muted)', textDecoration: 'none',
              fontFamily: "'Space Mono', monospace", fontSize: '0.75rem',
              letterSpacing: '0.08em',
              padding: '0.6rem 1.2rem',
              border: '1px solid var(--border)', borderRadius: '4px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'rgba(232,201,126,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = ''
              e.currentTarget.style.borderColor = ''
            }}
          >{label}</a>
        ))}
      </div>
    </section>
  )
}