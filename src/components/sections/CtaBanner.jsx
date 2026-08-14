import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import { Sparkles, ArrowRight, Zap, CheckCircle2, Globe, Search } from 'lucide-react';

export const CtaBanner = ({ onOpenRegisterModal }) => {
  const { lang, t } = useLanguage();
  const [storeSubdomain, setStoreSubdomain] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (storeSubdomain.trim()) {
      setIsChecked(true);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="zoom" duration={0.6}>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-2xl backdrop-blur-2xl text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/40 bg-amber-50 text-xs font-bold text-amber-800 mb-6">
              <Sparkles className="w-4 h-4 text-amber-600" />
              {t.cta_badge}
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 max-w-4xl mx-auto leading-tight">
              {t.cta_title} <span className="gold-shiny-text">{t.cta_title_highlight}</span>
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              {t.cta_sub}
            </p>

            {/* Interactive Subdomain Checker Input */}
            <form onSubmit={handleCheck} className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Globe className="w-4 h-4 text-amber-600" />
                </div>
                <input
                  type="text"
                  value={storeSubdomain}
                  onChange={(e) => {
                    setStoreSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''));
                    setIsChecked(false);
                  }}
                  placeholder={lang === 'VI' ? 'ten-brand-cua-ban' : 'your-brand-name'}
                  className="w-full pl-10 pr-28 py-3.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-amber-500"
                />
                <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-slate-500 font-bold">
                  .shopdy.com
                </span>
              </div>

              <button
                type="submit"
                onClick={onOpenRegisterModal}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Zap className="w-4 h-4 text-amber-200" />
                {t.cta_btn}
              </button>
            </form>

            {isChecked && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-xs text-emerald-700 font-bold flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                Subdomain <strong className="text-slate-900">{storeSubdomain}.shopdy.com</strong> {lang === 'VI' ? 'hoàn toàn khả dụng! Bắt đầu tạo store ngay.' : 'is available! Complete instant registration.'}
              </motion.p>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {lang === 'VI' ? 'Miễn phí 14 ngày' : '14-Day Free Access'}
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {lang === 'VI' ? 'Setup giao diện trong 5 phút' : 'Instant Storefront Provisioning'}
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {lang === 'VI' ? 'Hỗ trợ kỹ thuật 24/7' : '24/7 Tech Lead Support'}
              </span>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
