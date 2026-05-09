import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      setTimeout(() => {
        ring.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`
      }, 60)
    }

    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="cursor" style={{
        position: 'fixed', top: 0, left: 0,
        width: '12px', height: '12px',
        background: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
      }} />
      <div id="cursor-ring" style={{
        position: 'fixed', top: 0, left: 0,
        width: '36px', height: '36px',
        border: '1.5px solid rgba(232,201,126,0.5)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'transform 0.25s ease',
      }} />
    </>
  )
}