import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Award } from 'lucide-react';

const BRAND_PARTNERS = [
  { name: "MAISON NÒIR", badge: "Haute Couture" },
  { name: "L'ÉLÉGANSE PARIS", badge: "Luxury Ready-To-Wear" },
  { name: "VANGUARD CO.", badge: "Streetwear D2C" },
  { name: "ATELIER SARTORIAL", badge: "Tailoring House" },
  { name: "VELVET & SILK", badge: "Boutique Chain" },
  { name: "VERVE BOUTIQUE", badge: "Omnichannel POS" },
  { name: "NOIR STUDIO", badge: "Limited Drop" },
  { name: "HERITAGE LEATHER", badge: "Handmade Goods" },
];

export const BrandScrollerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 border-y border-slate-200 bg-white/60 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-bold flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-amber-600" />
          {t.brand_trusted}
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-12 animate-marquee whitespace-nowrap py-2 group-hover:[animation-play-state:paused]">
          {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-purple-300 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-600/80" />
              <span className="font-display text-lg font-extrabold tracking-widest text-slate-800 hover:text-purple-950">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-100 border border-purple-300 text-purple-800">
                {brand.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
