import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { X, Sparkles, Zap, CheckCircle2, Globe, Shirt, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RegisterModal = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-10 space-y-5">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-slate-900">
                {lang === 'VI' ? 'Khởi Tạo Platform Dùng Thử Thành Công!' : 'Platform Trial Provisioned!'}
              </h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed font-medium">
                {lang === 'VI'
                  ? `Tên miền ${brandName.toLowerCase().replace(/[^a-z0-9]/g, '')}.shopdy.com của bạn đã được khởi tạo. Thông tin đăng nhập đã gửi tới ${email}.`
                  : `Your custom subdomain ${brandName.toLowerCase().replace(/[^a-z0-9]/g, '')}.shopdy.com has been created. Management credentials dispatched to ${email}.`}
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-lg"
              >
                {lang === 'VI' ? 'Truy Cập Trang Quản Trị Console' : 'Access Shopdy Management Console'}
              </button>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-50 text-[11px] font-bold text-amber-800 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                {lang === 'VI' ? 'ĐĂNG KÝ DÙNG THỬ 14 NGÀY MIỄN PHÍ' : '14-DAY FULL PLATFORM TRIAL REGISTRATION'}
              </div>

              <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-2">
                {lang === 'VI' ? 'Đăng Ký Khởi Tạo Shopdy OS' : 'Provision Your Shopdy Platform'}
              </h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                {lang === 'VI' ? 'Không cần thẻ tín dụng. Môi trường quản trị của bạn sẽ tự động khởi tạo trong 60 giây.' : 'No credit card required. Your fashion management environment will be automatically provisioned in 60 seconds.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {lang === 'VI' ? 'Tên Thương Hiệu Thời Trang:' : 'Fashion Brand Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Maison Nòir, Vanguard Wear..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {lang === 'VI' ? 'Email Quản Trị Brand:' : 'Admin Work Email:'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ceo@yourbrand.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {lang === 'VI' ? 'Số Điện Thoại Hotline / WhatsApp:' : 'Brand Contact Phone / WhatsApp:'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {lang === 'VI' ? 'Chọn Phong Cách Giao Diện Ban Đầu:' : 'Select Initial Visual Theme Architecture:'}
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs font-semibold focus:outline-none focus:border-amber-500"
                  >
                    <option value="Haute Couture Luxury">Haute Couture Luxury (High-end apparel)</option>
                    <option value="Streetwear Cyber">Streetwear Cyber (Gen-Z drops)</option>
                    <option value="Minimalist Atelier">Minimalist Atelier (Sleek contemporary)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-rose-600 text-white font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-200" />
                  {lang === 'VI' ? 'Khởi Tạo Platform Ngay' : 'Launch Platform Trial Environment'}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
