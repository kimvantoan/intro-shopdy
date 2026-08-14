import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
  X,
  Shirt,
  Sparkles,
  LayoutDashboard,
  CheckCircle2,
  Heart,
  Star,
  ShieldCheck,
  Zap,
  ArrowRight,
  BarChart3
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const DemoStoreModal = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState('M');
  const [aiFitResult, setAiFitResult] = useState(null);
  const [userHeight, setUserHeight] = useState('175');
  const [userWeight, setUserWeight] = useState('70');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const handleCalcAiSize = (e) => {
    e.preventDefault();
    const h = parseInt(userHeight, 10);
    const w = parseInt(userWeight, 10);
    let size = 'M';
    if (w < 60) size = 'S';
    else if (w > 72) size = 'L';
    setSelectedSize(size);
    setAiFitResult({
      size,
      confidence: '98.6%',
      note: lang === 'VI'
        ? `Dựa trên chiều cao ${h}cm & cân nặng ${w}kg, Size ${size} sẽ ôm dáng vừa vặn hoàn hảo chuẩn form Haute Couture.`
        : `Based on height ${h}cm & weight ${w}kg, Size ${size} matches your brand's Haute Couture fit parameters perfectly.`,
    });
  };

  const handleSimulateOrder = () => {
    setIsOrdered(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {isOrdered ? (
            <div className="text-center py-16 space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-slate-900">
                {lang === 'VI' ? 'Thanh Toán Simulated Thành Công!' : 'Simulated Platform Checkout Completed!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                {lang === 'VI'
                  ? 'Bạn vừa trải nghiệm quy trình thanh toán 1-step siêu mượt của Shopdy Engine. Tốc độ xử lý chỉ 0.45 giây!'
                  : 'You just experienced Shopdy Engine\'s 1-step accelerated transaction pipeline. Processed in 0.45s with zero latency!'}
              </p>
              <button
                onClick={() => {
                  setIsOrdered(false);
                  onClose();
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-lg"
              >
                {lang === 'VI' ? 'Quay Lại Trang Chủ Shopdy' : 'Return to Shopdy Platform Homepage'}
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl font-extrabold text-amber-700">
                    L'ÉROSE PARIS
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded bg-purple-100 border border-purple-300 text-purple-900">
                    Interactive Console Preview
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  Shopdy AI Fit Engine Active
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-96">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                      alt="L'Érose Trench Coat"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-amber-800 backdrop-blur-md border border-slate-200">
                      ✦ Autumn 2026 Collection
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      L'Érose Silk Velvet Trench Coat
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-amber-700 font-display">
                        $1,280 USD
                      </span>
                      <div className="flex items-center gap-1 text-xs text-amber-600">
                        <Star className="w-4 h-4 fill-amber-500" />
                        <span className="font-bold text-slate-900">4.9</span> (128 Reviews)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 p-4 rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">{lang === 'VI' ? 'Chọn Size Sản Phẩm:' : 'Select Garment Size:'}</span>
                      <span className="font-bold text-purple-700">Size {selectedSize}</span>
                    </div>

                    <div className="flex gap-3">
                      {['S', 'M', 'L', 'XL'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedSize === s
                              ? 'border-purple-400 bg-purple-100 text-purple-900 shadow-sm'
                              : 'border-slate-300 bg-white text-slate-600'
                          }`}
                        >
                          Size {s}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-[11px] font-bold text-amber-800 flex items-center gap-1.5 mb-2">
                        <Sparkles className="w-3.5 h-3.5" /> {lang === 'VI' ? 'Tính Toán Size AI Precision:' : 'AI Sizing Precision Calculator:'}
                      </p>
                      <form onSubmit={handleCalcAiSize} className="flex gap-2">
                        <input
                          type="number"
                          value={userHeight}
                          onChange={(e) => setUserHeight(e.target.value)}
                          placeholder="Height (cm)"
                          className="w-1/2 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900"
                        />
                        <input
                          type="number"
                          value={userWeight}
                          onChange={(e) => setUserWeight(e.target.value)}
                          placeholder="Weight (kg)"
                          className="w-1/2 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-900"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 whitespace-nowrap"
                        >
                          {lang === 'VI' ? 'Tính Size' : 'Calculate'}
                        </button>
                      </form>

                      {aiFitResult && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 p-2.5 rounded-lg bg-purple-50 border border-purple-200 text-[11px] text-purple-900"
                        >
                          <p className="font-bold text-amber-800">
                            {lang === 'VI' ? 'Khuyên dùng:' : 'Recommended:'} Size {aiFitResult.size} ({aiFitResult.confidence})
                          </p>
                          <p className="mt-0.5 text-slate-700">{aiFitResult.note}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateOrder}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    {lang === 'VI' ? 'Thanh Toán Simulated (0.45s Speed)' : 'Simulate 1-Step Platform Checkout (0.45s Speed)'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
