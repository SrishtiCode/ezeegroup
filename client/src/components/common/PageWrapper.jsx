import React from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

export default function PageWrapper({ children, style }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ paddingTop: 80, minHeight: '100vh', ...style }}
    >
      {children}
    </motion.div>
  )
}
