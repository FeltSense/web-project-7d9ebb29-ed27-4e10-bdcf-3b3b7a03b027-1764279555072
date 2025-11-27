'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Twitter, Youtube, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },

  const resourceLinks = [
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },

  
  ];];];];

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
      
      {/* Newsletter Section */}
      <div className="border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span className="text-rose-500 text-sm font-medium">Join Our Community</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.1] text-white mb-2">
                Elevate your personal brand
              </h3>
              <p className="text-slate-500 max-w-md">
                Get weekly insights on building your online presence and growing your influence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl border-slate-700 bg-slate-900 text-white placeholder:text-slate-500 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 border min-w-[280px]"
              />
              <a
                href="#contact"
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md text-center whitespace-nowrap"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Ego</span>
            </a>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Transform your social presence. Build authentic connections. Become the best version of yourself online and offline.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-500 flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-500 hover:text-rose-500 transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-white font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-500 hover:text-rose-500 transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="text-white font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="#contact" className="flex items-start gap-3 text-slate-500 hover:text-rose-500 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-rose-500/10 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium block">Email Us</span>
                    <span>hello@ego.app</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-start gap-3 text-slate-500 hover:text-rose-500 transition-colors duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-rose-500/10 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium block">Call Us</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-500">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <span className="text-white text-sm font-medium block">Location</span>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Ego. All rights reserved. Made with <Heart className="w-4 h-4 inline text-rose-500 mx-1" /> for dreamers.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>);
}
