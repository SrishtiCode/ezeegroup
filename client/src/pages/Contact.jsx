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
  } // ✅ FIX 1: added missing closing bracket for handleSubmit

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
                { label: 'Call Us', val: '+91 8677050046', href: 'tel:+918677050046' },
              ].map(item => (
                <div key={item.label} style={s.infoBlock}>
                  <span style={s.infoLabel}>{item.label}</span>
                  <a href={item.href} style={s.infoVal}>{item.val}</a>
                </div>
              ))}
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

      {/* MAP */}
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

// styles
const s = {
  hero: { padding: '80px 80px 80px', background: 'linear-gradient(160deg,#e6f9ff 0%,#fff 60%,#e6fff5 100%)', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0 },
  contactSection: { padding: '60px 80px 100px', background: '#fff' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 72 },
  infoWrap: {},
  infoBlock: { marginBottom: 24 },
  infoLabel: { fontSize: 11, color: '#00BFFF' },
  infoVal: { fontSize: 15 },
  form: { padding: 20, border: '1px solid #ddd' },
  formTitle: { marginBottom: 20 },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  fg: { marginBottom: 16 },
  label: { fontSize: 12 },
  mapSection: { padding: '0 80px 100px' },
  mapCard: { height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  mapInner: { textAlign: 'center' },
  mapIcon: { fontSize: 40 },
  mapTitle: { fontSize: 24 },
  mapText: { fontSize: 14 },
}