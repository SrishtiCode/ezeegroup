import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'

const allNews = [
  { id: 1, cat: 'Ezee Store',   date: 'Mar 2025', title: 'New Range of Consumer Electronics Launching Q1 2025',              desc: 'Ezee Store announces a groundbreaking range of consumer electronics designed specifically for the Gen-Z market, featuring AI-powered personalisation and sustainable manufacturing.', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=70' },
  { id: 2, cat: 'Ezee Labs',    date: 'Feb 2025', title: 'Exclusive Gen-Z Spiritual Jewellery Collection Drops This Season', desc: 'Ezee Labs launches its most ambitious collection yet — a fusion of ancient spiritual symbols and contemporary Gen-Z aesthetics, available exclusively through the dropshipping platform.', img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=70' },
  { id: 3, cat: 'Company News', date: 'Feb 2025', title: 'Ezee Groups Announces Expansion into New Product Categories',      desc: 'Building on strong growth across both subsidiaries, Ezee Groups reveals plans to expand into new product categories for 2025, targeting additional Gen-Z consumer segments.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=70' },
  { id: 4, cat: 'Ezee Store',   date: 'Jan 2025', title: 'Strategic Partnership with Leading Manufacturers Announced',       desc: 'Ezee Store signs a landmark partnership with global electronics manufacturers to accelerate its product innovation pipeline and reduce time-to-market for new devices.', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=70' },
  { id: 5, cat: 'Ezee Labs',    date: 'Dec 2024', title: 'Dropshipping Platform Hits Major Growth Milestone',                desc: 'Ezee Labs celebrates a significant milestone in platform growth, with a record number of new sellers joining the spiritual jewellery dropshipping ecosystem in Q4 2024.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70' },
  { id: 6, cat: 'Innovation',   date: 'Nov 2024', title: 'AI-Driven Personalisation Integrated Across All Digital Channels', desc: 'Ezee Groups integrates advanced AI personalisation engines across all digital storefronts, enabling hyper-personalised shopping experiences for every customer.', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=70' },
]

const cats = ['All', 'Ezee Store', 'Ezee Labs', 'Company News', 'Innovation']

export default function News() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? allNews : allNews.filter(n => n.cat === active)

  return (
    <PageWrapper>
      <section style={s.hero}>
        <div style={s.heroBg} />
        <Reveal><span className="sec-label">News & Updates</span></Reveal>
        <Reveal delay={0.1}><h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,76px)' }}>Latest From <em>Ezee Groups</em></h1></Reveal>
      </section>

      <section style={s.newsSection}>
        {/* Filter tabs */}
        <Reveal style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)} style={s.filterBtn(active === c)}>
              {c}
            </button>
          ))}
        </Reveal>

        {/* Grid */}
        <motion.div style={s.newsGrid} layout>
          {filtered.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.08}>
              <motion.div style={s.newsCard} layout whileHover={{ y: -8, boxShadow: '0 20px 56px rgba(0,191,255,0.16)', borderColor: 'rgba(0,191,255,0.4)' }}>
                <div style={s.newsImgWrap}>
                  <img src={n.img} alt={n.title} style={s.newsImg} />
                  <div style={s.newsOverlay} />
                  <span style={s.newsCat}>{n.cat}</span>
                </div>
                <div style={s.newsBody}>
                  <span style={s.newsDate}>{n.date}</span>
                  <h3 style={s.newsTitle}>{n.title}</h3>
                  <p style={s.newsDesc}>{n.desc}</p>
                  <button style={s.newsRead}>Read More →</button>
                </div>
                <div style={s.newsBar} />
              </motion.div>
            </Reveal>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  )
}

const s = {
  hero: { padding: '80px 80px 80px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' },
  newsSection: { padding: '60px 80px 100px', background: '#fff' },
  filterBtn: (active) => ({ padding: '9px 22px', borderRadius: 100, fontFamily: '"Outfit",sans-serif', fontSize: 13.5, fontWeight: active ? 600 : 400, background: active ? 'linear-gradient(135deg,#00BFFF,#33CFFF)' : '#f7feff', color: active ? '#fff' : '#3a5a6a', border: active ? 'none' : '1.5px solid rgba(0,191,255,0.2)', cursor: 'pointer', transition: 'all 0.25s', boxShadow: active ? '0 4px 16px rgba(0,191,255,0.3)' : 'none' }),
  newsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 },
  newsCard: { background: '#fff', borderRadius: 18, overflow: 'hidden', border: '1.5px solid rgba(0,191,255,0.15)', cursor: 'pointer', position: 'relative', transition: 'all 0.4s', display: 'flex', flexDirection: 'column' },
  newsImgWrap: { height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 },
  newsImg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' },
  newsOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, transparent 60%)' },
  newsCat: { position: 'absolute', top: 16, left: 16, background: 'linear-gradient(135deg,#00BFFF,#33CFFF)', color: '#fff', padding: '4px 12px', borderRadius: 100, fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' },
  newsBody: { padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' },
  newsDate: { fontSize: 11.5, color: '#00BFFF', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 },
  newsTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 20, fontWeight: 700, color: '#0d2233', lineHeight: 1.25, marginBottom: 10 },
  newsDesc: { fontSize: 13.5, fontWeight: 300, color: '#3a5a6a', lineHeight: 1.7, flex: 1 },
  newsRead: { marginTop: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600, color: '#00BFFF', fontFamily: '"Outfit",sans-serif', padding: 0, textAlign: 'left' },
  newsBar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#00BFFF,#00c17c)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s' },
}
