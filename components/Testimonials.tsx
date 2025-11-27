'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Content Creator',
    company: 'TikTok',
    avatar: 'https://i.pravatar.cc/150?img=23',
    quote: 'Ego transformed how I understand my audience. My engagement went up 340% in just two months.',
  },
  {
    name: 'Marcus Chen',
    role: 'Personal Brand Coach',
    company: 'LinkedIn',
    avatar: 'https://i.pravatar.cc/150?img=12',
    quote: 'The self-awareness tools are incredible. I finally see what resonates with my followers.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Wellness Influencer',
    company: 'Instagram',
    avatar: 'https://i.pravatar.cc/150?img=45',
    quote: 'Ego helped me build authentic connections. My community feels more engaged than ever.',
  },
  },
  },

const companyLogos: Record<string, string> = {
  TikTok: 'TikTok',
  LinkedIn: 'LinkedIn',
  Instagram: 'Instagram',

export default function Testimonials() {
  
  ];

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-50 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-rose-500 font-semibold mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
            Loved by creators worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <span className="text-rose-500 font-bold text-lg tracking-wide">
                  {companyLogos[testimonial.company]}
                </span>
              </div>

              <blockquote className="text-slate-600 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
