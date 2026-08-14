import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      note: `Based on height ${h}cm & weight ${w}kg, Size ${size} matches your brand's Haute Couture fit parameters perfectly.`,
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-slate-950 p-6 md:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {isOrdered ? (
            <div className="text-center py-16 space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-white">
                Simulated Platform Checkout Completed!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                You just experienced Shopdy Engine's 1-step accelerated transaction pipeline. Processed in 0.45s with zero latency!
              </p>
              <button
                onClick={() => {
                  setIsOrdered(false);
                  onClose();
                }}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-lg"
              >
                Return to Shopdy Platform Homepage
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl font-extrabold text-amber-300">
                    L'ÉROSE PARIS
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded bg-purple-950 border border-purple-800/40 text-purple-300">
                    Interactive Console Preview
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Shopdy AI Fit Engine Active
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left */}
                <div className="md:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 h-96">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800"
                      alt="L'Érose Trench Coat"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                      ✦ Autumn 2026 Collection
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="md:col-span-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      L'Érose Silk Velvet Trench Coat
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-amber-300 font-display">
                        $1,280 USD
                      </span>
                      <div className="flex items-center gap-1 text-xs text-amber-400">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-white">4.9</span> (128 Reviews)
                      </div>
                    </div>
                  </div>

                  {/* Size Selector & AI Calculator */}
                  <div className="space-y-3 p-4 rounded-2xl border border-white/10 bg-slate-900/60">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300">Select Garment Size:</span>
                      <span className="font-bold text-purple-300">Selected: Size {selectedSize}</span>
                    </div>

                    <div className="flex gap-3">
                      {['S', 'M', 'L', 'XL'].map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedSize === s
                              ? 'border-amber-400 bg-amber-950 text-amber-300 shadow-md'
                              : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                          }`}
                        >
                          Size {s}
                        </button>
                      ))}
                    </div>

                    {/* AI Calculator */}
                    <div className="pt-2 border-t border-slate-800">
                      <p className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5 mb-2">
                        <Sparkles className="w-3.5 h-3.5" /> AI Sizing Precision Calculator:
                      </p>
                      <form onSubmit={handleCalcAiSize} className="flex gap-2">
                        <input
                          type="number"
                          value={userHeight}
                          onChange={(e) => setUserHeight(e.target.value)}
                          placeholder="Height (cm)"
                          className="w-1/2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                        <input
                          type="number"
                          value={userWeight}
                          onChange={(e) => setUserWeight(e.target.value)}
                          placeholder="Weight (kg)"
                          className="w-1/2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs hover:bg-purple-500 whitespace-nowrap"
                        >
                          Calculate
                        </button>
                      </form>

                      {aiFitResult && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/40 text-[11px] text-purple-200"
                        >
                          <p className="font-bold text-amber-300">
                            Recommended: Size {aiFitResult.size} ({aiFitResult.confidence})
                          </p>
                          <p className="mt-0.5 text-slate-300">{aiFitResult.note}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Simulated Action */}
                  <button
                    onClick={handleSimulateOrder}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Simulate 1-Step Platform Checkout (0.45s Speed)
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
