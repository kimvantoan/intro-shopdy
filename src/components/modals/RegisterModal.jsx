import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Zap, CheckCircle2, Globe, Shirt, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RegisterModal = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [theme, setTheme] = useState('Haute Couture Luxury');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brandName.trim() && email.trim()) {
      setIsSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-slate-950 p-6 md:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-10 space-y-5">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-white">
                Platform Trial Provisioned!
              </h3>
              <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                Your custom subdomain <strong className="text-amber-300">{brandName.toLowerCase().replace(/[^a-z0-9]/g, '')}.shopdy.com</strong> has been created. Management credentials have been dispatched to <strong className="text-purple-300">{email}</strong>.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-lg"
              >
                Access Shopdy Management Console
              </button>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-950/40 text-[11px] font-bold text-amber-300 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                14-DAY FULL PLATFORM TRIAL REGISTRATION
              </div>

              <h3 className="font-display text-2xl font-extrabold text-white mb-2">
                Provision Your Shopdy Platform
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                No credit card required. Your fashion management environment will be automatically provisioned in 60 seconds.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Fashion Brand Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Maison Nòir, Vanguard Wear..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Admin Work Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ceo@yourbrand.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Brand Contact Phone / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Select Initial Visual Theme Architecture:
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-amber-400"
                  >
                    <option value="Haute Couture Luxury">Haute Couture Luxury (Tailored for high-end luxury goods)</option>
                    <option value="Streetwear Cyber">Streetwear Cyber (Designed for Gen-Z &amp; limited drops)</option>
                    <option value="Minimalist Atelier">Minimalist Atelier (Sleek contemporary design)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-200" />
                  Launch Platform Trial Environment
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
