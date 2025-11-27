'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-slate-950 min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-32 left-16 w-3 h-3 bg-rose-500 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-48 right-24 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-32 w-4 h-4 bg-rose-400/50 rounded-full"
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 right-40 w-2 h-2 bg-cyan-400/60 rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-slate-300">The Future of Personal Growth</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8"
          >
            Unlock Your
            <span className="relative mx-4">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-400">
                True Potential
              </span>
            </span>
            <br />
            One Day at a Time
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Track habits. Build confidence. Share your journey. Ego is the social platform 
            where personal development meets community—helping 50,000+ people become their best selves.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-rose-500/25 flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl px-8 py-4 transition-all duration-300 flex items-center gap-2"
            >
              Explore Features
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-rose-500" />
                <span className="text-3xl md:text-4xl font-bold text-white">50K+</span>
              </div>
              <p className="text-sm text-slate-500">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-3xl md:text-4xl font-bold text-white">2M+</span>
              </div>
              <p className="text-sm text-slate-500">Goals Achieved</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-rose-500" />
                <span className="text-3xl md:text-4xl font-bold text-white">4.9</span>
              </div>
              <p className="text-sm text-slate-500">App Rating</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
