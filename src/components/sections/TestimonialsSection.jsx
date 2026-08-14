import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RollingGallery } from '../react-bits/RollingGallery';
import { SpotlightCard } from '../react-bits/SpotlightCard';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection = () => {
  const { lang, t } = useLanguage();

  const testimonials = [
    {
      name: 'Hoang Minh Chau',
      role: 'Founder & CEO',
      brand: 'Maison Nòir Haute Couture',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
      content: lang === 'VI'
        ? 'Shopdy giúp chúng tôi quản lý 12 cửa hàng trực tuyến và đội ngũ 20 nhân sự cùng một giao diện duy nhất. Phân hệ Ads Manager & Email Marketing giúp tăng 65% lợi nhuận thuần!'
        : 'Shopdy allowed us to control 12 online storefronts and a 20-person team from a single command dashboard. The Ads Manager & Email Marketing suites boosted our Net Profit by 65%!',
      rating: 5,
      metric: 'Net Profit +65%',
    },
    {
      name: 'Alexandre Nguyen',
      role: 'Head of E-Commerce',
      brand: 'L\'Éléganse Paris',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
      content: lang === 'VI'
        ? 'Tính năng theo dõi doanh thu đóng góp của từng nhân sự Team và tích hợp Cổng thanh toán VietQR tự động là điểm vượt trội của Shopdy so với các hệ thống cũ.'
        : 'Tracking individual staff sales contributions and automated VietQR & credit card gateway processing are game-changers. Shopdy completely streamlined our operations.',
      rating: 5,
      metric: '12 Stores Synced',
    },
    {
      name: 'Tran Vu Bao',
      role: 'Creative Director',
      brand: 'Vanguard Urban Wear',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
      content: lang === 'VI'
        ? 'Giao diện đen trắng cực kỳ đẳng cấp, chuẩn luxury aesthetic. Đội ngũ marketing quản lý Creatives & Email vô cùng mượt mà. Cực kỳ khuyến nghị!'
        : 'The black & white visual layout matches world-class luxury aesthetic standards. Marketing workflow execution is seamless. Highly recommended!',
      rating: 5,
      metric: 'ROAS 13.6x',
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-slate-50 text-xs font-bold text-slate-900 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {t.test_badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
              {t.test_title} <span className="bw-shiny-text">Shopdy OS</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              delay={idx * 0.15}
              duration={0.6}
            >
              <SpotlightCard className="h-full flex flex-col justify-between p-6 border-slate-200 bg-white shadow-lg hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-extrabold text-white bg-slate-950 border border-slate-950 px-2.5 py-1 rounded-full">
                      {item.metric}
                    </span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6 font-medium">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-950"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold">
                      {item.role} &bull; <span className="text-slate-950 font-bold">{item.brand}</span>
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Rolling Fashion Lookbook Ribbon */}
        <ScrollReveal direction="up" delay={0.3} duration={0.6}>
          <div className="mt-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-slate-800 tracking-wider uppercase">
                {t.test_lookbook_title}
              </h3>
            </div>
            <RollingGallery />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
