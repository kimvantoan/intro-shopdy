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
    { label: lang === 'VI' ? 'Tính Năng' : 'Platform', href: '#features', icon: Layers },
    { label: lang === 'VI' ? 'Console Demo' : 'Console', href: '#interactive-demo', icon: LayoutDashboard },
    { label: lang === 'VI' ? 'Tính ROI' : 'ROI Calculator', href: '#roi-calculator', icon: BarChart3 },
    { label: lang === 'VI' ? 'Bảng Giá' : 'Pricing', href: '#pricing', icon: Globe },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border border-slate-200 py-2.5 px-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl'
            : 'bg-white/90 border border-slate-200/90 py-3 px-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white font-black shadow-md group-hover:scale-105 transition-transform">
              <LayoutDashboard className="h-4.5 w-4.5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-black tracking-tight text-slate-950 leading-none">
                  SHOPDY
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
                </span>
              </div>
              <span className="text-[9px] tracking-widest text-slate-500 font-bold uppercase mt-0.5 font-mono">
                Fashion OS
              </span>
            </div>
          </a>

          {/* Single-Line Clean Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action CTAs & Dual Language Segment Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Custom Dual Segment Language Toggle Switch */}
            <div className="flex items-center rounded-full border border-slate-200 bg-slate-100 p-0.5 shadow-inner text-[11px] font-bold">
              <button
                onClick={() => setLang('EN')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
                  lang === 'EN'
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                <span>🇺🇸</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => setLang('VI')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-all ${
                  lang === 'VI'
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-500 hover:text-slate-950'
                }`}
              >
                <span>🇻🇳</span>
                <span>VI</span>
              </button>
            </div>

            {/* Console Demo Button with Red Live Indicator */}
            <button
              onClick={onOpenDemoModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors rounded-full border border-rose-200 bg-rose-50 hover:bg-rose-100/80 whitespace-nowrap"
            >
              <Play className="w-3 h-3 text-rose-600 fill-rose-600" />
              <span className="text-rose-700">{lang === 'VI' ? 'Live Demo' : 'Live Demo'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenRegisterModal}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-950 text-white font-extrabold text-xs rounded-full shadow-md hover:bg-slate-800 transition-all whitespace-nowrap"
            >
              <Zap className="w-3.5 h-3.5 text-white" />
              <span>{lang === 'VI' ? 'Dùng Thử 14 Ngày' : 'Start Free Trial'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Language Switcher */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-900"
            >
              {lang === 'EN' ? '🇺🇸 EN' : '🇻🇳 VI'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-900 rounded-full bg-slate-100 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
              className="lg:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-2"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-slate-500" />
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
                  className="w-full py-2.5 px-4 rounded-xl border border-rose-200 text-rose-700 bg-rose-50 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                  <span>{lang === 'VI' ? 'Live Demo Admin' : 'Explore Live Demo'}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegisterModal();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5 text-white" />
                  <span>{lang === 'VI' ? 'Dùng Thử 14 Ngày' : 'Start 14-Day Free Trial'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
