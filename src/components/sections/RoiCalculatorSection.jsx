import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Calculator, Sparkles, TrendingUp, DollarSign, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const RoiCalculatorSection = ({ onOpenRegisterModal }) => {
  const { lang, t } = useLanguage();
  const [monthlyOrders, setMonthlyOrders] = useState(2500);
  const [avgOrderValue, setAvgOrderValue] = useState(85);

  const monthlyGMV = monthlyOrders * avgOrderValue;
  const yearlyGMV = monthlyGMV * 12;

  const monthlyReturnSaved = Math.round(monthlyOrders * 0.15 * 12);
  const yearlyReturnSaved = monthlyReturnSaved * 12;

  const monthlyExtraRevenue = Math.round(monthlyGMV * 0.28);
  const yearlyExtraRevenue = monthlyExtraRevenue * 12;

  const totalYearlyBoost = yearlyReturnSaved + yearlyExtraRevenue;

  const formatAmount = (amount) => {
    if (lang === 'VI') {
      const amountVND = amount * 25000;
      if (amountVND >= 1000000000) {
        return (amountVND / 1000000000).toFixed(2) + ' Tỷ VNĐ';
      }
      return (amountVND / 1000000).toFixed(0) + ' Triệu VNĐ';
    }
    return '$' + amount.toLocaleString('en-US') + ' USD';
  };

  return (
    <section id="roi-calculator" className="relative py-28 border-t border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-400/50 bg-emerald-50 text-xs font-bold text-emerald-800">
              <Calculator className="w-3.5 h-3.5 text-emerald-600" />
              {t.roi_badge}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              {t.roi_title} <span className="gold-shiny-text">Shopdy OS</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {t.roi_sub}
            </p>

            {/* Slider 1 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {t.roi_orders_label}
                </label>
                <span className="text-xl font-extrabold text-amber-700 font-display">
                  {monthlyOrders.toLocaleString('en-US')} {lang === 'VI' ? 'đơn' : 'orders'} / mo
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={25000}
                step={100}
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* Slider 2 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {t.roi_aov_label}
                </label>
                <span className="text-xl font-extrabold text-purple-700 font-display">
                  {formatAmount(avgOrderValue)}
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={350}
                step={5}
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-white p-8 shadow-2xl backdrop-blur-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {lang === 'VI' ? 'TỔNG NĂNG LỰC ĐÓNG GÓP DOANH THU' : 'TOTAL ANNUAL PLATFORM VALUE BOOST'}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full">
                  Verified ROI Model
                </span>
              </div>

              <div className="mb-8">
                <p className="text-xs font-semibold text-slate-600 mb-1">
                  {t.roi_total_label}
                </p>
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-amber-700 tracking-tight">
                  + {formatAmount(totalYearlyBoost)}
                </p>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{t.roi_return_saved}</p>
                      <p className="text-[10px] text-slate-500 font-medium">45% reduction in size exchange returns</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-emerald-700 font-mono">
                    +{formatAmount(yearlyReturnSaved)} / yr
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{t.roi_extra_rev}</p>
                      <p className="text-[10px] text-slate-500 font-medium">+28% conversion rate bump</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-purple-700 font-mono">
                    +{formatAmount(yearlyExtraRevenue)} / yr
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenRegisterModal}
                className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-sm shadow-xl shadow-purple-600/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                {t.roi_cta}
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
