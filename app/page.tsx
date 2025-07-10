'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen from-slate-900 via-sky-900 to-slate-900 text-white overflow-hidden relative">
      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-20 px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="z-10 max-w-6xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl mb-8 leading-tight"
            >
              Welcome to
              <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ResHUB
              </span>
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="inline-block mb-8"
            >
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-400/30 text-sky-300 font-medium backdrop-blur-sm shadow-lg shadow-sky-500/25">
                ✨ Next Generation Tech Hub
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-gray-300 mb-12 leading-relaxed"
            >
              Your central hub for tech tools, knowledge, and innovation.
              Whether you're a developer, student, entrepreneur, or curious
              learner, ResHUB offers a wide range of resources including AI
              tools, open-source projects, startup SaaS platforms, community
              insights, and more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 transition-all duration-300 font-bold text-lg shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/25 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 rounded-2xl border-2 border-sky-400/50 text-sky-300 hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 font-bold text-lg backdrop-blur-sm relative overflow-hidden"
              >
                <span className="relative z-10">Contribute</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
