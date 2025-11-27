'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Users, Target } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Personal Brand Builder',
    description: 'Craft an authentic online presence that resonates. Our AI analyzes your strengths and helps you stand out in a crowded digital world.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Track your influence with real-time metrics. See what content drives engagement and double down on what works.',
  },
  {
    icon: Users,
    title: 'Community Insights',
    description: 'Understand your audience deeply. Discover who engages with you and why they keep coming back.',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set ambitious milestones and crush them. Watch your progress unfold with visual dashboards designed to keep you motivated.',
  },

export default function Services() {
  
  ];

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Elevate Your <span className="text-rose-500">Digital Self</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Tools designed to help you grow your influence, build confidence, and become the best version of yourself online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Card - Spans 2 Columns */}
          <div className="md:col-span-2 bg-rose-50 rounded-3xl p-8 min-h-[300px] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
                {features[0].title}
              </h3>
              <p className="text-slate-500 text-lg">{features[0].description}</p>
            </div>
            <a href="#contact" className="inline-flex mt-6 text-rose-500 font-semibold hover:text-rose-600 transition-colors">
              Start Building →
            </a>
          </div>

          {/* Second Card - Single Column, Tall */}
          <div className="bg-slate-50 rounded-3xl p-6 min-h-[300px] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-3">
                {features[1].title}
              </h3>
              <p className="text-slate-500">{features[1].description}</p>
            </div>
          </div>

          {/* Third Card - Smaller */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
              {features[2].title}
            </h3>
            <p className="text-slate-500 text-sm">{features[2].description}</p>
          </div>

          {/* Fourth Card - Spans 2 Columns, Dark */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 min-h-[200px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  {features[3].title}
                </h3>
                <p className="text-slate-400">{features[3].description}</p>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
