
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import PageWrapper from '../components/common/PageWrapper'
import Reveal from '../components/common/Reveal'
import myImg from '../assets/hero.jpeg'

const stats = [
  { num: 2,    suffix: '+', label: 'Subsidiary Companies', color: '#1A8A4A' },
  { num: 2,    suffix: '',  label: 'Core Industries',       color: '#00BFFF' },
  { num: 100,  suffix: '%', label: 'Gen-Z First',           color: '#E8883A' },
  { num: 2025, suffix: '',  label: 'Founded',    noanim: true, color: '#2AB870' },
]

const tickerItems = [
  'EZee Groups — Next-Gen Innovation',
  'EZee Store — Electronics Redefined',
  'EZee Labs — Spiritual Jewellery for Gen-Z',
  'Building Brands for the Digital Generation',
  'Technology · Creativity · Culture',
]

export default function Home() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const colors = ['rgba(0,191,255,0.5)','rgba(26,138,74,0.5)','rgba(61,214,140,0.5)','rgba(232,136,58,0.4)']
    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div')
      const sz = Math.random() * 4 + 1.5
      Object.assign(p.style, {
        position: 'absolute',
        borderRadius: '50%',
        width: sz + 'px',
        height: sz + 'px',
        left: Math.random() * 100 + '%',
        background: colors[Math.floor(Math.random() * colors.length)],
        animation: `pFloat ${Math.random() * 12 + 8}s linear ${Math.random() * 10}s infinite`,
        opacity: 0,
      })
      container.appendChild(p)
    }
  }, [])

  return (
    <PageWrapper style={{ paddingTop: 0 }}>

      {/* ══ HERO ══ */}
      <section style={s.hero}>

        {/* ✅ ADD ONLY THIS */}
        <div style={s.edgeBlur}></div>
<motion.div
  style={s.bgImage}
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
/>
        <div style={s.overlay}></div>

        <div style={s.heroDots} />
        <motion.div style={s.orb1} animate={{ x:[0,30,0],y:[0,-20,0] }} transition={{ duration:14,repeat:Infinity,ease:'easeInOut' }}/>
        <motion.div style={s.orb2} animate={{ x:[0,-20,0],y:[0,25,0] }} transition={{ duration:18,repeat:Infinity,ease:'easeInOut',delay:3 }}/>
        <motion.div style={s.orb3} animate={{ x:[0,15,0],y:[0,-15,0] }} transition={{ duration:12,repeat:Infinity,ease:'easeInOut',delay:6 }}/>

        <div ref={particlesRef} style={s.particles} />
        <motion.div style={s.ring1} animate={{ rotate:360 }} transition={{ duration:40,repeat:Infinity,ease:'linear' }}/>
        <motion.div style={s.ring2} animate={{ rotate:-360 }} transition={{ duration:28,repeat:Infinity,ease:'linear' }}/>

        <div style={s.heroContent}>
          <motion.div style={s.eyebrow}
            initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }}
            transition={{ duration:0.8,delay:0.1 }}>
            <span style={s.eyebrowDot} />
            Next-Generation Innovation Company
          </motion.div>

          <div style={s.heroContainer}>
            
             <motion.h1 
  style={{ ...s.h1, maxWidth:'500px', lineHeight:1.2 ,paddingLeft:'40px', }}   // 👈 ADD
  initial={{ opacity:0,y:30 }} 
  animate={{ opacity:1,y:0 }}
>

  <div>Building the</div>
  <div>Future of</div>

  <div style={{ color:'#00BFFF' }}>Technology</div>

  <div>
    & Lifestyle{' '}
    <span style={{ color:'#c95410', fontStyle:'italic' }}>
      Innovation
    </span>
  </div>

