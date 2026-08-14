import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';

const FASHION_LOOKBOOKS = [
  {
    title: 'NÒIR Haute Couture',
    brand: 'Maison Nòir',
    category: 'Winter Lookbook',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
    stats: 'Conversion +42%',
  },
  {
    title: 'L\'Éléganse Paris',
    brand: 'L\'Éléganse',
    category: 'Spring Runway',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
    stats: 'Size AI Accurate 99%',
  },
  {
    title: 'Vanguard Streetwear',
    brand: 'Vanguard Co.',
    category: 'Limited Edition Drop',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800',
    stats: 'Sold out 100k units/min',
  },
  {
    title: 'Minimalist Atelier',
    brand: 'Atelier Studio',
    category: 'Capsule Collection',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800',
    stats: 'AR Try-On +55%',
  },
  {
    title: 'Sartorial Tailoring',
    brand: 'Sartorial House',
    category: 'Custom Fit Matrix',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800',
    stats: 'Returns -48%',
  },
  {
    title: 'Velvet Horizon',
    brand: 'Velvet Studio',
    category: 'Silk & Cashmere',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800',
    stats: 'Omnichannel POS Sync',
  },
];

export const RollingGallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="relative overflow-hidden py-12 w-full">
      {/* Infinite scrolling track */}
      <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
        {[...FASHION_LOOKBOOKS, ...FASHION_LOOKBOOKS].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => setActiveItem(item)}
            className="group relative h-96 w-72 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg backdrop-blur-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            {/* Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <p className="text-xs uppercase tracking-widest text-purple-300 font-medium">
                {item.brand}
              </p>
              <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                {item.title}
              </h4>
              <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-2 text-xs text-slate-300">
                <span className="font-semibold text-emerald-400">{item.stats}</span>
                <span className="flex items-center gap-1 text-purple-300 group-hover:underline font-semibold">
                  <Eye className="w-3.5 h-3.5" /> View Storefront
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
