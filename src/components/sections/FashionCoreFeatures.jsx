import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { SpotlightCard } from '../react-bits/SpotlightCard';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Globe,
  Tag,
  Image,
  Users,
  TrendingUp,
  Video,
  Mail,
  RefreshCw,
  Settings,
  CreditCard,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const FashionCoreFeatures = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const allFeatures = [
    // --- 1. MANAGEMENT ---
    {
      category: 'MANAGEMENT',
      icon: LayoutDashboard,
      title: t.feat_dash_title,
      tag: t.feat_dash_tag,
      description: t.feat_dash_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MANAGEMENT',
      icon: ShoppingBag,
      title: t.feat_orders_title,
      tag: t.feat_orders_tag,
      description: t.feat_orders_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MANAGEMENT',
      icon: Package,
      title: t.feat_products_title,
      tag: t.feat_products_tag,
      description: t.feat_products_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MANAGEMENT',
      icon: Globe,
      title: t.feat_stores_title,
      tag: t.feat_stores_tag,
      description: t.feat_stores_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MANAGEMENT',
      icon: Tag,
      title: t.feat_discounts_title,
      tag: t.feat_discounts_tag,
      description: t.feat_discounts_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MANAGEMENT',
      icon: Image,
      title: t.feat_media_title,
      tag: t.feat_media_tag,
      description: t.feat_media_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MANAGEMENT',
      icon: Users,
      title: t.feat_team_title,
      tag: t.feat_team_tag,
      description: t.feat_team_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },

    // --- 2. MARKETING ---
    {
      category: 'MARKETING',
      icon: TrendingUp,
      title: t.feat_ads_title,
      tag: t.feat_ads_tag,
      description: t.feat_ads_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MARKETING',
      icon: Video,
      title: t.feat_creatives_title,
      tag: t.feat_creatives_tag,
      description: t.feat_creatives_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MARKETING',
      icon: Mail,
      title: t.feat_email_title,
      tag: t.feat_email_tag,
      description: t.feat_email_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'MARKETING',
      icon: RefreshCw,
      title: t.feat_sync_title,
      tag: t.feat_sync_tag,
      description: t.feat_sync_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },

    // --- 3. SYSTEM MANAGER ---
    {
      category: 'SYSTEM',
      icon: Settings,
      title: t.feat_settings_title,
      tag: t.feat_settings_tag,
      description: t.feat_settings_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
    {
      category: 'SYSTEM',
      icon: CreditCard,
      title: t.feat_payment_title,
      tag: t.feat_payment_tag,
      description: t.feat_payment_desc,
      spotlight: 'rgba(15, 23, 42, 0.06)',
      badgeColor: 'border-slate-300 text-slate-900 bg-slate-100',
    },
  ];

  const filteredFeatures = activeCategory === 'ALL'
    ? allFeatures
    : allFeatures.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="relative py-28 overflow-hidden bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-bold text-slate-900 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              {t.features_badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {t.features_title} <span className="bw-shiny-text">{t.features_title_highlight}</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium">
              {t.features_sub}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal direction="zoom" delay={0.2} duration={0.5}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full border border-slate-200 bg-white shadow-md backdrop-blur-xl gap-1">
              <button
                onClick={() => setActiveCategory('ALL')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === 'ALL'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                All System Modules (13)
              </button>
              <button
                onClick={() => setActiveCategory('MANAGEMENT')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === 'MANAGEMENT'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                1. {t.cat_management}
              </button>
              <button
                onClick={() => setActiveCategory('MARKETING')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === 'MARKETING'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                2. {t.cat_marketing}
              </button>
              <button
                onClick={() => setActiveCategory('SYSTEM')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === 'SYSTEM'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                3. {t.cat_system}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={feature.title}
                  direction="up"
                  delay={(idx % 3) * 0.15}
                  duration={0.5}
                >
                  <SpotlightCard
                    spotlightColor={feature.spotlight}
                    className="h-full flex flex-col justify-between border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-inner">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${feature.badgeColor}`}>
                          {feature.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-950 mb-3 hover:text-slate-700 transition-colors">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs font-bold text-slate-950 hover:text-slate-700 transition-colors">
                      {t.features_explore}
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
