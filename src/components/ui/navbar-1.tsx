"use client" 

import * as React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -80,
      pointerEvents: "none" as const,
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
    },
  }

  const glassVariants = {
    hidden: {
      backgroundColor: "rgba(255,255,255,0.25)",
      borderColor: "rgba(255,255,255,0.35)",
      boxShadow: "0px 12px 35px rgba(15,15,36,0.08)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
    },
    visible: {
      backgroundColor: "rgba(255,255,255,0.52)",
      borderColor: "rgba(255,255,255,0.65)",
      boxShadow: "0px 25px 60px rgba(15,15,36,0.2)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
    },
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when scrolled down past 100px
      if (currentScrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 flex justify-center w-full py-6 px-4 z-50"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="flex items-center justify-between px-3 sm:px-4 md:px-6 h-14 sm:h-16 md:h-20 rounded-full w-full max-w-3xl relative z-10 border"
        variants={glassVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
            <div className="flex items-center flex-shrink-0 relative z-20">
              <div className="flex items-center">
                <img
                  src="/header.png"
                  alt="Antifragility Labs"
                  style={{ 
                    height: '125px',
                    width: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>
            
            {/* Desktop CTA Buttons */}
            <motion.div
              className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://dashboard.antifragility.io/"
                className="inline-flex items-center justify-center px-3 lg:px-4 py-2.5 text-sm text-slate-900 rounded-full border border-slate-200/60 bg-white/60 hover:bg-white/80 transition-colors min-h-[44px]"
              >
                Log In
              </a>
              <ShinyButton
                className="!px-4 lg:!px-5 !py-2.5 !text-sm min-h-[44px]"
                onClick={() => (window.location.href = 'https://dashboard.antifragility.io/')}
              >
                Get Started
              </ShinyButton>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] flex-shrink-0" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
              <Menu className="h-6 w-6 text-slate-900" />
            </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/70 backdrop-blur-2xl z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-slate-900" />
            </motion.button>
            <div className="flex flex-col space-y-4">
              <motion.a
                href="https://dashboard.antifragility.io/"
                className="text-base text-slate-900 font-medium text-center rounded-full border border-slate-200/70 bg-white/70 py-3 min-h-[44px] flex items-center justify-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={toggleMenu}
              >
                Log In
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={toggleMenu}
                className="w-full"
              >
                <ShinyButton
                  className="!w-full !px-5 !py-3 !text-base !min-h-[44px]"
                  onClick={() => {
                    toggleMenu()
                    window.location.href = 'https://dashboard.antifragility.io/'
                  }}
                >
                  Get Started
                </ShinyButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { Navbar1 }

