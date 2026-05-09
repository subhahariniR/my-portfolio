import { useEffect, useRef } from 'react'

const roles = ['React Developer', 'PWA Builder', 'SEO Specialist', 'Frontend Engineer']

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    let roleIndex = 0, charIndex = 0, deleting = false, timer

    const type = () => {
      const word = roles[roleIndex]
      if (typedRef.current) {
        typedRef.current.textContent = deleting ? word.slice(0, charIndex--) : word.slice(0, charIndex++)
      }
      if (!deleting && charIndex > word.length) { deleting = true; timer = setTimeout(type, 1500); return }
      if (deleting && charIndex < 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length }
      timer = setTimeout(type, deleting ? 50 : 90)
    }
    timer = setTimeout(type, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4rem',
      paddingTop: '80px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
      }}>

        {/* LEFT */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(232,201,126,0.08)',
            border: '1px solid var(--border)',
            borderRadius: '100px',
            padding: '0.35rem 1rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.72rem',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: 7, height: 7, background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            Available for opportunities
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            lineHeight: 1.08,
            marginBottom: '0.5rem',
          }}>
            Shubha<em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>harini</em><br />R.
          </h1>

          <div style={{
            fontSize: '1.05rem',
            color: 'var(--accent2)',
            fontFamily: "'Space Mono', monospace",
            marginBottom: '1.5rem',
            minHeight: '1.6rem',
            display: 'flex', alignItems: 'center', gap: '2px',
          }}>
            <span ref={typedRef} />
            <span style={{
              display: 'inline-block', width: '2px', height: '1.1em',
              background: 'var(--accent)',
              animation: 'blink 1s infinite',
              verticalAlign: 'text-bottom',
            }} />
          </div>

          <p style={{
            fontSize: '1rem', color: 'var(--muted)',
            marginBottom: '2rem', lineHeight: 1.75, maxWidth: '460px',
          }}>
            Focused on creating meaningful, user-centric applications that address
            real-life challenges — from life-saving PWAs to production-grade platforms.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              background: 'var(--accent)', color: '#0a0a0f',
              padding: '0.8rem 2rem', borderRadius: '4px',
              fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
              letterSpacing: '0.08em', textDecoration: 'none', fontWeight: 700,
              transition: 'transform 0.2s, box-shadow 0.2s', display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(232,201,126,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >View Projects ↓</a>

            <a href="mailto:jeevikaravi03@gmail.com" style={{
              border: '1px solid var(--border)', color: 'var(--text)',
              padding: '0.8rem 2rem', borderRadius: '4px',
              fontFamily: "'Space Mono', monospace", fontSize: '0.78rem',
              letterSpacing: '0.08em', textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s', display: 'inline-block',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = '' }}
            >Get in Touch</a>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{
            width: 320, height: 320, borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, rgba(232,201,126,0.2), rgba(126,184,232,0.1) 50%, transparent 70%)',
            border: '1px solid rgba(232,201,126,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '5.5rem', fontWeight: 700,
              color: 'var(--accent)', opacity: 0.12,
              userSelect: 'none',
            }}>SR</span>
          </div>

          <div style={{ position: 'absolute', right: '-10px', top: '55px', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[
              { label: '⚡ React Developer', color: 'var(--accent)', delay: '0s' },
              { label: '🔍 SEO Specialist', color: 'var(--accent2)', delay: '0.5s', ml: '1.5rem' },
              { label: '📱 PWA Builder', color: 'var(--accent3)', delay: '1s' },
            ].map((tag, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '6px', padding: '0.4rem 0.9rem',
                fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
                color: tag.color, animation: `float 3s ${tag.delay} ease-in-out infinite`,
                marginLeft: tag.ml || 0, whiteSpace: 'nowrap',
              }}>{tag.label}</div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      `}</style>
    </div>
  )
}