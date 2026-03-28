import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/logo-groups.png'   // ✅ logo import

export default function Footer() {
  return (
    <footer style={s.footer}>

      {/* Top gradient bar */}
      <div style={s.topBar} />

      <div style={s.wrap}>
        <div style={s.grid}>

          {/* 🔥 BRAND SECTION */}
          <div>
            <Link to="/" style={s.logo}>

              {/* ✅ LOGO IMAGE */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <img 
                  src={logo}
                  alt="EZee Group Logo"
                  style={s.logoImage}
                />
              </motion.div>

              <div>
                <span style={s.logoName}>
                  <span style={{ color: '#1A8A4A' }}>EZee</span>
                  <span style={{ color: '#00BFFF' }}> Groups</span>
                </span>
                <span style={s.logoSub}>Next-Gen Innovation</span>
              </div>
            </Link>

            <p style={s.brandText}>
              Building the future of technology and lifestyle innovation
              — one brand at a time.
            </p>

            {/* 🔥 SOCIAL ICONS */}
            <div style={s.socials}>
              {[
                ['in','LinkedIn'],
                ['ig','Instagram'],
                ['tw','Twitter'],
                ['yt','YouTube']
              ].map(([k,l]) => (
                <motion.a key={k} href="#" style={s.soc}
                  whileHover={{ y: -4, borderColor: '#00BFFF', color: '#00BFFF' }}
                  title={l}>
                  {k}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 🔥 COMPANIES */}
          <div>
            <h4 style={s.colHead}>Companies</h4>
            <ul style={s.colList}>
              <li><Link to="/companies" style={s.colLink}>Ezee Store</Link></li>
              <li><Link to="/companies" style={s.colLink}>Ezee Labs</Link></li>
            </ul>
          </div>

          {/* 🔥 NAVIGATION */}
          <div>
            <h4 style={s.colHead}>Navigate</h4>
            <ul style={s.colList}>
              {[
                ['About Us','/about'],
                ['Innovation','/innovation'],
                ['Vision','/vision'],
                ['News','/news'],
                ['Careers','/careers']
              ].map(([l,p]) => (
                <li key={p}>
                  <Link to={p} style={s.colLink}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔥 CONTACT */}
          <div>
            <h4 style={s.colHead}>Contact</h4>
            <ul style={s.colList}>
              <li>
                <a href="mailto:info.ezeegroups@gmail.com" style={s.colLink}>
                  info.ezeegroups@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:info.ezeelabs@gmail.com" style={s.colLink}>
                  info.ezeelabs@gmail.com
                </a>
              </li>
            </ul>

            {/* 🔥 BRAND COLORS */}
            <div style={s.swatches}>
              {['#1A8A4A','#2AB870','#3DD68C','#00BFFF','#E8883A'].map(c => (
                <div key={c} style={{
                  width: 18, height: 18, borderRadius: '50%',
                  background: c
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 BOTTOM BAR */}
        <div style={s.bottom}>
          <span style={s.copy}>
            © 2025 Ezee Groups. All rights reserved.
          </span>

          <div style={s.bottomLinks}>
            <Link to="/contact" style={s.bottomLink}>Privacy Policy</Link>
            <Link to="/contact" style={s.bottomLink}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const s = {
  footer: {
    background: 'linear-gradient(160deg, #e6f9ff 0%, #ffffff 45%, #e8fdf3 100%)',
  },

  topBar: {
    height: 4,
    background: 'linear-gradient(90deg,#1A8A4A,#2AB870,#00BFFF,#3DD68C,#E8883A,#1A8A4A)',
    backgroundSize: '300% auto',
    animation: 'shimmer 6s linear infinite',
  },

  wrap: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '56px 80px 0'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: 48,
    paddingBottom: 44,
    borderBottom: '1.5px solid rgba(26,138,74,0.12)'
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    textDecoration: 'none',
    marginBottom: 16
  },

  // 🔥 LOGO STYLE
  logoImage: {
    height: 100,
    width: 'auto',
    objectFit: 'contain',
  },

  logoName: {
    display: 'block',
    fontSize: 19,
    fontWeight: 700,
    fontFamily: '"Outfit",sans-serif',
    lineHeight: 1
  },

  logoSub: {
    fontSize: 9,
    letterSpacing: 3,
    color: '#E8883A',
    textTransform: 'uppercase',
    display: 'block',
    marginTop: 3
  },

  brandText: {
    fontSize: 14,
    color: '#2d5a3a',
    lineHeight: 1.8,
    maxWidth: 280,
    marginBottom: 20
  },

  socials: {
    display: 'flex',
    gap: 10
  },

  soc: {
    width: 38,
    height: 38,
    borderRadius: 8,
    border: '1.5px solid rgba(26,138,74,0.2)',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2d5a3a',
    fontSize: 12,
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'all 0.25s'
  },

  colHead: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: '#1A8A4A',
    marginBottom: 18
  },

  colList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },

  colLink: {
    fontSize: 14,
    color: '#2d5a3a',
    textDecoration: 'none',
    transition: 'all 0.2s'
  },

  swatches: {
    display: 'flex',
    gap: 6,
    marginTop: 20
  },

  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 0'
  },

  copy: {
    fontSize: 13,
    color: '#6a8a78'
  },

  bottomLinks: {
    display: 'flex',
    gap: 24
  },

  bottomLink: {
    fontSize: 13,
    color: '#6a8a78',
    textDecoration: 'none'
  },
}