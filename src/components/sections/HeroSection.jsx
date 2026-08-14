import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SplitText } from '../react-bits/SplitText';
import { BlurText } from '../react-bits/BlurText';
import { MagneticButton } from '../react-bits/MagneticButton';
import { CountUp } from '../react-bits/CountUp';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import {
  Sparkles,
  Zap,
  Play,
  Shirt,
  LayoutDashboard,
  TrendingUp,
  CheckCircle2,
  Maximize2,
  Layers,
  Flame,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Cpu,
  BarChart3,
  ShoppingBag,
  Users,
  CreditCard
} from 'lucide-react';

export const HeroSection = ({ onOpenDemoModal, onOpenRegisterModal }) => {
  const { t } = useLanguage();
  const [activeModule, setActiveModule] = useState('dashboard');

  const modules = {
    dashboard: {
      name: 'Financial Dashboard',
      status: '$128,450 Revenue',
      detail: 'Real-time Net Profit, Order Volume, Conversion & Ad Spend ROAS.',
      tag: 'Realtime Analytics',
    },
    team: {
      name: 'Team & Staff KPI',
      status: '14 Active Staff Members',
      detail: 'Monitors individual sales contribution & role-based permissions.',
      tag: 'Team Management',
    },
    ads: {
      name: 'Ads & Marketing',
      status: '13.6x Ad ROAS',
      detail: 'Omnichannel campaign manager (Meta, Google, TikTok Ads & Email).',
      tag: 'Marketing Suite',
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-white">
      {/* Background ambient lighting Shaders */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-slate-100/60 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Shimmer Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-slate-50 backdrop-blur-xl mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-slate-900 animate-pulse" />
              <span className="text-xs font-bold tracking-wide bw-shiny-text uppercase">
                ✦ {t.hero_badge}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-rose-600 animate-ping" />
            </motion.div>

            {/* SplitText Headline */}
            <div className="mb-6">
              <SplitText
                key={t.hero_title}
                text={t.hero_title}
                as="h1"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]"
                stagger={0.03}
              />
            </div>

            {/* Sub-heading with BlurText */}
            <BlurText
              key={t.hero_sub}
              text={t.hero_sub}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed font-medium"
              delay={0.3}
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <MagneticButton
                onClick={onOpenRegisterModal}
                className="w-full sm:w-auto px-8 py-4 bg-slate-950 text-white font-black text-sm hover:bg-slate-800 shadow-xl transition-all"
              >
                <Zap className="w-4 h-4 text-white" />
                {t.hero_cta_trial}
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>

              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-rose-200 bg-rose-50 hover:bg-rose-100/80 text-rose-700 font-bold text-sm flex items-center justify-center gap-2 shadow-sm backdrop-blur-xl transition-all duration-300"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white">
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                </div>
                {t.hero_cta_demo}
              </button>
            </motion.div>

            {/* Trust Bullet Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-slate-900" /> {t.hero_check1}
              </span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-slate-900" /> {t.hero_check2}
              </span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-slate-900" /> {t.hero_check3}
              </span>
            </div>
          </div>

          {/* Right Column: Shopdy Admin Control Tower */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl backdrop-blur-2xl">
                
                <div className="absolute -top-4 -right-4 z-20 flex items-center gap-2 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2 shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-white font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Platform Core</p>
                    <p className="text-xs font-extrabold text-slate-950">99.99% Enterprise SLA</p>
                  </div>
                </div>

                <div className="border-b border-slate-200 pb-4 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-slate-900" />
                    <span className="text-xs font-bold text-slate-950 font-mono">
                      {t.hero_core_title}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-600 animate-ping" />
                    {t.hero_core_status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {Object.keys(modules).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveModule(key)}
                        className={`p-2.5 rounded-xl text-[11px] font-bold transition-all border text-center ${
                          activeModule === key
                            ? 'border-slate-950 bg-slate-950 text-white shadow-sm'
                            : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        {modules[key].name}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-950">
                        {modules[activeModule].name}
                      </span>
                      <span className="text-[10px] font-bold text-rose-700 bg-rose-100 border border-rose-200 px-2 py-0.5 rounded">
                        {modules[activeModule].tag}
                      </span>
                    </div>

                    <p className="text-xl font-extrabold text-slate-950 font-display">
                      {modules[activeModule].status}
                    </p>
                    <p className="text-xs text-slate-600 font-medium">
                      {modules[activeModule].detail}
                    </p>

                    <button
                      onClick={onOpenDemoModal}
                      className="w-full mt-2 py-2.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-slate-800 transition-all"
                    >
                      <BarChart3 className="w-3.5 h-3.5 text-white" />
                      Test Console Diagnostics
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" alt="Founder" />
                      <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="CTO" />
                      <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" alt="VP Ops" />
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      {t.hero_core_trust}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-950 bg-slate-200 border border-slate-300 px-2.5 py-1 rounded-full">
                    {t.hero_core_saas}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Metric Stat Bar */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl border border-slate-200 bg-white shadow-xl backdrop-blur-xl">
            <div className="text-center p-4 border-r border-slate-200 last:border-0">
              <p className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
                <CountUp end={99.99} decimals={2} suffix="%" />
              </p>
              <p className="mt-1 text-xs text-slate-600 font-semibold">{t.metric_uptime}</p>
            </div>

            <div className="text-center p-4 border-r border-slate-200 last:border-0">
              <p className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
                <CountUp end={32.8} decimals={1} prefix="+" suffix="%" />
              </p>
              <p className="mt-1 text-xs text-slate-600 font-semibold">{t.metric_return}</p>
            </div>

            <div className="text-center p-4 border-r border-slate-200 last:border-0">
              <p className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
                <CountUp end={13.6} decimals={1} suffix="x" />
              </p>
              <p className="mt-1 text-xs text-slate-600 font-semibold">{t.metric_conversion}</p>
            </div>

            <div className="text-center p-4">
              <p className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
                <CountUp end={150} suffix="K+" />
              </p>
              <p className="mt-1 text-xs text-slate-600 font-semibold">{t.metric_surge}</p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
