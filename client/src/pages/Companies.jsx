import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'
import labImg from '../assets/WhatsApp Image 2026-03-20 at 7.44.10 AM.jpeg'
import labImg1 from '../assets/WhatsApp Image 2026-03-20 at 7.44.10 AM (2).jpeg'
import labImg2 from '../assets/WhatsApp Image 2026-03-20 at 7.44.10 AM.jpeg'
import labImg3 from '../assets/WhatsApp Image 2026-03-20 at 7.44.11 AM (1).jpeg'
import labImg4 from '../assets/WhatsApp Image 2026-03-20 at 7.44.11 AM.jpeg'

const companies = [
  {
    id: 'store',
    name: 'Ezee Store',
    tag: 'Electronics Retail & Manufacturing',
    tagline: 'Redefining Everyday Technology',
    desc: 'Ezee Store designs, manufactures and sells innovative consumer electronic products. We own the entire lifecycle — from concept and design to manufacturing and retail — ensuring every product meets the highest standards of quality and innovation.',
    img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
    color: '#00BFFF',
    features: ['Product Design & Engineering', 'In-House Manufacturing', 'Consumer Electronics Retail', 'Quality Assurance', 'After-Sales Support', 'R&D Innovation Lab'],
    stat1: { num: '100+', label: 'Products' },
    stat2: { num: 'Gen-Z', label: 'Target Audience' },
  },

  {
    id: 'labs',
    name: 'Ezee Labs',
    tag: 'Lifestyle E-Commerce & Dropshipping',
    tagline: 'Spiritual Style for the Digital Age',
    desc: 'Ezee Labs is a drop shipping platform selling spiritual and fashionable jewellery designed for Gen-Z. We bridge the gap between ancient spiritual traditions and modern fashion aesthetics, delivering meaningful, beautifully crafted pieces directly to customers worldwide.',
    img: labImg4,

    // 🔥 UPDATED: 5 IMAGES
    images: [
      labImg1,
      labImg2,
      labImg3,
      labImg4,
      labImg
    ],

    color: '#00c17c',
    features: ['Spiritual Jewellery Curation', 'Fashion-Forward Designs', 'Dropshipping Platform', 'Gen-Z Community Building', 'Global Delivery Network', 'Trend-First Catalogue'],
    stat1: { num: 'D2C', label: 'Business Model' },
    stat2: { num: '24/7', label: 'Online Store' },
  },
]

export default function Companies() {
  const [active, setActive] = useState('store')
  const co = companies.find(c => c.id === active)

  return (
    <PageWrapper>

      {/* PAGE HERO */}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <Reveal><span className="sec-label">Our Companies</span></Reveal>
        <Reveal delay={0.1}>
          <h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,76px)', maxWidth: 700 }}>
            Two Brands. <em>One Vision.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-body" style={{ maxWidth: 560, marginTop: 18 }}>
            Each subsidiary is built to lead its industry — powered by technology,
            driven by culture, designed for the next generation.
          </p>
        </Reveal>
      </section>

      {/* TAB SWITCHER */}
      <section style={s.tabSection}>
        <div style={s.tabs}>
          {companies.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} style={s.tab(active === c.id, c.color)}>
              {c.name}
              {active === c.id && <motion.div layoutId="tabBar" style={{ ...s.tabBar, background: c.color }} />}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
            <div style={s.coDetail}>

              {/* LEFT */}
              <div style={s.coLeft}>
                <span style={{ ...s.coTag, background: `${co.color}20`, color: co.color, border: `1.5px solid ${co.color}40` }}>{co.tag}</span>
                <h2 style={s.coName}>{co.name}</h2>
                <p style={s.coTagline}>{co.tagline}</p>
                <div className="sec-div" />
                <p className="sec-body">{co.desc}</p>

                <div style={s.features}>
                  {co.features.map((f, i) => (
                    <div key={i} style={s.feature}>
                      <div style={{ ...s.featureDot, background: co.color }} />
                      {f}
                    </div>
                  ))}
                </div>

                <div style={s.coStats}>
                  <div style={s.coStat}>
                    <span style={{ ...s.coStatNum, color: co.color }}>{co.stat1.num}</span>
                    <span style={s.coStatLabel}>{co.stat1.label}</span>
                  </div>
                  <div style={s.coStat}>
                    <span style={{ ...s.coStatNum, color: co.color }}>{co.stat2.num}</span>
                    <span style={s.coStatLabel}>{co.stat2.label}</span>
                  </div>
                </div>

                <Link to="/contact" className="btn-sky" style={{ marginTop: 32, display: 'inline-flex' }}>
                  Get In Touch →
                </Link>
              </div>

              {/* RIGHT */}
              <div>
                <div style={s.coImgWrap}>
                  <motion.img
                    key={co.img}
                    src={co.img}
                    alt={co.name}
                    style={s.coImg}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div style={{ ...s.coImgOverlay, background: `linear-gradient(to top, ${co.color}25, transparent)` }} />
                  <div style={{ ...s.coBadge, background: co.color }}>
                    <span style={s.badgeName}>{co.name}</span>
                  </div>
                </div>

                {/* 🔥 GALLERY */}
                {co.id === 'labs' && co.images && (
                  <div style={s.gallery}>
                    {co.images.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt="Ezee Labs"
                        style={s.galleryImg}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </section>

    </PageWrapper>
  )
}

const s = {
  hero: { padding: '80px 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative' },
  heroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 },
  tabSection: { padding: '60px 80px 100px', background: '#fff' },
  tabs: { display: 'flex', gap: 4, marginBottom: 52, borderBottom: '2px solid rgba(0,191,255,0.12)' },
  tab: (active, color) => ({ padding: '14px 32px', fontSize: 16, color: active ? color : '#3a5a6a', background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }),
  tabBar: { position: 'absolute', bottom: -2, left: 0, right: 0, height: 2 },

  coDetail: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 },

  coTag: { padding: '6px 16px', borderRadius: 100, fontSize: 11, marginBottom: 20 },
  coName: { fontSize: 50 },
  coTagline: { fontSize: 16 },

  features: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  feature: { display: 'flex', gap: 8 },

  coStats: { display: 'flex', gap: 40 },
  coStatNum: { fontSize: 40 },

  coImgWrap: { borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', position: 'relative' },
  coImg: { width: '100%', height: '100%', objectFit: 'cover' },
  coImgOverlay: { position: 'absolute', inset: 0 },
  coBadge: { position: 'absolute', bottom: 24, left: 24 },
  badgeName: { color: '#fff' },

  // 🔥 BIGGER GALLERY
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16,
    marginTop: 24,
  },

  galleryImg: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    borderRadius: 14,
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
}