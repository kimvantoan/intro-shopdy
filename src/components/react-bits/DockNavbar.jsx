import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { MagneticButton } from './MagneticButton';
import {
  Sparkles,
  LayoutDashboard,
  Layers,
  BarChart3,
  Globe,
  Zap,
  Menu,
  X,
  Play,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const DockNavbar = ({ onOpenDemoModal, onOpenRegisterModal }) => {
  const { lang, setLang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav_features, href: '#features', icon: Layers },
    { label: t.nav_console, href: '#interactive-demo', icon: LayoutDashboard },
    { label: t.nav_roi, href: '#roi-calculator', icon: BarChart3 },
    { label: t.nav_pricing, href: '#pricing', icon: Globe },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 border border-purple-200/80 py-3 px-6 shadow-2xl shadow-purple-900/10 backdrop-blur-2xl ring-1 ring-purple-500/10'
            : 'bg-white/85 border border-slate-200/90 py-3.5 px-7 backdrop-blur-xl shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-950 via-purple-900 to-amber-600 p-[1.5px] shadow-lg shadow-purple-950/20 group-hover:scale-105 transition-transform duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
                <LayoutDashboard className="h-5 w-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-2xl font-black tracking-tight bg-gradient-to-r from-slate-950 via-purple-950 to-amber-800 bg-clip-text text-transparent">
                  SHOPDY
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-purple-700 font-extrabold uppercase -mt-1 font-mono">
                Fashion OS 3.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/70 p-1.5 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 rounded-full hover:text-purple-950 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-purple-600 group-hover:scale-110 transition-transform" />
                  <span>{link.label}</span>
                  {/* Subtle hover pill background */}
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-sm -z-10 transition-opacity duration-200" />
                </a>
              );
            })}
          </div>

          {/* Action CTAs & Dual Language Segment Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Custom Dual Segment Language Toggle Switch */}
            <div className="flex items-center rounded-full border border-slate-200 bg-slate-100 p-1 shadow-inner">
              <button
                onClick={() => setLang('EN')}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'EN'
                    ? 'bg-white text-purple-950 shadow-md shadow-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>🇺🇸</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLang('VI')}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  lang === 'VI'
                    ? 'bg-white text-purple-950 shadow-md shadow-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>🇻🇳</span>
                <span>VI</span>
              </button>
            </div>

            {/* Interactive Console Demo Button */}
            <button
              onClick={onOpenDemoModal}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-800 hover:text-purple-900 transition-all rounded-full border border-slate-300 hover:border-purple-400 bg-white/90 shadow-sm hover:shadow-md"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-700 group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-amber-700" />
              </div>
              <span>{t.nav_demo_btn}</span>
            </button>

            {/* Primary Action Button ("Start 14-Day Trial") */}
            <MagneticButton
              onClick={onOpenRegisterModal}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105 transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
              <span>{t.nav_trial_btn}</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 shadow-sm"
            >
              {lang === 'EN' ? '🇺🇸 EN' : '🇻🇳 VI'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-purple-900 rounded-full bg-slate-100 border border-slate-200 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown Sheet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100/90 text-xs font-bold text-slate-800 hover:bg-purple-50 hover:text-purple-950 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-purple-600" />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl border border-amber-500/40 text-amber-800 bg-amber-50 text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <Play className="w-4 h-4 fill-amber-700" />
                  {t.nav_demo_btn}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegisterModal();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <Zap className="w-4 h-4 text-amber-200" />
                  {t.nav_trial_btn}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
