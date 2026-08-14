import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import { Sparkles, Calculator, TrendingUp, DollarSign, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { MagneticButton } from '../react-bits/MagneticButton';

export const RoiCalculatorSection = ({ onOpenRegisterModal }) => {
  const { lang, t } = useLanguage();
  const [ordersPerMonth, setOrdersPerMonth] = useState(2500);
  const [avgOrderValue, setAvgOrderValue] = useState(120);

  const calculateResults = () => {
    const monthlyGMV = ordersPerMonth * avgOrderValue;
    const annualGMV = monthlyGMV * 12;
    const returnRateSaved = annualGMV * 0.055;
    const conversionExtraRev = annualGMV * 0.142;
    const totalBenefit = returnRateSaved + conversionExtraRev;

    return {
      annualGMV,
      returnRateSaved,
      conversionExtraRev,
      totalBenefit,
    };
  };

  const results = calculateResults();

  const formatCurrency = (val) => {
    if (lang === 'VI') {
      return (val * 25000).toLocaleString('vi-VN') + ' ₫';
    }
    return '$' + val.toLocaleString('en-US') + ' USD';
  };

  return (
    <section id="roi-calculator" className="relative py-28 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-xs font-bold text-slate-900 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              {t.roi_badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
              {t.roi_title} <span className="bw-shiny-text">Shopdy OS</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-medium">
              {t.roi_sub}
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Calculator Box */}
        <ScrollReveal direction="zoom" delay={0.2} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2 mb-6">
                  <Calculator className="w-5 h-5 text-slate-950" />
                  {lang === 'VI' ? 'Cấu Hình Quy Mô Cửa Hàng' : 'Input Store Operational Metrics'}
                </h3>

                {/* Slider 1: Monthly Orders */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{t.roi_orders_label}</span>
                    <span className="text-slate-950 font-black text-sm font-mono">{ordersPerMonth.toLocaleString()} orders/mo</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={ordersPerMonth}
                    onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-950"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                    <span>500 orders</span>
                    <span>25,000 orders</span>
                    <span>50,000+ orders</span>
                  </div>
                </div>

                {/* Slider 2: AOV */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <span>{t.roi_aov_label}</span>
                    <span className="text-slate-950 font-black text-sm font-mono">{formatCurrency(avgOrderValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-950"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                    <span>{formatCurrency(20)}</span>
                    <span>{formatCurrency(500)}</span>
                    <span>{formatCurrency(1000)}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-slate-950 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-slate-950" />
                  {lang === 'VI' ? 'Mô hình tính toán chuẩn E-Commerce:' : 'E-Commerce Benchmark Model:'}
                </p>
                <p className="text-[11px] text-slate-600 font-medium">
                  {lang === 'VI'
                    ? 'Dựa trên dữ liệu thực tế từ hơn 1,200 cửa hàng: Tối ưu chi phí nhân sự, giảm hoàn đơn và tăng hiệu quả quảng cáo ROAS.'
                    : 'Derived from aggregate metric data across 1,200+ connected merchant stores.'}
                </p>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                  {t.roi_total_label}
                </p>

                <div className="font-display text-4xl sm:text-5xl font-black text-slate-950 my-4">
                  {formatCurrency(results.totalBenefit)}
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-start text-xs">
                    <span className="text-slate-600 font-medium">{t.roi_return_saved}</span>
                    <strong className="text-slate-950 font-bold">{formatCurrency(results.returnRateSaved)}</strong>
                  </div>

                  <div className="flex justify-between items-start text-xs">
                    <span className="text-slate-600 font-medium">{t.roi_extra_rev}</span>
                    <strong className="text-slate-950 font-bold">{formatCurrency(results.conversionExtraRev)}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <MagneticButton
                  onClick={onOpenRegisterModal}
                  className="w-full py-4 bg-slate-950 text-white font-extrabold text-xs shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                  {t.roi_cta}
                </MagneticButton>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
