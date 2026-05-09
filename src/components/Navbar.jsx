import { useEffect, useState } from 'react'

const links = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.2rem 4rem',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.7)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.3s',
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.3rem',
        color: 'var(--accent)',
      }}>S · R</div>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`} style={{
              color: active === link ? 'var(--accent)' : 'var(--muted)',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Space Mono', monospace",
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = active === link ? 'var(--accent)' : 'var(--muted)'}
            >{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}