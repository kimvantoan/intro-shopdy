import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
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
  ShieldCheck
} from 'lucide-react';

export const DockNavbar = ({ onOpenDemoModal, onOpenRegisterModal }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-7xl rounded-full transition-all duration-500 border ${
          scrolled
            ? 'glass-panel-glow py-3 px-6 shadow-xl shadow-purple-900/10 bg-white/95 border-purple-200'
            : 'bg-white/80 border-slate-200/90 py-4 px-8 backdrop-blur-xl shadow-lg shadow-slate-200/50'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-rose-500 to-amber-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                <LayoutDashboard className="h-5 w-5 text-amber-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-extrabold tracking-wider bg-gradient-to-r from-slate-950 via-purple-900 to-amber-700 bg-clip-text text-transparent">
                SHOPDY
              </span>
              <span className="text-[10px] tracking-widest text-purple-600 font-bold uppercase -mt-1">
                Fashion Operating System
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1.5 backdrop-blur-xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 rounded-full hover:bg-white hover:text-slate-950 hover:shadow-sm transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5 text-purple-600" />
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Pill Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 bg-slate-100 hover:bg-white text-xs font-bold text-slate-800 transition-all shadow-sm"
              title="Toggle Language (EN / VI)"
            >
              <Globe className="w-3.5 h-3.5 text-purple-600" />
              <span>{lang === 'EN' ? '🇺🇸 EN' : '🇻🇳 VI'}</span>
            </button>

            <button
              onClick={onOpenDemoModal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-800 hover:text-purple-700 transition-colors rounded-full border border-slate-300 hover:border-purple-400 bg-slate-100/60"
            >
              <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              {t.nav_demo_btn}
            </button>

            <button
              onClick={onOpenRegisterModal}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all hover:scale-105 shadow-md shadow-purple-900/10"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 rounded-full animate-shimmer" />
              <span className="relative flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-white transition-all group-hover:bg-transparent">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                {t.nav_trial_btn}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800"
            >
              {lang === 'EN' ? '🇺🇸 EN' : '🇻🇳 VI'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg bg-slate-100 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 text-sm font-semibold text-slate-800 hover:bg-purple-50"
                  >
                    <Icon className="w-4 h-4 text-purple-600" />
                    {link.label}
                  </a>
                );
              })}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full py-3 px-4 rounded-xl border border-amber-500/40 text-amber-700 bg-amber-50 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-amber-600" />
                  {t.nav_demo_btn}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegisterModal();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-rose-600 text-white text-xs font-bold flex items-center justify-center gap-2"
                >
                  {t.nav_trial_btn}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
