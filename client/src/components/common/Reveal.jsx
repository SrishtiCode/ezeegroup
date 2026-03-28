import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up'   ?  40 : direction === 'down'  ? -40 : 0,
      x: direction === 'left' ?  50 : direction === 'right' ? -50 : 0,
      scale: direction === 'scale' ? 0.9 : 1,
    },
    visible: {
      opacity: 1, y: 0, x: 0, scale: 1,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={style}
    >
      {children}
    </motion.div>
  )
}
