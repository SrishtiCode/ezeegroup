import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'

const values = [
  { icon: '💡', name: 'Innovation',      desc: 'Pushing boundaries to create products that define tomorrow.' },
  { icon: '🎯', name: 'Customer Focus',  desc: 'Every decision starts with our customer needs and aspirations.' },
  { icon: '⭐', name: 'Quality',         desc: 'Uncompromising standards from design to delivery.' },
  { icon: '🎨', name: 'Creativity',      desc: 'Design thinking meets engineering for beautiful products.' },
  { icon: '🔮', name: 'Future Thinking', desc: 'Building for where the world is going, not where it has been.' },
]

export default function Vision() {
  return (
    <PageWrapper>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <Reveal><span className="sec-label">Sustainability & Vision</span></Reveal>
        <Reveal delay={0.1}>
          <h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,76px)', maxWidth: 680 }}>
            What We <em>Stand For</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="sec-body" style={{ maxWidth: 560, marginTop: 18 }}>
            Our vision and mission are the compass that guides every decision we make —
            from product design to business strategy.
          </p>
        </Reveal>
      </section>

      {/* VISION + MISSION */}
      <section style={s.vmSection}>
        <div style={s.vmGrid}>
          <Reveal delay={0.1}>
            <motion.div style={s.vmCard} whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,191,255,0.15)' }}>
              <div style={s.vmCardTop} />
              <div style={s.vmIcon}>🔭</div>
              <h2 style={s.vmTitle}>Our Vision</h2>
              <p style={s.vmBody}>
                To build global brands that combine technology, creativity and cultural relevance
                while empowering the next generation of consumers.
              </p>
              <div style={s.vmQuote}>
                "Technology + Creativity + Culture = Ezee Groups"
              </div>
            </motion.div>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.div style={{ ...s.vmCard, borderColor: 'rgba(0,193,124,0.3)' }} whileHover={{ y: -6, boxShadow: '0 20px 56px rgba(0,193,124,0.12)' }}>
              <div style={{ ...s.vmCardTop, background: 'linear-gradient(90deg,#00c17c,#00e896)' }} />
              <div style={{ ...s.vmIcon, background: 'rgba(0,193,124,0.1)', border: '1.5px solid rgba(0,193,124,0.25)' }}>🚀</div>
              <h2 style={s.vmTitle}>Our Mission</h2>
              <p style={s.vmBody}>
                To create innovative products and digital brands that enhance everyday living —
                by merging manufacturing excellence with the creativity and energy of Gen-Z culture.
              </p>
              <div style={{ ...s.vmQuote, borderColor: 'rgba(0,193,124,0.25)', color: '#00c17c' }}>
                "Innovate. Create. Elevate."
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={s.valuesSection}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="sec-label">Our Foundation</span>
          <h2 className="sec-title">Core <em>Values</em></h2>
          <p className="sec-body" style={{ maxWidth: 500, margin: '16px auto 0' }}>
            Five principles that shape our culture, our products, and our people.
          </p>
        </Reveal>
        <div style={s.valuesGrid}>
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div style={s.valCard} whileHover={{ y: -8, borderColor: '#00BFFF', boxShadow: '0 16px 44px rgba(0,191,255,0.14)', background: '#e6f9ff' }}>
                <div style={s.valNumBg}>{String(i + 1).padStart(2, '0')}</div>
                <span style={{ fontSize: 32, display: 'block', marginBottom: 14 }}>{v.icon}</span>
                <div style={s.valName}>{v.name}</div>
                <p style={s.valDesc}>{v.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY STRIP */}
      <section style={s.sustainSection}>
        <div style={s.sustainInner}>
          <Reveal direction="left" style={{ flex: 1 }}>
            <span className="sec-label">Sustainability</span>
            <h2 className="sec-title" style={{ marginBottom: 20 }}>
              Building for a <span className="grn">Better Tomorrow</span>
            </h2>
            <div className="sec-div" />
            <p className="sec-body">
              At Ezee Groups, we believe that innovation and responsibility go hand in hand.
              Every product we design, every process we run — we think about its impact on
              people, communities, and the planet.
            </p>
            <p className="sec-body" style={{ marginTop: 14 }}>
              From sustainable packaging at Ezee Store to ethical sourcing at Ezee Labs,
              we are committed to doing business the right way.
            </p>
            <div style={s.sustainPills}>
              {['Ethical Sourcing','Sustainable Packaging','Digital-First','Gen-Z Empowerment'].map(t => (
                <span key={t} className="chip"><span className="chip-dot" />{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" style={{ flex: 1 }}>
            <div style={s.sustainImg}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Sustainability" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={s.cta}>
        <Reveal>
          <h2 style={s.ctaTitle}>Aligned with Our <em>Vision?</em></h2>
          <p className="sec-body" style={{ marginTop: 16 }}>
            Partner with us or join the team to build the future together.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/careers" className="btn-sky">Join Our Team →</Link>
            <Link to="/contact" className="btn-green-outline">Partner With Us</Link>
          </div>
        </Reveal>
      </section>

    </PageWrapper>
  )
}

const s = {
  hero: { padding: '80px 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' },
  vmSection: { padding: '100px 80px', background: '#fff' },
  vmGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  vmCard: { background: '#f7feff', border: '1.5px solid rgba(0,191,255,0.2)', borderRadius: 20, padding: '44px 40px', position: 'relative', overflow: 'hidden', transition: 'all 0.35s' },
  vmCardTop: { position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#00BFFF,#33CFFF)' },
  vmIcon: { width: 54, height: 54, borderRadius: 13, background: 'rgba(0,191,255,0.1)', border: '1.5px solid rgba(0,191,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 },
  vmTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 32, fontWeight: 700, color: '#0d2233', marginBottom: 14 },
  vmBody: { fontSize: 15, fontWeight: 300, color: '#3a5a6a', lineHeight: 1.82 },
  vmQuote: { marginTop: 24, padding: '14px 20px', borderRadius: 10, background: 'rgba(0,191,255,0.06)', border: '1px solid rgba(0,191,255,0.18)', fontSize: 13, fontStyle: 'italic', color: '#00BFFF', fontWeight: 500 },
  valuesSection: { padding: '100px 80px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 50%,#e6fff5 100%)' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 },
  valCard: { background: '#fff', border: '1.5px solid rgba(0,191,255,0.15)', borderRadius: 16, padding: '28px 20px', textAlign: 'center', transition: 'all 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' },
  valNumBg: { position: 'absolute', top: 10, right: 14, fontFamily: '"Cormorant Garamond",serif', fontSize: 48, fontWeight: 800, color: 'rgba(0,191,255,0.07)', lineHeight: 1 },
  valName: { fontFamily: '"Cormorant Garamond",serif', fontSize: 20, fontWeight: 700, color: '#0d2233', marginBottom: 10 },
  valDesc: { fontSize: 13, fontWeight: 300, color: '#3a5a6a', lineHeight: 1.7 },
  sustainSection: { padding: '100px 80px', background: '#fff' },
  sustainInner: { display: 'flex', gap: 80, alignItems: 'center' },
  sustainPills: { display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 },
  sustainImg: { flex: 1, borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' },
  cta: { padding: 80, background: 'linear-gradient(135deg,rgba(0,191,255,0.07),rgba(0,193,124,0.05))', textAlign: 'center', borderTop: '1.5px solid rgba(0,191,255,0.12)' },
  ctaTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: '#0d2233' },
}
