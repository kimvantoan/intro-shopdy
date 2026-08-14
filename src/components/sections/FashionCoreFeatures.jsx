import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SpotlightCard } from '../react-bits/SpotlightCard';
import {
  Shirt,
  Sparkles,
  Zap,
  Globe,
  Layers,
  ShieldCheck,
  Smartphone,
  Video,
  BarChart3,
  Flame,
  QrCode,
  Box
} from 'lucide-react';

export const FashionCoreFeatures = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shirt,
      title: t.feat_1_title,
      tag: t.feat_1_tag,
      description: t.feat_1_desc,
      spotlight: 'rgba(217, 119, 6, 0.12)',
      badgeColor: 'border-amber-300 text-amber-800 bg-amber-50',
    },
    {
      icon: Video,
      title: t.feat_2_title,
      tag: t.feat_2_tag,
      description: t.feat_2_desc,
      spotlight: 'rgba(147, 51, 234, 0.12)',
      badgeColor: 'border-purple-300 text-purple-800 bg-purple-50',
    },
    {
      icon: Smartphone,
      title: t.feat_3_title,
      tag: t.feat_3_tag,
      description: t.feat_3_desc,
      spotlight: 'rgba(225, 29, 72, 0.12)',
      badgeColor: 'border-rose-300 text-rose-800 bg-rose-50',
    },
    {
      icon: Flame,
      title: t.feat_4_title,
      tag: t.feat_4_tag,
      description: t.feat_4_desc,
      spotlight: 'rgba(16, 185, 129, 0.12)',
      badgeColor: 'border-emerald-300 text-emerald-800 bg-emerald-50',
    },
    {
      icon: Layers,
      title: t.feat_5_title,
      tag: t.feat_5_tag,
      description: t.feat_5_desc,
      spotlight: 'rgba(37, 99, 235, 0.12)',
      badgeColor: 'border-blue-300 text-blue-800 bg-blue-50',
    },
    {
      icon: QrCode,
      title: t.feat_6_title,
      tag: t.feat_6_tag,
      description: t.feat_6_desc,
      spotlight: 'rgba(219, 39, 119, 0.12)',
      badgeColor: 'border-pink-300 text-pink-800 bg-pink-50',
    },
  ];

  return (
    <section id="features" className="relative py-28 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-amber-50 text-xs font-bold text-amber-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {t.features_badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.features_title} <span className="gold-shiny-text">{t.features_title_highlight}</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium">
            {t.features_sub}
          </p>
        </div>

        {/* Feature Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={feature.spotlight}
                  className="h-full flex flex-col justify-between shadow-md hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 shadow-inner">
                        <Icon className="w-6 h-6 text-amber-700" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${feature.badgeColor}`}>
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-purple-700 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center text-xs font-bold text-purple-700 hover:text-purple-950 transition-colors">
                    {t.features_explore}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
