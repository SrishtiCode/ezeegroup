// Innovation.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'

const pillars = [
  { icon: '🔬', title: 'Research & Development',    desc: 'Continuous investment in R&D to stay ahead of market trends and consumer needs.' },
  { icon: '🤖', title: 'AI & Personalisation',       desc: 'Leveraging artificial intelligence to create personalised customer experiences at scale.' },
  { icon: '📱', title: 'Digital-First Products',     desc: 'Every product we build is designed for the digital ecosystem from day one.' },
  { icon: '🌐', title: 'Global Supply Chain',        desc: 'Smart logistics and supplier networks enabling fast, efficient delivery worldwide.' },
  { icon: '♻️', title: 'Sustainable Manufacturing', desc: 'Responsible production processes that minimise environmental footprint.' },
  { icon: '📊', title: 'Data-Driven Decisions',      desc: 'Analytics and consumer insights powering every product and marketing decision.' },
]

export default function Innovation() {
  return (
    <PageWrapper>
      <section style={ps.hero}>
        <div style={ps.heroBg} />
        <Reveal><span className="sec-label">Innovation & Technology</span></Reveal>
        <Reveal delay={0.1}><h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,76px)', maxWidth: 700 }}>How We <em>Innovate</em></h1></Reveal>
        <Reveal delay={0.2}><p className="sec-body" style={{ maxWidth: 560, marginTop: 18 }}>Innovation is not a department at Ezee Groups — it is our culture. Every team, every product, every process is built around it.</p></Reveal>
      </section>

      <section style={{ padding: '100px 80px', background: '#fff' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="sec-label">Our Approach</span>
          <h2 className="sec-title">Six Pillars of <em>Innovation</em></h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div style={ps.pillarCard} whileHover={{ y: -8, borderColor: '#00BFFF', boxShadow: '0 16px 44px rgba(0,191,255,0.14)' }}>
                <span style={{ fontSize: 30, marginBottom: 16, display: 'block' }}>{p.icon}</span>
                <div style={ps.pillarTitle}>{p.title}</div>
                <p style={{ fontSize: 14, fontWeight: 300, color: '#3a5a6a', lineHeight: 1.75 }}>{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px', background: 'linear-gradient(135deg,rgba(0,191,255,0.07),rgba(0,193,124,0.05))', textAlign: 'center', borderTop: '1.5px solid rgba(0,191,255,0.12)' }}>
        <Reveal>
          <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: '#0d2233' }}>Want to Partner on <em style={{ color: '#00BFFF', fontStyle: 'italic' }}>Innovation?</em></h2>
          <p className="sec-body" style={{ marginTop: 16 }}>Reach out to explore collaboration opportunities.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-sky">Get In Touch →</Link>
            <Link to="/companies" className="btn-green-outline">Our Companies</Link>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  )
}

const ps = {
  hero: { padding: '80px 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' },
  pillarCard: { background: '#f7feff', border: '1.5px solid rgba(0,191,255,0.15)', borderRadius: 16, padding: '32px 28px', transition: 'all 0.35s', cursor: 'default' },
  pillarTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 22, fontWeight: 700, color: '#0d2233', marginBottom: 10 },
}
