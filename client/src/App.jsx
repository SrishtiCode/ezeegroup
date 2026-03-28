import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Home        from './pages/Home'
import About       from './pages/About'
import Companies   from './pages/Companies'
import Innovation  from './pages/Innovation'
import Vision      from './pages/Vision'
import News        from './pages/News'
import Careers     from './pages/Careers'
import Contact     from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <>
      {/* Global top shimmer bar */}
      <div className="topbar" />

      {/* Custom cursor */}
      

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: 'Outfit, sans-serif',
            fontSize: '14px',
            border: '1.5px solid rgba(0,191,255,0.3)',
            borderRadius: '10px',
          },
          success: { iconTheme: { primary: '#00c17c', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#ff4d4f', secondary: '#fff' } },
        }}
      />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/Home"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/companies"  element={<Companies />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/vision"     element={<Vision />} />
          <Route path="/news"       element={<News />} />
          <Route path="/careers"    element={<Careers />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}
