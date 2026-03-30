import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import axios from 'axios'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      return toast.error('Please fill all required fields.')
    }
    setLoading(true)
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form)

      console.log("Response:", res.data)   

      toast.success('Message sent! We will get back to you within 24 hours.')

      setForm({ name: '', email: '', subject: '', message: '' })

    } catch (err) {
      console.error("Error:", err.response || err.message)  

      toast.error(err?.response?.data?.message || 'Something went wrong. Please try again.')

    } finally {
      setLoading(false)
    }

  return (
    <PageWrapper>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroBg} />
        <Reveal><span className="sec-label">Contact Us</span></Reveal>
        <Reveal delay={0.1}><h1 className="sec-title" style={{ fontSize: 'clamp(40px,6vw,76px)' }}>Let's Build <em>Something Great</em></h1></Reveal>
        <Reveal delay={0.2}><p className="sec-body" style={{ maxWidth: 520, marginTop: 18 }}>Have a question, partnership idea, or just want to say hello? We'd love to hear from you.</p></Reveal>
      </section>

      {/* CONTACT GRID */}
      <section style={s.contactSection}>
        <div style={s.grid}>

          {/* Info */}
          <Reveal direction="left">
            <div style={s.infoWrap}>
              <h2 className="sec-title" style={{ marginBottom: 8 }}>Get In <em>Touch</em></h2>
              <div className="sec-div" />
              {[
                { label: 'General Inquiries',  val: 'info.ezeegroups@gmail.com',  href: 'mailto:info.ezeegroups@gmail.com' },
                { label: 'Business Inquiries', val: 'info.ezeelabs@gmail.com',    href: 'mailto:info.ezeelabs@gmail.com' },

                // ✅ ADD YOUR NUMBER HERE
                { label: 'Call Us', val: '+91 8677050046', href: 'tel:+918677050046' },

              ].map(item => (
                <div key={item.label} style={s.infoBlock}>
                  <span style={s.infoLabel}>{item.label}</span>
                  <a href={item.href} style={s.infoVal}>{item.val}</a>
                </div>
              ))}

              <div style={s.infoBlock}>
                <span style={s.infoLabel}>Ezee Store</span>
                <span style={s.infoValPlain}>Electronics Retail & Manufacturing</span>
              </div>
              <div style={s.infoBlock}>
                <span style={s.infoLabel}>Ezee Labs</span>
                <span style={s.infoValPlain}>Lifestyle E-Commerce & Dropshipping</span>
              </div>

              <div style={s.responseNote}>
                <span style={s.responseIcon}>💬</span>
                <p style={s.responseText}>We typically respond within 24 hours. For urgent inquiries use the Ezee Labs email.</p>
              </div>

              {/* Social */}
              <div style={s.socials}>
                {[['in','LinkedIn'],['ig','Instagram'],['tw','Twitter'],['yt','YouTube']].map(([k,l]) => (
                  <motion.a key={k} href="#" style={s.soc} whileHover={{ y: -3, borderColor: '#00BFFF', color: '#00BFFF' }} title={l}>{k}</motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right">
            <form onSubmit={handleSubmit} style={s.form}>
              <h3 style={s.formTitle}>Send Us a Message</h3>
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
              <div style={s.fg}>
                <label style={s.label}>Subject *</label>
                <select className="input-field" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Business Partnership</option>
                  <option>Ezee Store — Electronics</option>
                  <option>Ezee Labs — Jewellery</option>
                  <option>Career Opportunity</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={s.fg}>
                <label style={s.label}>Message *</label>
                <textarea className="input-field" placeholder="Tell us about your inquiry..." rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-sky" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: 4, opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </Reveal>

        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={s.mapSection}>
        <Reveal>
          <div style={s.mapCard}>
            <div style={s.mapInner}>
              <span style={s.mapIcon}>📍</span>
              <h3 style={s.mapTitle}>Ezee Groups HQ</h3>
              <p style={s.mapText}>India — Remote-First Organization</p>
            </div>
          </div>
        </Reveal>
      </section>

    </PageWrapper>
  )
}

const s = {
  hero: { padding: '80px 80px 80px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5, pointerEvents: 'none' },
  contactSection: { padding: '60px 80px 100px', background: '#fff' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 72, alignItems: 'start' },
  infoWrap: {},
  infoBlock: { marginBottom: 24 },
  infoLabel: { display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#00BFFF', marginBottom: 6 },
  infoVal: { fontSize: 15.5, fontWeight: 500, color: '#0d2233', textDecoration: 'none', transition: 'color 0.2s' },
  infoValPlain: { fontSize: 15.5, fontWeight: 500, color: '#0d2233' },
  responseNote: { display: 'flex', gap: 14, alignItems: 'flex-start', background: '#e6f9ff', border: '1.5px solid rgba(0,191,255,0.2)', borderRadius: 12, padding: '16px 18px', marginTop: 8, marginBottom: 28 },
  responseIcon: { fontSize: 20, flexShrink: 0 },
  responseText: { fontSize: 13.5, color: '#3a5a6a', lineHeight: 1.65 },
  socials: { display: 'flex', gap: 10 },
  soc: { width: 40, height: 40, borderRadius: 9, border: '1.5px solid rgba(0,191,255,0.2)', background: '#f7feff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3a5a6a', fontSize: 12, fontWeight: 700, textDecoration: 'none', transition: 'all 0.25s' },
  form: { background: '#fff', borderRadius: 20, padding: '40px 38px', border: '1.5px solid rgba(0,191,255,0.15)', boxShadow: '0 8px 48px rgba(0,191,255,0.1)' },
  formTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 26, fontWeight: 700, color: '#0d2233', marginBottom: 28 },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  fg: { marginBottom: 16 },
  label: { display: 'block', fontSize: 11.5, fontWeight: 600, color: '#0d2233', letterSpacing: 0.5, marginBottom: 6, textTransform: 'uppercase' },
  mapSection: { padding: '0 80px 100px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 50%,#e6fff5 100%)' },
  mapCard: { borderRadius: 20, overflow: 'hidden', border: '1.5px solid rgba(0,191,255,0.15)', background: 'linear-gradient(135deg,rgba(0,191,255,0.06),rgba(0,193,124,0.04))', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  mapInner: { textAlign: 'center' },
  mapIcon: { fontSize: 40, display: 'block', marginBottom: 12 },
  mapTitle: { fontFamily: '"Cormorant Garamond",serif', fontSize: 24, fontWeight: 700, color: '#0d2233' },
  mapText: { fontSize: 14, color: '#3a5a6a', marginTop: 6 },
}
}