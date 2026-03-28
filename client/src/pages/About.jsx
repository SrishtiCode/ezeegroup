import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'

const values = [
  { icon: '💡', name: 'Innovation',      desc: 'We push boundaries and challenge the status quo to create products that define tomorrow.' },
  { icon: '🎯', name: 'Customer Focus',  desc: 'Every decision starts with the customer — their needs, habits, and aspirations guide us.' },
  { icon: '⭐', name: 'Quality',         desc: 'Uncompromising standards in everything we build, from hardware to digital experiences.' },
  { icon: '🎨', name: 'Creativity',      desc: 'We blend design thinking with engineering to craft products that are as beautiful as they are functional.' },
  { icon: '🔮', name: 'Future Thinking', desc: 'We build for where the world is going, not where it has been.' },
]

export default function About() {
  return (
    <PageWrapper>

      {/* ── PAGE HERO ── */}
      <section style={s.pageHero}>
        <div style={s.pageHeroBg} />
        <div style={s.pageHeroContent}>
          <Reveal><span className="sec-label">About Ezee Groups</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,80px)', marginBottom: 24 }}>
              A New Kind of <em>Innovation Company</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="sec-body" style={{ maxWidth: 600 }}>
              We are not just building products — we are building the infrastructure
              of the next generation's lifestyle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section style={s.storySection}>
        <div style={s.storyGrid}>
          <Reveal direction="left" style={{ flex: 1 }}>
            <span className="sec-label">Our Story</span>
            <h2 className="sec-title" style={{ marginBottom: 20 }}>
              Built for the <span className="grn">Digital Generation</span>
            </h2>
            <div className="sec-div" />
            <p className="sec-body">
              Ezee Groups was founded with a single bold belief — that the next generation
              of consumers deserves brands that truly understand them. From electronics that
              simplify life to jewellery that carries spiritual meaning, we create products
              that resonate deeply with Gen-Z culture.
            </p>
            <p className="sec-body" style={{ marginTop: 14 }}>
              Our group brings together two powerful subsidiaries — Ezee Store and Ezee Labs —
              each leading their industry with innovation, design, and purpose.
            </p>
            <div style={{ display: 'flex', gap: 40, marginTop: 32 }}>
              {[['2', 'Subsidiaries'], ['2', 'Industries'], ['∞', 'Possibilities']].map(([n, l]) => (
                <div key={l}>
                  <span style={s.miniStat}>{n}</span>
                  <span style={s.miniStatLabel}>{l}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal direction="right" style={{ flex: 1 }}>
            <div style={s.storyImgWrap}>
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80" alt="Ezee Groups" style={s.storyImg} />
              <div style={s.storyImgOverlay} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={s.valuesSection}>
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="sec-label">What Drives Us</span>
          <h2 className="sec-title">Our Core <em>Values</em></h2>
        </Reveal>
        <div style={s.valuesGrid}>
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div style={s.valCard} whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0,191,255,0.15)', borderColor: '#00BFFF' }}>
                <div style={s.valIcon}>{v.icon}</div>
                <div style={s.valName}>{v.name}</div>
                <p style={s.valDesc}>{v.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW STRIP ── */}
      <section style={s.overviewStrip}>
        <Reveal style={{ textAlign: 'center' }}>
          <span className="sec-label">Company Overview</span>
          <h2 className="sec-title" style={{ marginBottom: 20 }}>
            What We <em>Do</em>
          </h2>
          <p className="sec-body" style={{ maxWidth: 640, margin: '0 auto 48px' }}>
            Ezee Groups is a next-generation innovation company focused on technology products,
            manufacturing, and Gen-Z lifestyle brands. The group builds modern consumer
            businesses designed for the digital generation.
          </p>
        </Reveal>
        <div style={s.overviewCards}>
          {[
            { icon: '🏭', title: 'Manufacturing', desc: 'In-house product design and manufacturing excellence.' },
            { icon: '🌐', title: 'E-Commerce',    desc: 'Digital-first sales channels built for Gen-Z shoppers.' },
            { icon: '🔬', title: 'R&D',           desc: 'Continuous innovation and product development pipeline.' },
            { icon: '🤝', title: 'Partnerships',  desc: 'Strategic alliances with global suppliers and distributors.' },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div style={s.overviewCard} whileHover={{ y: -6, borderColor: '#00BFFF', background: '#e6f9ff' }}>
                <span style={{ fontSize: 28, marginBottom: 12, display: 'block' }}>{c.icon}</span>
                <div style={s.overviewCardTitle}>{c.title}</div>
                <p style={{ fontSize: 13.5, color: '#3a5a6a', lineHeight: 1.65 }}>{c.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={s.cta}>
        <Reveal>
          <h2 style={s.ctaTitle}>Ready to Know More?</h2>
          <p className="sec-body" style={{ marginTop: 16 }}>
            Explore our companies or get in touch with the team.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <Link to="/companies" className="btn-sky">Our Companies →</Link>
            <Link to="/contact"   className="btn-green-outline">Contact Us</Link>
          </div>
        </Reveal>
      </section>

    </PageWrapper>
  )
}

const s = {
  pageHero: { padding: '80px 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  pageHeroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' },
  pageHeroContent: { position: 'relative', zIndex: 1, maxWidth: 800 },
  storySection: { padding: '100px 80px', background: '#fff' },
  storyGrid: { display: 'flex', gap: 80, alignItems: 'center' },
  storyImgWrap: { borderRadius: 20, overflow: 'hidden', aspectRatio: '5/4', position: 'relative' },
  storyImg: { width: '100%', height: '100%', objectFit: 'cover' },
  storyImgOverlay: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,191,255,0.1), transparent)' },
  miniStat: { fontFamily: '"Cormorant Garamond",serif', fontSize: 44, fontWeight: 800, background: 'linear-gradient(135deg,#00BFFF,#00c17c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'block', lineHeight: 1 },
  miniStatLabel: { fontSize: 12, color: '#6a8a9a', letterSpacing: 0.5 },
  valuesSection: { padding: '100px 80px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 50%,#e6fff5 100%)' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 },
  valCard: { background: '#fff', border: '1.5px solid rgba(0,191,255,0.18)', borderRadius: 16, padding: '32px 28px', cursor: 'default', transition: 'all 0.35s' },
  valIcon: { fontSize: 30, marginBottom: 14 },
  valName: { fontFamily: '"Cormorant Garamond",serif', fontSize: 22, fontWeight: 700, color: '#0d2233', marginBottom: 10 },
  valDesc: { fontSize: 14, fontWeight: 300, color: '#3a5a6a', lineHeight: 1.75 },
  overviewStrip: { padding: '100px 80px', background: '#fff' },
  overviewCards: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 },
  overviewCard: { background: '#f7feff', border: '1.5px solid rgba(0,191,255,0.15)', borderRadius: 14, padding: '28px 22px', transition: 'all 0.3s', cursor: 'default' },
  overviewCardTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 20, fontWeight: 700, color: '#0d2233', marginBottom: 8 },
  cta: { padding: '80px', background: 'linear-gradient(135deg,rgba(0,191,255,0.07),rgba(0,193,124,0.05))', textAlign: 'center', borderTop: '1.5px solid rgba(0,191,255,0.12)' },
  ctaTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: '#0d2233' },
}
