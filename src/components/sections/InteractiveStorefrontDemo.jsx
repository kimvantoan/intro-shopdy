import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Globe,
  Tag,
  Image,
  Users,
  TrendingUp,
  Video,
  Mail,
  RefreshCw,
  Settings,
  CreditCard,
  Sparkles,
  CheckCircle2,
  Sliders,
  DollarSign,
  ArrowRight,
  Eye,
  ShieldCheck
} from 'lucide-react';

export const InteractiveStorefrontDemo = ({ onOpenDemoModal }) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('management');

  return (
    <section id="interactive-demo" className="relative py-28 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal direction="up" duration={0.6}>
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
        </ScrollReveal>

        {/* Tab Switcher Buttons */}
        <ScrollReveal direction="zoom" delay={0.2} duration={0.5}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-full border border-slate-200 bg-slate-100/90 backdrop-blur-xl shadow-inner">
              <button
                onClick={() => setActiveTab('management')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'management'
                    ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                1. Quản Lý Kinh Doanh (Management)
              </button>

              <button
                onClick={() => setActiveTab('marketing')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'marketing'
                    ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                2. Chiến Dịch Marketing
              </button>

              <button
                onClick={() => setActiveTab('system')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'system'
                    ? 'bg-gradient-to-r from-purple-600 to-amber-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Settings className="w-4 h-4" />
                3. Quản Lý Hệ Thống (System)
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Showcase Container */}
        <ScrollReveal direction="up" delay={0.3} duration={0.6}>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 shadow-xl">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: MANAGEMENT */}
              {activeTab === 'management' && (
                <motion.div
                  key="management"
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
                        Phân Hệ Quản Lý Kinh Doanh (Shopdy Management Engine)
                      </h3>
                      <p className="text-xs text-slate-500">Dashboard chỉ số tài chính, Đơn hàng, Kho sản phẩm, Cửa hàng online, Giảm giá &amp; Nhân sự Team</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                      Multi-Store &amp; Team Sync Active
                    </span>
                  </div>

                  {/* Dashboard Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <p className="text-xs text-slate-500 font-semibold">Doanh Thu Tổng (Revenue)</p>
                      <p className="text-2xl font-extrabold text-amber-700 font-display mt-1">$128,450 USD</p>
                      <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3" /> +32.8% tháng này
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <p className="text-xs text-slate-500 font-semibold">Lợi Nhuận Thuần (Net Profit)</p>
                      <p className="text-2xl font-extrabold text-purple-700 font-display mt-1">$42,180 USD</p>
                      <span className="text-[10px] text-purple-700 font-bold mt-1 inline-block">
                        Biên lợi nhuận 32.8%
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <p className="text-xs text-slate-500 font-semibold">Số Lượng Đơn Hàng (Orders)</p>
                      <p className="text-2xl font-extrabold text-slate-900 font-display mt-1">3,850 Đơn</p>
                      <span className="text-[10px] text-slate-600 font-medium mt-1 inline-block">
                        Tỷ lệ chuyển đổi: 4.2%
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <p className="text-xs text-slate-500 font-semibold">Chi Phí Ad Spend (Ads)</p>
                      <p className="text-2xl font-extrabold text-rose-600 font-display mt-1">$9,400 USD</p>
                      <span className="text-[10px] text-emerald-700 font-bold mt-1 inline-block">
                        ROAS: 13.6x ROI
                      </span>
                    </div>
                  </div>

                  {/* Sub-modules Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                      <ShoppingBag className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Orders</p>
                        <p className="text-[10px] text-slate-500">Timeline &amp; Dispatch</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                      <Package className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Products</p>
                        <p className="text-[10px] text-slate-500">Multi-SKU Stock</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                      <Globe className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Online Stores</p>
                        <p className="text-[10px] text-slate-500">Multi-Front Hub</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                      <Users className="w-5 h-5 text-rose-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Team</p>
                        <p className="text-[10px] text-slate-500">Staff Sales KPI</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: MARKETING */}
              {activeTab === 'marketing' && (
                <motion.div
                  key="marketing"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        Phân Hệ Marketing &amp; Tối Ưu Quảng Cáo (Marketing Suite)
                      </h3>
                      <p className="text-xs text-slate-500">Ads Manager, Creatives Studio, Email Marketing tự động &amp; Sync Accounts liên kết</p>
                    </div>
                    <span className="text-xs font-bold text-purple-800 bg-purple-50 border border-purple-300 px-3 py-1 rounded-full">
                      Meta, TikTok &amp; Google Ads Linked
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                        <h4 className="text-xs font-bold text-slate-900">Ads Manager &amp; ROAS Tracking</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Quản lý ngân sách quảng cáo tập trung, theo dõi chỉ số chi phí Ad Spend, CPC, CTR và doanh thu ROAS trực tiếp từ Facebook, Google &amp; TikTok.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-purple-600" />
                        <h4 className="text-xs font-bold text-slate-900">Creatives Content Studio</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Lưu trữ và tổ chức kho hình ảnh, video teaser, bài viết ad copy chuyển đổi cao cho các chiến dịch marketing.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <h4 className="text-xs font-bold text-slate-900">Automated Email Marketing</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Tự động hóa gửi email chăm sóc khách hàng, phục hồi giỏ hàng bỏ quên và gửi newsletter khuyến mãi theo nhóm khách hàng phân loại.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-emerald-600" />
                        <h4 className="text-xs font-bold text-slate-900">Sync Accounts Link</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Đồng bộ 1-click ủy quyền tài khoản quảng cáo, Meta Commerce, TikTok Shop &amp; kênh truyền thông mạng xã hội.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: SYSTEM */}
              {activeTab === 'system' && (
                <motion.div
                  key="system"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-slate-800" />
                        Phân Hệ Quản Lý Hệ Thống (System Manager)
                      </h3>
                      <p className="text-xs text-slate-500">Cấu hình chung System Settings &amp; Cổng thanh toán xử lý giao dịch Payment Gateways</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full">
                      Enterprise SLA 99.99%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                          <Settings className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">System Settings</h4>
                          <p className="text-xs text-slate-500">Cài đặt chung cho hệ thống</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600 font-medium pt-2 border-t border-slate-100">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tên miền tùy chỉnh (Custom Domain SSL)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Cấu hình đa tiền tệ (Multi-currency USD/VND)</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Quy tắc tính thuế &amp; Phí vận chuyển linh hoạt</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Payment Gateways</h4>
                          <p className="text-xs text-slate-500">Cổng thanh toán xử lý giao dịch</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600 font-medium pt-2 border-t border-slate-100">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tích hợp VietQR, MoMo, ZaloPay tự động</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Thanh toán Stripe, Apple Pay &amp; Thẻ quốc tế</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Quản lý thanh toán COD &amp; Đối soát doanh thu</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 text-white font-bold text-xs flex items-center gap-2 hover:shadow-lg shadow-purple-600/20"
                    >
                      <Eye className="w-4 h-4" />
                      {t.demo_modal_btn}
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
