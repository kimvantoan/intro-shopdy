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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-slate-50 text-xs font-bold text-slate-900 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              {t.demo_badge}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
              {t.demo_title} <span className="bw-shiny-text">{t.demo_title_highlight}</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-medium">
              {t.demo_sub}
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher Buttons */}
        <ScrollReveal direction="zoom" delay={0.2} duration={0.5}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-full border border-slate-200 bg-slate-100 backdrop-blur-xl shadow-inner">
              <button
                onClick={() => setActiveTab('management')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'management'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                {lang === 'VI' ? '1. Quản Lý Kinh Doanh (Management)' : '1. Business Management'}
              </button>

              <button
                onClick={() => setActiveTab('marketing')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'marketing'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                {lang === 'VI' ? '2. Chiến Dịch Marketing' : '2. Marketing Suite'}
              </button>

              <button
                onClick={() => setActiveTab('system')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'system'
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Settings className="w-4 h-4" />
                {lang === 'VI' ? '3. Quản Lý Hệ Thống (System)' : '3. System Manager'}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Showcase Container */}
        <ScrollReveal direction="up" delay={0.3} duration={0.6}>
          <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 md:p-8 shadow-xl">
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
                      <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                        <LayoutDashboard className="w-5 h-5 text-slate-950" />
                        {lang === 'VI' ? 'Phân Hệ Quản Lý Kinh Doanh (Shopdy Management Engine)' : 'Business Management Module (Shopdy Core Engine)'}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {lang === 'VI'
                          ? 'Dashboard chỉ số tài chính, Đơn hàng, Kho sản phẩm, Cửa hàng online, Giảm giá & Nhân sự Team'
                          : 'Financial Dashboard, Order Pipelines, Variant Product SKUs, Multi-Storefront Hub & Team Performance'}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-600 animate-ping" />
                      {lang === 'VI' ? 'Multi-Store & Team Sync Đang Chạy' : 'Multi-Store & Team Sync Active'}
                    </span>
                  </div>

                  {/* Dashboard Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                      <p className="text-xs text-slate-500 font-semibold">{lang === 'VI' ? 'Doanh Thu Tổng (Revenue)' : 'Total Revenue'}</p>
                      <p className="text-2xl font-black text-slate-950 font-display mt-1">$128,450 USD</p>
                      <span className="text-[10px] text-slate-700 font-bold flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3 text-slate-950" /> {lang === 'VI' ? '+32.8% tháng này' : '+32.8% this month'}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                      <p className="text-xs text-slate-500 font-semibold">{lang === 'VI' ? 'Lợi Nhuận Thuần (Net Profit)' : 'Net Profit'}</p>
                      <p className="text-2xl font-black text-slate-950 font-display mt-1">$42,180 USD</p>
                      <span className="text-[10px] text-slate-700 font-bold mt-1 inline-block">
                        {lang === 'VI' ? 'Biên lợi nhuận 32.8%' : '32.8% Profit Margin'}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                      <p className="text-xs text-slate-500 font-semibold">{lang === 'VI' ? 'Số Lượng Đơn Hàng (Orders)' : 'Orders Volume'}</p>
                      <p className="text-2xl font-black text-slate-950 font-display mt-1">{lang === 'VI' ? '3,850 Đơn' : '3,850 Orders'}</p>
                      <span className="text-[10px] text-slate-600 font-medium mt-1 inline-block">
                        {lang === 'VI' ? 'Tỷ lệ chuyển đổi: 4.2%' : 'Conversion Rate: 4.2%'}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                      <p className="text-xs text-slate-500 font-semibold">{lang === 'VI' ? 'Chi Phí Ad Spend (Ads)' : 'Total Ad Spend'}</p>
                      <p className="text-2xl font-black text-slate-950 font-display mt-1">$9,400 USD</p>
                      <span className="text-[10px] text-slate-700 font-bold mt-1 inline-block">
                        ROAS: 13.6x ROI
                      </span>
                    </div>
                  </div>

                  {/* Sub-modules Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3 shadow-sm">
                      <ShoppingBag className="w-5 h-5 text-slate-950" />
                      <div>
                        <p className="text-xs font-bold text-slate-950">Orders</p>
                        <p className="text-[10px] text-slate-500">Timeline &amp; Dispatch</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3 shadow-sm">
                      <Package className="w-5 h-5 text-slate-950" />
                      <div>
                        <p className="text-xs font-bold text-slate-950">Products</p>
                        <p className="text-[10px] text-slate-500">Multi-SKU Stock</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3 shadow-sm">
                      <Globe className="w-5 h-5 text-slate-950" />
                      <div>
                        <p className="text-xs font-bold text-slate-950">Online Stores</p>
                        <p className="text-[10px] text-slate-500">Multi-Front Hub</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center gap-3 shadow-sm">
                      <Users className="w-5 h-5 text-slate-950" />
                      <div>
                        <p className="text-xs font-bold text-slate-950">Team</p>
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
                      <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-slate-950" />
                        {lang === 'VI' ? 'Phân Hệ Marketing & Tối Ưu Quảng Cáo (Marketing Suite)' : 'Marketing Suite & Campaign Optimization'}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {lang === 'VI'
                          ? 'Ads Manager, Creatives Studio, Email Marketing tự động & Sync Accounts liên kết'
                          : 'Omnichannel Ads Manager, Creatives Studio, Automated Email Drip & Linked Sync Accounts'}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white bg-slate-950 border border-slate-950 px-3 py-1 rounded-full">
                      Meta, TikTok &amp; Google Ads Linked
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-slate-950" />
                        <h4 className="text-xs font-bold text-slate-950">Ads Manager &amp; ROAS Tracking</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {lang === 'VI'
                          ? 'Quản lý ngân sách quảng cáo tập trung, theo dõi chỉ số chi phí Ad Spend, CPC, CTR và doanh thu ROAS trực tiếp từ Facebook, Google & TikTok.'
                          : 'Centralized ad budget management, monitoring Ad Spend, CPC, CTR, and direct ROAS revenue attribution across Meta, Google & TikTok.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-slate-950" />
                        <h4 className="text-xs font-bold text-slate-950">Creatives Content Studio</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {lang === 'VI'
                          ? 'Lưu trữ và tổ chức kho hình ảnh, video teaser, bài viết ad copy chuyển đổi cao cho các chiến dịch marketing.'
                          : 'Organize high-converting promotional photos, video teasers, and ad copy variants for seamless creative campaign execution.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-950" />
                        <h4 className="text-xs font-bold text-slate-950">Automated Email Marketing</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {lang === 'VI'
                          ? 'Tự động hóa gửi email chăm sóc khách hàng, phục hồi giỏ hàng bỏ quên và gửi newsletter khuyến mãi theo nhóm khách hàng phân loại.'
                          : 'Broadcast automated customer nurture emails, recover abandoned carts, and send promotional newsletters to segmented subscriber lists.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-slate-950" />
                        <h4 className="text-xs font-bold text-slate-950">Sync Accounts Link</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {lang === 'VI'
                          ? 'Đồng bộ 1-click ủy quyền tài khoản quảng cáo, Meta Commerce, TikTok Shop & kênh truyền thông mạng xã hội.'
                          : 'One-click authorization and sync for Meta Commerce, TikTok Shop, Google Merchant, and linked social media ad accounts.'}
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
                      <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-slate-950" />
                        {lang === 'VI' ? 'Phân Hệ Quản Lý Hệ Thống (System Manager)' : 'System Manager & Core Settings'}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {lang === 'VI'
                          ? 'Cấu hình chung System Settings & Cổng thanh toán xử lý giao dịch Payment Gateways'
                          : 'Global System Settings, custom domains, tax rules & Payment Gateways transaction processing'}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-white bg-slate-950 border border-slate-950 px-3 py-1 rounded-full">
                      Enterprise SLA 99.99%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                          <Settings className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-950">System Settings</h4>
                          <p className="text-xs text-slate-500">{lang === 'VI' ? 'Cài đặt chung cho hệ thống' : 'Global system configurations'}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-100">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> {lang === 'VI' ? 'Tên miền tùy chỉnh (Custom Domain SSL)' : 'Custom domain mapping & SSL certificates'}</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> {lang === 'VI' ? 'Cấu hình đa tiền tệ (Multi-currency USD/VND)' : 'Multi-currency localization (USD / VND)'}</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> {lang === 'VI' ? 'Quy tắc tính thuế & Phí vận chuyển linh hoạt' : 'Automated tax calculations & shipping rates'}</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-950">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-950">Payment Gateways</h4>
                          <p className="text-xs text-slate-500">{lang === 'VI' ? 'Cổng thanh toán xử lý giao dịch' : 'Payment gateway transaction pipeline'}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700 font-medium pt-2 border-t border-slate-100">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> {lang === 'VI' ? 'Tích hợp VietQR, MoMo, ZaloPay tự động' : 'Instant VietQR, MoMo, ZaloPay integration'}</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> {lang === 'VI' ? 'Thanh toán Stripe, Apple Pay & Thẻ quốc tế' : 'Stripe, Apple Pay & credit card processing'}</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-slate-950" /> {lang === 'VI' ? 'Quản lý thanh toán COD & Đối soát doanh thu' : 'Cash on Delivery (COD) & automated payout reconciliation'}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenDemoModal}
                      className="px-6 py-3 rounded-full bg-slate-950 text-white font-extrabold text-xs flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg"
                    >
                      <Eye className="w-4 h-4 text-white" />
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
