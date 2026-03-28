// CustomCursor.jsx
import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(2)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(0,193,124,0.7)'
    }
    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(0,191,255,0.5)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    animate()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dotRef}  style={dotStyle}  />
      <div ref={ringRef} style={ringStyle} />
    </>
  )
}

const dotStyle = {
  width: 8, height: 8, background: '#00BFFF', borderRadius: '50%',
  position: 'fixed', transform: 'translate(-50%,-50%)',
  pointerEvents: 'none', zIndex: 9999,
  transition: 'transform 0.2s',
}
const ringStyle = {
  width: 36, height: 36, border: '1.5px solid rgba(0,191,255,0.5)',
  borderRadius: '50%', position: 'fixed', transform: 'translate(-50%,-50%)',
  pointerEvents: 'none', zIndex: 9998,
  transition: 'transform 0.15s, border-color 0.2s',
}