</motion.h1>
            

            
          </div>

          <motion.p style={s.heroSub}
            initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }}>
            EZee Groups is a modern multi-industry company driving innovation across
            electronics manufacturing and Gen-Z lifestyle brands.
          </motion.p>

          <motion.div style={s.heroBtns}>
            <Link to="/companies" className="btn-sky">Explore Our Companies</Link>
            <Link to="/about" className="btn-green-outline">Learn About EZee Groups</Link>
          </motion.div>
        </div>

      </section>

      {/* ══ ABOUT STRIP ══ */}
      <section style={s.aboutStrip}>
        <div style={s.aboutGrid}>
          <Reveal direction="left" style={{ flex:1 }}>
            <span className="sec-label-green">Who We Are</span>
            <h2 className="sec-title" style={{ marginBottom:20 }}>
              A New Kind of <em>Innovation Company</em>
            </h2>
            <div className="sec-div"/>
            <p className="sec-body">
              EZee Groups is a next-generation innovation company focused on technology
              products, manufacturing, and Gen-Z lifestyle brands. We build modern consumer
              businesses designed for the digital generation.
            </p>
            <Link to="/about" className="btn-sky" style={{ marginTop:28,display:'inline-flex' }}>
              Learn More →
            </Link>
          </Reveal>
          <Reveal direction="right" style={{ flex:1 }}>
            <div style={s.aboutImgWrap}>
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="EZee Groups Technology" style={s.aboutImg}/>
              <div style={s.aboutImgOverlay}/>
              <div style={s.aboutBadge}>
                <span style={s.badgeNum}>2</span>
                <span style={s.badgeLabel}>Flagship Brands</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ COMPANIES PREVIEW ══ */}
      <section style={s.companiesStrip}>
        <Reveal><span className="sec-label" style={{ textAlign:'center',display:'block' }}>Our Companies</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="sec-title" style={{ textAlign:'center', marginBottom:12 }}>
            Two Brands. <em>One Vision.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="sec-body" style={{ textAlign:'center', maxWidth:520, margin:'0 auto 48px' }}>
            Each subsidiary leads its industry — powered by technology, driven by culture.
          </p>
        </Reveal>
        <div style={s.companiesGrid}>
          {[
            { name:'EZee Store', tag:'Electronics', tagColor:'#00BFFF',
              desc:'Designs, manufactures and sells innovative consumer electronic products for the modern Gen-Z generation.',
              img:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80', accent:'#00BFFF' },
            { name:'EZee Labs', tag:'Lifestyle', tagColor:'#E8883A',
              desc:'Spiritual and fashionable jewellery for Gen-Z — blending ancient wisdom with modern aesthetic dropshipping.',
              img:myImg, accent:'#E8883A' },
          ].map((co,i)=>(
            <Reveal key={i} delay={i*0.15}>
              <CompanyCard {...co}/>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} style={{ textAlign:'center', marginTop:40 }}>
          <Link to="/companies" className="btn-ghost">View All Companies →</Link>
        </Reveal>
      </section>

      {/* ══ VALUES ══ */}
      <section style={s.valuesStrip}>
        <Reveal><span className="sec-label" style={{ textAlign:'center',display:'block' }}>Core Values</span></Reveal>
        <div style={s.valuesGrid}>
          {[
            { icon:'💡', name:'Innovation',      color:'#1A8A4A' },
            { icon:'🎯', name:'Customer Focus',  color:'#00BFFF' },
            { icon:'⭐', name:'Quality',         color:'#2AB870' },
            { icon:'🎨', name:'Creativity',      color:'#E8883A' },
            { icon:'🔮', name:'Future Thinking', color:'#3DD68C' },
          ].map((v,i)=>(
            <Reveal key={i} delay={i*0.08}>
              <motion.div style={s.valCard}
                whileHover={{ y:-6, borderColor:v.color, boxShadow:`0 12px 36px ${v.color}25`, background:'#f8fffe' }}>
                <div style={{ ...s.valIconWrap, background:`${v.color}15`, border:`1.5px solid ${v.color}30` }}>
                  <span style={{ fontSize:22 }}>{v.icon}</span>
                </div>
                <span style={{ ...s.valName, color:v.color }}>{v.name}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={s.ctaBanner}>
        <Reveal>
          <h2 style={s.ctaTitle}>
            Ready to Build the Future{' '}
            <em style={{ color:'#00BFFF', fontStyle:'italic' }}>Together?</em>
          </h2>
          <p className="sec-body" style={{ marginTop:16 }}>
            Get in touch with EZee Groups and explore how we can collaborate.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', marginTop:32, flexWrap:'wrap' }}>
            <Link to="/contact" className="btn-sky">Contact Us →</Link>
            <Link to="/careers" className="btn-green-outline">Join Our Team</Link>
          </div>
        </Reveal>
      </section>

    </PageWrapper>
  )
}

/* ── STAT CARD ── */
function StatCard({ num, suffix, label, noanim, color }) {
  const { ref, inView } = useInView({ threshold:0.3, triggerOnce:true })
  return (
    <motion.div ref={ref} style={s.statCard}
      whileHover={{ y:-8, borderColor:color+'60', boxShadow:`0 18px 50px ${color}25` }}>
      <div style={{ ...s.statTop, background:color }}/>
      <span style={{ ...s.statNum, color }}>
        {noanim ? num : inView ? <CountUp end={num} duration={1.8} suffix={suffix}/> : '0'}
      </span>
      <div style={{ ...s.statLine, background:color }}/>
      <span style={s.statLabel}>{label}</span>
    </motion.div>
  )
}

/* ── COMPANY CARD ── */
function CompanyCard({ name, tag, tagColor, desc, img, accent }) {
  return (
    <motion.div style={s.coCard}
      whileHover={{ y:-10, boxShadow:`0 24px 60px ${accent}30`, borderColor:accent+'60' }}>
      <div style={s.coImgWrap}>
        <img src={img} alt={name} style={s.coImg}/>
        <div style={s.coOverlay}/>
        <span style={{ ...s.coTag, background:tagColor }}>{tag}</span>
      </div>
      <div style={s.coBody}>
        <div style={s.coName}>{name}</div>
        <p style={s.coDesc}>{desc}</p>
        <Link to="/companies" style={{ ...s.coLink, color:accent }}>Learn More →</Link>
      </div>
      <div style={{ ...s.coBar, background:`linear-gradient(90deg,${accent},${accent}88)` }}/>
    </motion.div>
  )
}

/* ── STYLES ── */
const s = {
  // hero:{ marginTop:'40px', minHeight:'100vh', display:'flex', alignItems:'center', background:'#fff', position:'relative', overflow:'hidden',},
  heroDots:{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle, rgba(0,191,255,0.12) 1px, transparent 1px)', backgroundSize:'40px 40px', opacity:0.6, pointerEvents:'none', animation:'dotsDrift 30s linear infinite' },
  particles:{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' },
  orb1:{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,191,255,0.1),transparent 70%)', top:-200, right:-150, pointerEvents:'none' },
  orb2:{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(26,138,74,0.08),transparent 70%)', bottom:-120, left:-100, pointerEvents:'none' },
  orb3:{ position:'absolute', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(232,136,58,0.06),transparent 70%)', top:'40%', left:'45%', pointerEvents:'none' },
  ring1:{ position:'absolute', width:520, height:520, borderRadius:'50%', border:'1.5px solid rgba(0,191,255,0.1)', right:'10%', top:'50%', transform:'translate(50%,-50%)', pointerEvents:'none' },
  ring2:{ position:'absolute', width:360, height:360, borderRadius:'50%', border:'1px solid rgba(26,138,74,0.08)', right:'10%', top:'50%', transform:'translate(50%,-50%)', pointerEvents:'none' },
  heroContent:{ position:'relative', zIndex:2, padding:'0 84px', maxWidth:720 },
  eyebrow:{ display:'inline-flex', alignItems:'center', gap:10, padding:'8px 20px', border:'1.5px solid rgba(0,191,255,0.28)', borderRadius:100, fontSize:11.5, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#00BFFF', background:'rgba(0,191,255,0.06)', marginBottom:32 },
  eyebrowDot:{ width:6, height:6, borderRadius:'50%', background:'#00BFFF', flexShrink:0, animation:'blink 2s ease-in-out infinite' },
  h1:{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(44px,6vw,86px)', fontWeight:800, color:'#0d2218', lineHeight:1.05, letterSpacing:-2 },
  heroSub:{ marginTop:24, fontSize:17, fontWeight:300, color:'#d4dfd7', lineHeight:1.82, maxWidth:540 },
  heroBtns:{ display:'flex', gap:14, marginTop:50, marginBottom:1.5,flexWrap:'wrap' },
  scrollHint:{ position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:10 },
  scrollMouse:{ width:22, height:36, border:'2px solid rgba(0,191,255,0.3)', borderRadius:12, position:'relative', display:'flex', justifyContent:'center', overflow:'hidden' },
  scrollDot:{ width:3, height:8, background:'#00BFFF', borderRadius:2, marginTop:6 },
  scrollLabel:{ fontSize:10, letterSpacing:2.5, color:'rgba(0,191,255,0.5)', textTransform:'uppercase' },
  tickerWrap:{ marginTop:'50px', background:'linear-gradient(135deg,#1A8A4A,#2AB870,#00BFFF)', padding:'11px 0', overflow:'hidden' },
  tickerTrack:{ display:'flex', width:'max-content', animation:'tickMove 24s linear infinite' },
  tickerItem:{ padding:'0 52px', fontSize:12.5, fontWeight:700, color:'#fff', letterSpacing:1, textTransform:'uppercase', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:14 },
  tickerDot:{ fontSize:8, opacity:0.55, marginLeft:14 },
  statsSection:{ padding:'100px 80px', background:'linear-gradient(160deg,#e6f9ff 0%,#fff 55%,#e8fdf3 100%)' },
  statsGrid:{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:22 },
  statCard:{ background:'#fff', borderRadius:18, border:'1.5px solid rgba(26,138,74,0.15)', padding:'40px 28px', textAlign:'center', boxShadow:'0 4px 24px rgba(26,138,74,0.07)', position:'relative', overflow:'hidden', transition:'all 0.4s' },
  statTop:{ position:'absolute', top:0, left:0, right:0, height:3 },
  statNum:{ fontFamily:'"Cormorant Garamond",serif', fontSize:62, fontWeight:800, display:'block', lineHeight:1 },
  statLine:{ width:28, height:2, margin:'14px auto', borderRadius:2 },
  statLabel:{ fontSize:13, fontWeight:400, color:'#2d5a3a', letterSpacing:0.4 },
  aboutStrip:{ padding:'100px 80px', background:'#fff' },
  aboutGrid:{ display:'flex', gap:80, alignItems:'center' },
  aboutImgWrap:{ borderRadius:20, overflow:'hidden', aspectRatio:'4/5', position:'relative', flexShrink:0, width:'45%' },
  aboutImg:{ width:'100%', height:'100%', objectFit:'cover' },
  aboutImgOverlay:{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,191,255,0.15),transparent 60%)' },
  aboutBadge:{ position:'absolute', bottom:28, left:28, background:'linear-gradient(135deg,#00BFFF,#1A8A4A)', padding:'14px 22px', borderRadius:12, boxShadow:'0 8px 28px rgba(0,191,255,0.3)' },
  badgeNum:{ fontFamily:'"Cormorant Garamond",serif', fontSize:36, fontWeight:800, color:'#fff', display:'block', lineHeight:1 },
  badgeLabel:{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,0.85)', letterSpacing:1.2, textTransform:'uppercase' },
  companiesStrip:{ padding:'100px 80px', background:'linear-gradient(160deg,#e6f9ff 0%,#fff 50%,#e8fdf3 100%)' },
  companiesGrid:{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 },
  coCard:{ background:'#fff', borderRadius:18, overflow:'hidden', border:'1.5px solid rgba(26,138,74,0.15)', display:'flex', flexDirection:'column', cursor:'pointer', position:'relative', boxShadow:'0 4px 24px rgba(26,138,74,0.06)', transition:'all 0.4s' },
  coImgWrap:{ height:220, overflow:'hidden', position:'relative', flexShrink:0 },
  coImg:{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.7s' },
  coOverlay:{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(255,255,255,0.9),transparent 60%)' },
  coTag:{ position:'absolute', top:18, left:18, color:'#fff', padding:'5px 14px', borderRadius:100, fontSize:10.5, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', boxShadow:'0 4px 12px rgba(0,0,0,0.2)' },
  coBody:{ padding:'24px 28px 28px', flex:1, display:'flex', flexDirection:'column' },
  coName:{ fontFamily:'"Cormorant Garamond",serif', fontSize:30, fontWeight:700, color:'#0d2218' },
  coDesc:{ marginTop:10, fontSize:14, fontWeight:300, color:'#2d5a3a', lineHeight:1.75, flex:1 },
  coLink:{ marginTop:16, display:'inline-flex', alignItems:'center', gap:6, fontSize:13.5, fontWeight:600, textDecoration:'none' },
  coBar:{ position:'absolute', bottom:0, left:0, right:0, height:3, transform:'scaleX(0)', transformOrigin:'left', transition:'transform 0.5s' },
  valuesStrip:{ padding:'80px 80px', background:'#fff' },
  valuesGrid:{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16, marginTop:24 },
  valCard:{ background:'#f8fffe', border:'1.5px solid rgba(26,138,74,0.12)', borderRadius:14, padding:'24px 16px', textAlign:'center', transition:'all 0.3s', cursor:'default' },
  valIconWrap:{ width:52, height:52, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px' },
  valName:{ fontSize:13, fontWeight:600 },
  ctaBanner:{ padding:'100px 80px', background:'linear-gradient(135deg,rgba(0,191,255,0.07),rgba(26,138,74,0.06))', textAlign:'center', borderTop:'1.5px solid rgba(0,191,255,0.12)', borderBottom:'1.5px solid rgba(26,138,74,0.1)' },
  ctaTitle:{ fontFamily:'"Cormorant Garamond",serif', fontSize:'clamp(28px,4vw,52px)', fontWeight:700, color:'#0d2218', lineHeight:1.15 },
  heroContainer:{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  gap:'40px'
},

left:{
  flex:1
},

right:{
  flex:1,
  display:'flex',
  justifyContent:'flex-end'
},

image:{
  marginLeft:'300px',
  width:'200px',
  borderRadius:'20px',
  boxShadow:'0 25px 70px rgba(0,0,0,0.2)',
  objectFit:'cover'
},
hero:{
  marginTop:'40px',
  minHeight:'100vh',
  display:'flex',
  alignItems:'center',
  position:'relative',
  overflow:'hidden',

  // backgroundImage: `url(${myImg})`,   // 👈 ADD
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
},
  hero:{
    marginTop:'40px',
    minHeight:'100vh',
    display:'flex',
    alignItems:'center',
    position:'relative',
    overflow:'hidden'
  },

bgImage:{
  position:'absolute',
  inset:0,
  backgroundImage:`url(${myImg})`,
  backgroundSize:'cover',
  backgroundPosition:'left center',
  zIndex:0
},

overlay:{
  position:'absolute',
  inset:0,
  background:'rgba(0,0,0,0.35)',   // adjust 0.2–0.5 as needed
  zIndex:1
},

  heroContent:{ position:'relative', zIndex:2 },
h1:{
  fontSize:'clamp(44px,6vw,80px)',
  fontWeight:800,
  color:'#fff',
  maxWidth:'500px',   // 👈 important
  lineHeight:1.2
},
edgeBlur:{
  position:'absolute',
  inset:0,
  pointerEvents:'none',
  zIndex:1,
  backdropFilter:'blur(20px)',
  WebkitBackdropFilter:'blur(20px)',
  
  maskImage:'linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%)',
  WebkitMaskImage:'linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%)'
},
}




















