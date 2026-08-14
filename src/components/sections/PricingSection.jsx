import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { MagneticButton } from '../react-bits/MagneticButton';

export const PricingSection = ({ onOpenRegisterModal }) => {
  const { lang, t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      name: lang === 'VI' ? 'Gói Boutique Store OS' : 'Boutique Store OS',
      tagline: lang === 'VI' ? 'Dành cho shop thời trang & nhà thiết kế mới khởi nghiệp' : 'Ideal for emerging fashion designers and boutique stores',
      monthlyPrice: 69,
      annualPrice: 49,
      highlight: false,
      features: lang === 'VI' ? [
        '1 Giấy phép Storefront Visual Studio (4K)',
        'Dashboard tài chính & Quản lý đơn hàng',
        'Quản lý tới 5,000 SKU biến thể Size/Màu',
        'Chiến dịch Ads Manager & Email Marketing',
        'Tích hợp VietQR, Stripe, MoMo, COD',
        'Tài khoản phân quyền cho 3 nhân sự Team',
      ] : [
        '1 Storefront Visual Studio License (4K)',
        'Financial Dashboard & Orders Management',
        'Manage up to 5,000 Variant SKUs',
        'Omnichannel Ads & Email Campaign Suite',
        'Integrated Stripe, VietQR & Credit Cards',
        'Role access permissions for 3 team members',
      ],
      cta: lang === 'VI' ? 'Dùng Thử 14 Ngày Miễn Phí' : 'Start 14-Day Free Trial',
    },
    {
      name: lang === 'VI' ? 'Gói Fashion Brand OS' : 'Fashion Brand OS',
      tagline: lang === 'VI' ? 'Cho thương hiệu tăng trưởng mạnh & mở bán BST hot' : 'For fast-growing fashion brands launching hype drops',
      monthlyPrice: 189,
      annualPrice: 149,
      highlight: true,
      features: lang === 'VI' ? [
        'Toàn bộ tính năng gói Boutique Store OS',
        'Phân hệ Quản lý Team & Đo lường doanh thu nhân sự',
        'Creatives Studio & Đồng bộ Sync Accounts',
        'Đồng bộ Realtime TikTok Shop & 5 Storefronts',
        'Hạ tầng Flash Sale chịu tải 100,000 RPM',
        'Tùy biến Cổng thanh toán & Quy tắc Thuế/Phí',
        'Báo cáo Phân Tích Doanh Thu & Marketing ROAS',
      ] : [
        'Everything in Boutique Store OS',
        'Team Management & Staff Sales Revenue Tracker',
        'Creatives Content Studio & Sync Accounts',
        'Realtime Sync for TikTok Shop & 5 Storefronts',
        '100,000 RPM Flash Sale Infrastructure',
        'Custom Payment Gateways & Tax Rules',
        'AI Revenue & Marketing ROAS Reporting',
      ],
      cta: lang === 'VI' ? 'Kích Hoạt Gói Khuyên Dùng' : 'Choose Most Popular Plan',
    },
    {
      name: lang === 'VI' ? 'Gói Enterprise Luxury House' : 'Enterprise Luxury House',
      tagline: lang === 'VI' ? 'Dành cho Nhà mốt lớn, Chuỗi Showroom & Thương hiệu Quốc tế' : 'For flagship fashion houses, multi-chain POS & global brands',
      monthlyPrice: 449,
      annualPrice: 359,
      highlight: false,
      features: lang === 'VI' ? [
        'Toàn bộ tính năng gói Fashion Brand OS',
        'Hạ tầng Cloud Dedicated (500,000 RPM Surge Shield)',
        'Không giới hạn Cửa Hàng Online & Kênh Bán',
        'Tích hợp Hệ thống ERP (SAP, Salesforce, KiotViet)',
        'Tùy biến Giao diện System Settings độc bản',
        'VIP Account Manager & Hỗ trợ Kỹ thuật 24/7',
        'SLA Cam Kết Uptime 99.99%',
      ] : [
        'Everything in Fashion Brand OS',
        'Dedicated Cloud SLA (500,000 RPM Surge Shield)',
        'Unlimited Online Stores & Sales Channels',
        'Custom ERP Integrations (SAP, Salesforce, KiotViet)',
        'Bespoke System Settings & Security Config',
        'Dedicated VIP Account Manager & 24/7 Tech Lead',
        '99.99% Uptime Guarantee SLA',
      ],
      cta: lang === 'VI' ? 'Liên Hệ Đội Ngũ Enterprise' : 'Contact Enterprise Team',
    },
  ];

  const formatPrice = (price) => {
    if (lang === 'VI') {
      return (price * 25000).toLocaleString('vi-VN') + '₫';
    }
    return '$' + price.toLocaleString('en-US') + ' USD';
  };

  return (
    <section id="pricing" className="relative py-28 border-t border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-amber-50 text-xs font-bold text-amber-800 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {t.pricing_badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
              {t.pricing_title} <span className="gold-shiny-text">{t.pricing_title_highlight}</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-medium">
              {t.pricing_sub}
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`text-xs font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>{t.pricing_monthly}</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-7 w-14 items-center rounded-full bg-slate-200 p-1 transition-colors border border-slate-300"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-gradient-to-tr from-amber-500 to-purple-600 transition-transform ${
                    isAnnual ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-bold flex items-center gap-1.5 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                {t.pricing_annual}
                <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                  {t.pricing_save_badge}
                </span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <ScrollReveal
                key={plan.name}
                direction="up"
                delay={idx * 0.15}
                duration={0.6}
                className="flex"
              >
                <div
                  className={`relative w-full flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                    plan.highlight
                      ? 'border-2 border-purple-400 bg-white shadow-2xl shadow-purple-900/10 lg:-translate-y-4'
                      : 'border border-slate-200 bg-white/90 hover:border-slate-300 shadow-md'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 px-4 py-1 text-[11px] font-extrabold text-white shadow-md uppercase tracking-wider">
                      {t.pricing_popular}
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mb-6 h-10">{plan.tagline}</p>

                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <span className="font-display text-4xl font-extrabold text-amber-700">
                        {formatPrice(price)}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold"> / {lang === 'VI' ? 'tháng' : 'month'}</span>
                      {isAnnual && (
                        <p className="text-[10px] text-emerald-700 font-bold mt-1">
                          {lang === 'VI' ? `Thanh toán năm (${formatPrice(price * 12)})` : `Billed annually (${formatPrice(price * 12)} / yr)`}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenRegisterModal}
                    className={`w-full py-3.5 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white shadow-md hover:brightness-110'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    <Zap className="w-4 h-4 text-amber-200" />
                    {plan.cta}
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
