import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { RollingGallery } from '../react-bits/RollingGallery';
import { SpotlightCard } from '../react-bits/SpotlightCard';
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
        ? 'Trước đây khi tung BST mới vào lúc 20h, website cũ luôn bị nghẽn giật lag. Chuyển sang Shopdy, bộ hạ tầng Flash Sale xử lý 100k đơn mượt như nhung. Đặc biệt AI Size Matcher giúp giảm 50% tỉ lệ khách đổi size!'
        : 'Previously, whenever we dropped a new collection at 8 PM, our website crashed due to traffic spikes. After switching to Shopdy, the Flash Sale Engine processed 100k checkout requests effortlessly. The AI Fit Engine also cut sizing returns by 50%!',
      rating: 5,
      metric: 'Collection Sales +65%',
    },
    {
      name: 'Alexandre Nguyen',
      role: 'Head of E-Commerce',
      brand: 'L\'Éléganse Paris',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
      content: lang === 'VI'
        ? 'Visual Lookbook 4K và tính năng đồng bộ kho TikTok Live realtime của Shopdy là điểm quyết định. Chúng tôi quản lý 12 showroom cùng 1 hệ thống duy nhất mà không lo lệch kho bao giờ.'
        : 'The 4K Visual Lookbook Studio and realtime TikTok Live POS inventory synchronization were game changers. We manage 12 flagship boutiques and online stores from a single unified Shopdy dashboard.',
      rating: 5,
      metric: '12 Flagship POS Synced',
    },
    {
      name: 'Tran Vu Bao',
      role: 'Creative Director',
      brand: 'Vanguard Urban Wear',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
      content: lang === 'VI'
        ? 'Giao diện cực kỳ đẳng cấp, chuẩn luxury aesthetic. Khách hàng Gen Z đánh giá trải nghiệm mua sắm mượt như ứng dụng iOS bản địa. Cực kỳ khuyến nghị các D2C Fashion Brand!'
        : 'The visual presentation is world-class, matching true luxury aesthetic standards. Gen Z customers praise the seamless native-app feel. Highly recommended for D2C fashion founders!',
      rating: 5,
      metric: 'Conversion Rate 4.8%',
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-300 bg-purple-50 text-xs font-bold text-purple-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {t.test_badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            {t.test_title} <span className="gold-shiny-text">Shopdy OS</span>
          </h2>
        </div>

        {/* Testimonial Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between p-6 shadow-md hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded-full">
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
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-400"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      {item.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold">
                      {item.role} &bull; <span className="text-amber-700 font-bold">{item.brand}</span>
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Rolling Fashion Lookbook Ribbon */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-slate-800 tracking-wider uppercase">
              {t.test_lookbook_title}
            </h3>
          </div>
          <RollingGallery />
        </div>

      </div>
    </section>
  );
};
