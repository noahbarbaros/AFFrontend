"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin } from "lucide-react"

// Animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 10,
    },
  },
}

const backgroundVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut" as const,
    },
  },
}

// Footer data customized for Antifragility Labs
const footerData = {
  sections: [
    { 
      title: "Product", 
      links: [
        { text: "Features", href: "#features" },
        { text: "Pricing", href: "#pricing" }
      ] 
    },
    { 
      title: "Company", 
      links: [
        { text: "About Us", href: "https://medium.com/@noahbarbaros/the-secret-master-plan-of-antifragility-labs-just-between-us-f4c518681df6" },
        { text: "Contact", href: "mailto:hello@aflabs.ai" }
      ] 
    },
    { 
      title: "Services", 
      links: [
        { text: "Agency Services", href: "https://antifragilitylabs.com/" }
      ] 
    },
  ],
  social: [
    { href: "https://www.linkedin.com/company/antifragility-labs/", label: "LinkedIn", icon: "linkedin" },
    { href: "https://x.com/antifragilityai", label: "Twitter/X", icon: "twitter" },
  ],
  title: "Antifragility",
  subtitle: "Generative Engine Optimization",
  copyright: `©${new Date().getFullYear()} Antifragility Labs. All rights reserved.`,
  email: "hello@aflabs.ai",
}

// Reusable components
const NavSection = ({ title, links, index }: { title: string; links: Array<{ text: string; href: string }>; index: number }) => (
  <motion.div variants={itemVariants} custom={index} className="flex flex-col gap-2">
    <motion.h3
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="mb-2 uppercase text-gray-600 text-xs font-semibold tracking-wider border-b border-gray-200 pb-1 hover:text-gray-900 transition-colors duration-300"
    >
      {title}
    </motion.h3>
    {links.map((link, linkIndex) => (
      <motion.a
        key={linkIndex}
        variants={linkVariants}
        custom={linkIndex}
        href={link.href}
        onClick={(e) => {
          if (link.href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(link.href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileHover={{
          x: 8,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-sans text-xs md:text-sm group relative"
      >
        <span className="relative">
          {link.text}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
      </motion.a>
    ))}
  </motion.div>
)

const SocialLink = ({ href, label, icon, index }: { href: string; label: string; icon: string; index: number }) => {
  const IconComponent = icon === "twitter" ? Twitter : Linkedin;
  
  return (
    <motion.a
      variants={socialVariants}
      custom={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.2,
        rotate: 12,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.9 }}
      className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-[#1d40b0] hover:to-[#1d40b0]/80 flex items-center justify-center transition-colors duration-300 group"
      aria-label={label}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-gray-600 group-hover:text-white"
      >
        <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
      </motion.div>
    </motion.a>
  );
}

export default function StickyFooter() {
  return (
    <div className="relative w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 w-full flex flex-col justify-between relative overflow-visible"
      >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />

            <motion.div
              variants={backgroundVariants}
              className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              variants={backgroundVariants}
              className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Navigation Section */}
            <motion.div variants={containerVariants} className="relative z-10 flex-shrink-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12 lg:gap-20">
                {footerData.sections.map((section, index) => (
                  <NavSection key={section.title} title={section.title} links={section.links} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Footer Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" as const }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 gap-4 sm:gap-6 md:gap-6 mt-6 sm:mt-8 md:mt-12 flex-shrink-0"
            >
              <div className="flex-1 pb-4">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] xl:text-[8vw] 2xl:text-[6vw] leading-[1.1] font-serif bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900/60 bg-clip-text text-transparent cursor-default pb-2"
                  style={{ paddingBottom: '0.25rem' }}
                >
                  {footerData.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4"
                >
                  <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="text-gray-600 text-xs md:text-sm font-sans hover:text-gray-900 transition-colors duration-300"
                  >
                    {footerData.subtitle}
                  </motion.p>
                </motion.div>

                <motion.a
                  href={`mailto:${footerData.email}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="text-gray-600 text-xs md:text-sm font-sans hover:text-[#1d40b0] transition-colors duration-300 mt-2 inline-block"
                >
                  {footerData.email}
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="text-left md:text-right"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2, staggerChildren: 0.1 }}
                  className="flex gap-2 md:gap-3 mb-2 md:mb-3"
                >
                  {footerData.social.map((social, index) => (
                    <SocialLink
                      key={social.label}
                      href={social.href}
                      label={social.label}
                      icon={social.icon}
                      index={index}
                    />
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-gray-600 text-xs md:text-sm hover:text-gray-900 transition-colors duration-300"
                >
                  {footerData.copyright}
                </motion.p>
              </motion.div>
            </motion.div>
      </motion.div>
    </div>
  )
}

