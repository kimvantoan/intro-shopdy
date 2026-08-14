import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
  ShoppingBag,
  LayoutDashboard,
  Sparkles,
  Shirt,
  CheckCircle2,
  TrendingUp,
  Sliders,
  DollarSign,
  Package,
  Layers,
  ArrowRight,
  Eye,
  RefreshCw,
  Cpu
} from 'lucide-react';

export const InteractiveStorefrontDemo = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('storefront');
  
  const [jacket, setJacket] = useState('Coat');

  const outfitImages = {
    Coat: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
    Blazer: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
    Jacket: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800',
  };

  return (
    <section id="interactive-demo" className="relative py-28 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-300 bg-purple-50 text-xs font-bold text-purple-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {t.demo_badge}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            {t.demo_title} <span className="gold-shiny-text">{t.demo_title_highlight}</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-medium">
            {t.demo_sub}
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full border border-slate-200 bg-slate-100/90 backdrop-blur-xl shadow-inner">
            <button
              onClick={() => setActiveTab('storefront')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'storefront'
                  ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {t.tab_1}
            </button>

            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'admin'
                  ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              {t.tab_2}
            </button>

            <button
              onClick={() => setActiveTab('ai_config')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'ai_config'
                  ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Shirt className="w-4 h-4" />
              {t.tab_3}
            </button>
          </div>
        </div>

        {/* Showcase Container */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 shadow-xl">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: STOREFRONT VISUAL STUDIO */}
            {activeTab === 'storefront' && (
              <motion.div
                key="storefront"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
                    Haute Couture Theme Engine
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    Sub-0.8 Second Page Speed With 4K Video Banners
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Provide customers with a ultra-responsive native-app storefront experience. Built-in algorithmic body fit estimator tailored specifically to your brand's sizing charts.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 font-medium">
                        <strong className="text-slate-900">AI Size Calculator:</strong> Calculates precise sizing without tape measures.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 font-medium">
                        <strong className="text-slate-900">1-Step Checkout Engine:</strong> Accelerated checkout via Apple Pay, Google Pay, VietQR &amp; Credit Cards.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 text-white font-bold text-xs flex items-center gap-2 hover:shadow-lg shadow-purple-600/20"
                    >
                      <Eye className="w-4 h-4" />
                      {t.demo_modal_btn}
                    </button>
                  </div>
                </div>

                {/* Mockup Storefront Studio */}
                <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-rose-500" />
                      <div className="h-3 w-3 rounded-full bg-amber-500" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      https://lerose-paris.shopdy.com
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group overflow-hidden rounded-xl border border-slate-200">
                      <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500" alt="Fashion item" className="h-48 w-full object-cover" />
                      <div className="p-3 bg-white">
                        <p className="text-xs font-bold text-slate-900">Silk Evening Gown</p>
                        <p className="text-xs text-amber-700 font-bold mt-1">$1,280 USD</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-xl border border-slate-200">
                      <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=500" alt="Fashion item" className="h-48 w-full object-cover" />
                      <div className="p-3 bg-white">
                        <p className="text-xs font-bold text-slate-900">Vanguard Urban Jacket</p>
                        <p className="text-xs text-amber-700 font-bold mt-1">$780 USD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: OPERATIONS & ANALYTICS CONSOLE */}
            {activeTab === 'admin' && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <LayoutDashboard className="w-5 h-5 text-purple-600" />
                      Shopdy Fashion OS Real-Time Operations Console
                    </h3>
                    <p className="text-xs text-slate-500">Track revenue matrix, multi-channel stock sync, and AI fit analytics</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                      TikTok &amp; Instagram POS Sync Active
                    </span>
                  </div>
                </div>

                {/* Stat Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <p className="text-xs text-slate-500 font-semibold">Today's Platform Revenue</p>
                    <p className="text-2xl font-extrabold text-amber-700 font-display mt-1">$48,920 USD</p>
                    <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +28.4% vs yesterday
                    </span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <p className="text-xs text-slate-500 font-semibold">Active Luxury Shipments</p>
                    <p className="text-2xl font-extrabold text-purple-700 font-display mt-1">1,428 Orders</p>
                    <span className="text-[10px] text-slate-600 font-medium mt-1 inline-block">
                      Express 2H Routing: 312 Orders
                    </span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <p className="text-xs text-slate-500 font-semibold">AI Fit Accuracy Rate</p>
                    <p className="text-2xl font-extrabold text-emerald-700 font-display mt-1">98.4%</p>
                    <span className="text-[10px] text-emerald-800 font-bold mt-1 inline-block">
                      Saved $14,200 in return logistics
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: AI OUTFIT PAIRING CONTROLLER */}
            {activeTab === 'ai_config' && (
              <motion.div
                key="ai_config"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
                    <Shirt className="w-4 h-4 text-purple-600" />
                    AI Mix &amp; Match Outfit Studio
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Interactive Garment Pairing
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Test how customers dynamically combine outerwear, shirts, and trousers with live AI styling compatibility scores.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Outerwear Garment Type:</label>
                      <div className="flex gap-2">
                        {['Coat', 'Blazer', 'Jacket'].map((item) => (
                          <button
                            key={item}
                            onClick={() => setJacket(item)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                              jacket === item
                                ? 'border-purple-400 bg-purple-100 text-purple-900'
                                : 'border-slate-300 bg-white text-slate-600'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white max-w-sm w-full p-4 text-center shadow-lg">
                    <img
                      src={outfitImages[jacket]}
                      alt="Selected Outfit"
                      className="h-72 w-full object-cover rounded-xl mb-4 transition-all duration-500"
                    />
                    <div className="flex items-center justify-between text-xs text-slate-700 px-2">
                      <span className="font-bold text-slate-900">AI Outfit Compatibility:</span>
                      <span className="font-extrabold text-amber-800 bg-amber-50 border border-amber-300 px-2.5 py-1 rounded-full">
                        98/100 Perfect Match
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
