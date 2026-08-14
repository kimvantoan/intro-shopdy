import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../react-bits/ScrollReveal';

export const BrandScrollerSection = () => {
  const { t } = useLanguage();

  const BRANDS = [
    { name: "MAISON NÒIR", logo: "✦ MAISON NÒIR" },
    { name: "L'ÉLÉGANSE PARIS", logo: "❖ L'ÉLÉGANSE" },
    { name: "VANGUARD URBAN", logo: "▲ VANGUARD" },
    { name: "ATELIER COUTURE", logo: "◈ ATELIER" },
    { name: "KIMONO STUDIO", logo: "✿ KIMONO OS" },
    { name: "SARTORIAL LUXE", logo: "⚡ SARTORIAL" },
    { name: "MODERN BOTANICA", logo: "🌿 BOTANICA" },
    { name: "VALENTINA MILAN", logo: "★ VALENTINA" },
  ];

  return (
    <section className="relative py-12 border-y border-slate-200/80 bg-white overflow-hidden">
      <ScrollReveal direction="up" duration={0.6}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
            {t.brand_trusted}
          </p>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-12 sm:gap-20 items-center">
            {BRANDS.concat(BRANDS).map((b, i) => (
              <span
                key={i}
                className="text-lg sm:text-2xl font-black font-display tracking-wider text-slate-400 hover:text-purple-700 transition-colors cursor-pointer select-none"
              >
                {b.logo}
              </span>
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee-reverse whitespace-nowrap gap-12 sm:gap-20 items-center opacity-0 group-hover:opacity-10 pointer-events-none">
            {BRANDS.concat(BRANDS).map((b, i) => (
              <span
                key={i}
                className="text-lg sm:text-2xl font-black font-display tracking-wider text-slate-900"
              >
                {b.logo}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
