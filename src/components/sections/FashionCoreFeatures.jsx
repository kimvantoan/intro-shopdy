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
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Sliders
} from 'lucide-react';

export const FashionCoreFeatures = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const allFeatures = [
    // --- 1. MANAGEMENT ---
    {
      category: 'MANAGEMENT',
      icon: LayoutDashboard,
      title: t.feat_dash_title,
      tag: t.feat_dash_tag,
      description: t.feat_dash_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-950 text-white space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-semibold">{lang === 'VI' ? 'Doanh Thu Realtime' : 'Realtime Net Revenue'}</span>
            <span className="text-rose-400 font-extrabold font-mono">+32.8%</span>
          </div>
          <p className="text-lg font-black font-display tracking-tight text-white">$128,450.00 USD</p>
          <div className="flex gap-1 h-2 items-end">
            <div className="flex-1 bg-slate-800 rounded-full h-1" />
            <div className="flex-1 bg-slate-800 rounded-full h-1.5" />
            <div className="flex-1 bg-slate-700 rounded-full h-2" />
            <div className="flex-1 bg-slate-600 rounded-full h-2.5" />
            <div className="flex-1 bg-white rounded-full h-3" />
          </div>
        </div>
      ),
    },
    {
      category: 'MANAGEMENT',
      icon: ShoppingBag,
      title: t.feat_orders_title,
      tag: t.feat_orders_tag,
      description: t.feat_orders_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
            <span>{lang === 'VI' ? 'Đơn Hàng #3892' : 'Order Pipeline #3892'}</span>
            <span className="text-slate-950 bg-slate-200 px-2 py-0.5 rounded-full">{lang === 'VI' ? 'Đã Xuất Kho' : 'Dispatched'}</span>
          </div>
          <div className="flex items-center justify-between gap-1 text-[11px] font-bold text-slate-900 pt-1">
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-slate-950" /> {lang === 'VI' ? 'Thanh Toán' : 'Paid'}</span>
            <span className="text-slate-400">&rarr;</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-slate-950" /> {lang === 'VI' ? 'Đóng Gói' : 'Packed'}</span>
            <span className="text-slate-400">&rarr;</span>
            <span className="flex items-center gap-1 text-slate-950"><Zap className="w-3 h-3 text-rose-600" /> {lang === 'VI' ? 'Giao Hàng' : 'Express'}</span>
          </div>
        </div>
      ),
    },
    {
      category: 'MANAGEMENT',
      icon: Package,
      title: t.feat_products_title,
      tag: t.feat_products_tag,
      description: t.feat_products_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-950">
            <span>{lang === 'VI' ? 'Sức Khỏe Kho SKU Multi-Variant' : 'Multi-Variant Stock Health'}</span>
            <span className="text-slate-950 font-mono">98.4%</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-slate-950 h-full rounded-full w-[98.4%]" />
          </div>
          <p className="text-[10px] text-slate-500 font-semibold">{lang === 'VI' ? 'Tự động cảnh báo khi tồn kho xuống dưới 10 sản phẩm' : 'Automated low-stock threshold triggers at 10 items'}</p>
        </div>
      ),
    },
    {
      category: 'MANAGEMENT',
      icon: Globe,
      title: t.feat_stores_title,
      tag: t.feat_stores_tag,
      description: t.feat_stores_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-extrabold text-slate-950">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-600 animate-ping" />
              maison-noir.shopdy.com
            </span>
            <span className="text-[10px] text-slate-700 bg-slate-200 border border-slate-300 px-2 py-0.5 rounded-full font-bold">{lang === 'VI' ? 'Đang Live' : 'Live'}</span>
          </div>
          <p className="text-[10px] text-slate-500 font-semibold">{lang === 'VI' ? 'Đồng bộ 3 Cửa Hàng Online cùng lúc' : 'Synced across 3 connected online storefronts'}</p>
        </div>
      ),
    },
    {
      category: 'MANAGEMENT',
      icon: Tag,
      title: t.feat_discounts_title,
      tag: t.feat_discounts_tag,
      description: t.feat_discounts_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-950 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{lang === 'VI' ? 'Mã Giảm Giá Live' : 'Active Flash Coupon'}</span>
            <p className="text-sm font-black font-mono text-white">AUTUMN30 (-30%)</p>
          </div>
          <span className="text-[11px] font-extrabold text-rose-400 bg-rose-950/80 border border-rose-800 px-2.5 py-1 rounded-full">{lang === 'VI' ? 'Flash Sale 24h' : 'Flash 24h'}</span>
        </div>
      ),
    },
    {
      category: 'MANAGEMENT',
      icon: Image,
      title: t.feat_media_title,
      tag: t.feat_media_tag,
      description: t.feat_media_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-2 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-3 gap-1.5">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200" alt="Lookbook 1" className="h-12 w-full object-cover rounded-xl border border-slate-300" />
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" alt="Lookbook 2" className="h-12 w-full object-cover rounded-xl border border-slate-300" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Lookbook 3" className="h-12 w-full object-cover rounded-xl border border-slate-300" />
        </div>
      ),
    },
    {
      category: 'MANAGEMENT',
      icon: Users,
      title: t.feat_team_title,
      tag: t.feat_team_tag,
      description: t.feat_team_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" alt="Staff 1" />
              <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Staff 2" />
            </div>
            <span className="text-xs font-bold text-slate-950">14 {lang === 'VI' ? 'Thành Viên Team' : 'Active Staff'}</span>
          </div>
          <span className="text-[10px] font-extrabold text-slate-950 bg-slate-200 border border-slate-300 px-2 py-0.5 rounded-full">#1 Top Sales KPI</span>
        </div>
      ),
    },

    // --- 2. MARKETING ---
    {
      category: 'MARKETING',
      icon: TrendingUp,
      title: t.feat_ads_title,
      tag: t.feat_ads_tag,
      description: t.feat_ads_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-950 text-white space-y-1.5">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-slate-400 font-semibold">{lang === 'VI' ? 'Chỉ Số ROAS Tổng' : 'Aggregated ROAS'}</span>
            <span className="text-white font-extrabold font-mono">13.6x Return</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Meta Ads: 14.2x</span>
            <span>TikTok: 12.8x</span>
            <span>Google: 11.5x</span>
          </div>
        </div>
      ),
    },
    {
      category: 'MARKETING',
      icon: Video,
      title: t.feat_creatives_title,
      tag: t.feat_creatives_tag,
      description: t.feat_creatives_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-slate-950" />
            <span className="text-xs font-bold text-slate-950">4K UHD Video Teaser</span>
          </div>
          <span className="text-[10px] font-bold text-white bg-slate-950 px-2 py-0.5 rounded-full">{lang === 'VI' ? 'Sẵn Sàng Ad Copy' : 'Ready'}</span>
        </div>
      ),
    },
    {
      category: 'MARKETING',
      icon: Mail,
      title: t.feat_email_title,
      tag: t.feat_email_tag,
      description: t.feat_email_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-950">
            <span>{lang === 'VI' ? 'Email Tự Động Phục Hồi Giỏ Hàng' : 'Cart Recovery Email Drip'}</span>
            <span className="text-slate-950 font-mono">48.2% Open Rate</span>
          </div>
          <p className="text-[10px] text-slate-500 font-medium">{lang === 'VI' ? 'Đã cứu thành công 420 giỏ hàng bỏ quên' : 'Recovered 420 abandoned carts this month'}</p>
        </div>
      ),
    },
    {
      category: 'MARKETING',
      icon: RefreshCw,
      title: t.feat_sync_title,
      tag: t.feat_sync_tag,
      description: t.feat_sync_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-950">
          <span>Meta &bull; TikTok &bull; Google</span>
          <span className="text-[10px] text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-600 animate-ping" />
            1-Click OAuth
          </span>
        </div>
      ),
    },

    // --- 3. SYSTEM MANAGER ---
    {
      category: 'SYSTEM',
      icon: Settings,
      title: t.feat_settings_title,
      tag: t.feat_settings_tag,
      description: t.feat_settings_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-950">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-slate-950" /> {lang === 'VI' ? 'Tên Miền Tùy Chỉnh SSL' : 'SSL Custom Domain'}</span>
          <span className="text-[10px] text-slate-950 bg-slate-200 border border-slate-300 px-2 py-0.5 rounded-full font-bold">256-bit Encrypted</span>
        </div>
      ),
    },
    {
      category: 'SYSTEM',
      icon: CreditCard,
      title: t.feat_payment_title,
      tag: t.feat_payment_tag,
      description: t.feat_payment_desc,
      spotlight: 'rgba(15, 23, 42, 0.08)',
      badgeColor: 'border-slate-900 text-slate-950 bg-slate-100',
      previewWidget: (
        <div className="mt-4 p-3 rounded-2xl bg-slate-950 text-white flex items-center justify-between text-xs font-extrabold">
          <span>VietQR &bull; Stripe &bull; MoMo &bull; ZaloPay &bull; COD</span>
          <span className="text-[10px] text-white bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">{lang === 'VI' ? '0.45s Tốc Độ' : '0.45s Speed'}</span>
        </div>
      ),
    },
  ];

  const filteredFeatures = activeCategory === 'ALL'
    ? allFeatures
    : allFeatures.filter((f) => f.category === activeCategory);

  return (
    <section id="features" className="relative py-28 overflow-hidden bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-bold text-slate-950 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-slate-950" />
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
          <div className="flex justify-center mb-14">
            <div className="inline-flex p-1.5 rounded-full border border-slate-300 bg-white shadow-lg backdrop-blur-xl gap-1">
              <button
                onClick={() => setActiveCategory('ALL')}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                  activeCategory === 'ALL'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {lang === 'VI' ? 'Tất Cả 13 Phân Hệ' : 'All System Modules (13)'}
              </button>
              <button
                onClick={() => setActiveCategory('MANAGEMENT')}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                  activeCategory === 'MANAGEMENT'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                1. {lang === 'VI' ? 'Quản Lý Kinh Doanh' : 'Business Management'}
              </button>
              <button
                onClick={() => setActiveCategory('MARKETING')}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                  activeCategory === 'MARKETING'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                2. {lang === 'VI' ? 'Chiến Dịch Marketing' : 'Marketing Suite'}
              </button>
              <button
                onClick={() => setActiveCategory('SYSTEM')}
                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all ${
                  activeCategory === 'SYSTEM'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                3. {lang === 'VI' ? 'Quản Lý Hệ Thống' : 'System Manager'}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid with Live Interactive Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={feature.title}
                  direction="up"
                  delay={(idx % 3) * 0.12}
                  duration={0.5}
                >
                  <SpotlightCard
                    spotlightColor={feature.spotlight}
                    className="h-full flex flex-col justify-between border-slate-300 bg-white shadow-lg hover:shadow-2xl hover:border-slate-950 transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300 bg-slate-950 text-white shadow-md group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-300 bg-slate-100 text-slate-950 shadow-sm">
                          {feature.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-black text-slate-950 mb-2.5 group-hover:text-slate-800 transition-colors flex items-center justify-between">
                        <span>{feature.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {feature.description}
                      </p>

                      {/* Live Interactive Feature Preview Widget */}
                      {feature.previewWidget}
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-black text-slate-950 group-hover:text-slate-800 transition-colors">
                      <span>{t.features_explore}</span>
                      <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
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
