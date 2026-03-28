import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/logo-groups.png'

const navLinks = [
  { path: '/',      label: 'Home' },
  { path: '/about',      label: 'About' },
  { path: '/companies',  label: 'Our Companies' },
  { path: '/innovation', label: 'Innovation' },
  { path: '/vision',     label: 'Vision' },
  { path: '/news',       label: 'News' },
  { path: '/careers',    label: 'Careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <motion.nav
      style={s.nav(scrolled)}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
    >
      {/* Logo */}
      <Link to="/" style={s.logo}>
        <motion.div whileHover={{ scale: 1.05 }}>
  <img 
    src={logo}
    alt="EZee Group Logo"
    style={s.logoImage}
  />
</motion.div>
        <div>
          <span style={s.logoName}>
            <span style={s.logoEz}>EZee</span>
            <span style={s.logoGroups}> Groups</span>
          </span>
          <span style={s.logoSub}>Next-Gen Innovation</span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul style={s.navLinks}>
        {navLinks.map(link => (
          <li key={link.path}>
            <NavLink to={link.path} style={({ isActive }) => s.navLink(isActive)}>
              {link.label}
            </NavLink>
          </li>
        ))}
        <li>
          <Link to="/contact" style={s.navCta}>Contact Us →</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button style={s.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2,
            background: '#0d2218', borderRadius: 2, transition: 'all 0.3s',
            opacity: menuOpen && i === 1 ? 0 : 1,
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
              : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none'
              : 'none',
          }}/>
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div style={s.mobileMenu}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.path}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink to={link.path} style={({ isActive }) => s.mobileLink(isActive)}>
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <Link to="/contact" style={s.mobileCta}>Contact Us →</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const s = {
  nav: (scrolled) => ({
    marginLeft:'1px',
    position: 'fixed', top: 3, left: 0, right: 0, zIndex: 1000,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 5px', height: scrolled ? '62px' : '76px',
    background: 'rgba(255,255,255,0.95)',
    borderBottom: '1px solid rgba(0,191,255,0.15)',
    backdropFilter: 'blur(16px)',
    boxShadow: scrolled ? '0 4px 24px rgba(26,138,74,0.1)' : 'none',
    transition: 'all 0.4s ease',
  }),

  logo: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },

  // 🔥 YE ADD KARNA HAI (IMPORTANT)
  logoImage: {
    height: 200,
    width: 'auto',
    objectFit: 'contain',
  },

  logoMark: {
    width: 46, height: 46, borderRadius: 11,
    background: 'linear-gradient(135deg,#00BFFF,#1A8A4A)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },

  logoName: { display: 'block', fontSize: 20, fontWeight: 700, fontFamily: '"Outfit",sans-serif', lineHeight: 1 },
  logoEz:     { color: '#1A8A4A' },
  logoGroups: { color: '#00BFFF' },
  logoSub: { fontSize: 9, letterSpacing: 3, color: '#E8883A', textTransform: 'uppercase', display: 'block', marginTop: 3 },

  navLinks: { display: 'flex', alignItems: 'center', gap: 28, listStyle: 'none' },

  navLink: (isActive) => ({
    color: isActive ? '#1A8A4A' : '#2d5a3a',
    textDecoration: 'none', fontSize: 13.5, fontWeight: isActive ? 600 : 500,
    position: 'relative', paddingBottom: 3,
    borderBottom: isActive ? '2px solid #1A8A4A' : '2px solid transparent',
    transition: 'color 0.2s',
  }),

  navCta: {
    background: 'linear-gradient(135deg,#00BFFF,#33CFFF)',
    color: '#fff', padding: '10px 24px', borderRadius: 7,
    fontWeight: 600, fontSize: 13.5, textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(0,191,255,0.3)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    fontFamily: '"Outfit",sans-serif',
  },

  hamburger: {
    display: 'none', flexDirection: 'column', gap: 5,
    background: 'none', border: 'none', cursor: 'pointer', padding: 8,
  },

  mobileMenu: {
    position: 'absolute', top: '100%', left: 0, right: 0,
    background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(16px)',
    padding: '24px 32px', borderBottom: '2px solid rgba(0,191,255,0.15)',
    display: 'flex', flexDirection: 'column', gap: 16,
    boxShadow: '0 8px 32px rgba(26,138,74,0.12)',
  },

  mobileLink: (isActive) => ({
    color: isActive ? '#1A8A4A' : '#0d2218',
    textDecoration: 'none', fontSize: 16, fontWeight: isActive ? 600 : 500,
    padding: '8px 0', borderBottom: '1px solid rgba(26,138,74,0.1)', display: 'block',
  }),

  mobileCta: {
    background: 'linear-gradient(135deg,#00BFFF,#1A8A4A)',
    color: '#fff', padding: '12px 24px', borderRadius: 8,
    fontWeight: 600, fontSize: 15, textDecoration: 'none',
    textAlign: 'center', marginTop: 8, fontFamily: '"Outfit",sans-serif',
  },
}
