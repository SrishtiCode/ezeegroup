import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import axios from 'axios'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'

const perks = [
  { icon: '🌍', title: 'Remote-First',       desc: 'Work from anywhere — great work happens everywhere.' },
  { icon: '⚡', title: 'Fast-Paced Growth',  desc: 'Move quickly, ship products, grow at startup speed.' },
  { icon: '🎨', title: 'Creative Freedom',   desc: 'Your ideas matter — bring your vision and own it.' },
  { icon: '🤝', title: 'Collaborative Team', desc: 'Close-knit team that builds and celebrates together.' },
  { icon: '📈', title: 'Equity & Growth',    desc: 'Grow with the company — your success is our success.' },
  { icon: '🎓', title: 'Learning Budget',    desc: 'Annual learning allowance for courses, books and events.' },
]

const openRoles = [
  { id: 1, title: 'Product Designer',          dept: 'Ezee Store',  type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Frontend Developer (React)', dept: 'Ezee Labs',   type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'Marketing Manager',          dept: 'Ezee Groups', type: 'Full-time', location: 'Remote' },
  { id: 4, title: 'Supply Chain Executive',     dept: 'Ezee Store',  type: 'Full-time', location: 'Hybrid' },
  { id: 5, title: 'Social Media Strategist',    dept: 'Ezee Labs',   type: 'Contract',  location: 'Remote' },
]

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.position) {
      return toast.error('Please fill all required fields.')
    }
    setLoading(true)
    try {
      await axios.post('/api/careers', form)
      toast.success('Application submitted! We will reach out soon.')
      setForm({ name: '', email: '', phone: '', position: '', message: '' })
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <Reveal><span className="sec-label">Careers</span></Reveal>
        <Reveal delay={0.1}><h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,76px)', maxWidth: 680 }}>Build the Future <span style={{ color: '#00c17c', fontStyle: 'italic' }}>With Us</span></h1></Reveal>
        <Reveal delay={0.2}><p className="sec-body" style={{ maxWidth: 560, marginTop: 18 }}>We are always looking for curious minds, bold creators, and future-forward thinkers. Join a team that moves fast, thinks differently, and builds products that matter.</p></Reveal>
      </section>

      {/* PERKS */}
      <section style={s.perksSection}>
        <Reveal style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="sec-label">Why Ezee Groups?</span>
          <h2 className="sec-title">What We <em>Offer</em></h2>
        </Reveal>
        <div style={s.perksGrid}>
          {perks.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div style={s.perkCard} whileHover={{ y: -6, borderColor: '#00BFFF', background: '#e6f9ff', boxShadow: '0 12px 36px rgba(0,191,255,0.12)' }}>
                <span style={{ fontSize: 26, marginBottom: 12, display: 'block' }}>{p.icon}</span>
                <div style={s.perkTitle}>{p.title}</div>
                <p style={s.perkDesc}>{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OPEN ROLES */}
      <section style={s.rolesSection}>
        <Reveal style={{ marginBottom: 40 }}>
          <span className="sec-label">Open Positions</span>
          <h2 className="sec-title">Current <em>Openings</em></h2>
        </Reveal>
        <div style={s.rolesList}>
          {openRoles.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.08}>
              <motion.div style={s.roleCard} whileHover={{ x: 8, borderColor: '#00BFFF', background: '#e6f9ff' }}>
                <div>
                  <div style={s.roleTitle}>{r.title}</div>
                  <span style={s.roleDept}>{r.dept}</span>
                </div>
                <div style={s.roleTags}>
                  <span style={s.roleTag}>{r.type}</span>
                  <span style={{ ...s.roleTag, background: 'rgba(0,193,124,0.1)', color: '#00c17c', border: '1px solid rgba(0,193,124,0.25)' }}>{r.location}</span>
                </div>
                <button style={s.applyBtn} onClick={() => setForm(f => ({ ...f, position: r.title }))}>
                  Apply Now →
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={s.formSection} id="apply">
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="sec-label">Apply Now</span>
          <h2 className="sec-title">Submit Your <em>Application</em></h2>
        </Reveal>
        <Reveal>
          <form onSubmit={handleSubmit} style={s.form}>
            <div style={s.formRow}>
              <div style={s.fg}>
                <label style={s.label}>Full Name *</label>
                <input className="input-field" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div style={s.fg}>
                <label style={s.label}>Email *</label>
                <input className="input-field" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
            </div>
            <div style={s.formRow}>
              <div style={s.fg}>
                <label style={s.label}>Phone</label>
                <input className="input-field" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
              </div>
              <div style={s.fg}>
                <label style={s.label}>Position *</label>
                <select className="input-field" value={form.position} onChange={e => setForm(f => ({ ...f, position: e.target.value }))}>
                  <option value="">Select a position</option>
                  {openRoles.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
                  <option value="Other">Other / General Application</option>
                </select>
              </div>
            </div>
            <div style={s.fg}>
              <label style={s.label}>Cover Letter / Message</label>
              <textarea className="input-field" placeholder="Tell us about yourself and why you want to join Ezee Groups..." rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn-sky" disabled={loading} style={{ marginTop: 8, opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Submitting...' : 'Submit Application →'}
            </button>
          </form>
        </Reveal>
      </section>
    </PageWrapper>
  )
}

const s = {
  hero: { padding: '80px 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' },
  perksSection: { padding: '100px 80px', background: '#fff' },
  perksGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 },
  perkCard: { background: '#f7feff', border: '1.5px solid rgba(0,191,255,0.15)', borderRadius: 16, padding: '28px 24px', transition: 'all 0.3s', cursor: 'default' },
  perkTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 20, fontWeight: 700, color: '#0d2233', marginBottom: 8 },
  perkDesc: { fontSize: 13.5, fontWeight: 300, color: '#3a5a6a', lineHeight: 1.7 },
  rolesSection: { padding: '0 80px 100px', background: '#fff' },
  rolesList: { display: 'flex', flexDirection: 'column', gap: 14 },
  roleCard: { background: '#f7feff', border: '1.5px solid rgba(0,191,255,0.15)', borderRadius: 14, padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, transition: 'all 0.3s', cursor: 'default' },
  roleTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 20, fontWeight: 700, color: '#0d2233' },
  roleDept: { fontSize: 12, color: '#00BFFF', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' },
  roleTags: { display: 'flex', gap: 8 },
  roleTag: { padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600, background: 'rgba(0,191,255,0.1)', color: '#00BFFF', border: '1px solid rgba(0,191,255,0.25)' },
  applyBtn: { background: 'linear-gradient(135deg,#00BFFF,#33CFFF)', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: 8, fontFamily: '"Outfit",sans-serif', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' },
  formSection: { padding: '0 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 50%,#e6fff5 100%)' },
  form: { background: '#fff', borderRadius: 20, padding: '44px 42px', border: '1.5px solid rgba(0,191,255,0.15)', boxShadow: '0 8px 48px rgba(0,191,255,0.1)', maxWidth: 800, margin: '0 auto' },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 0 },
  fg: { marginBottom: 18 },
  label: { display: 'block', fontSize: 11.5, fontWeight: 600, color: '#0d2233', letterSpacing: 0.5, marginBottom: 7, textTransform: 'uppercase' },
}
