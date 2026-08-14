import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../react-bits/ScrollReveal';
import { LayoutDashboard, Sparkles, Heart, Globe, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="relative border-t border-slate-200 bg-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" duration={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
            
            {/* Col 1 */}
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-amber-300 shadow-md">
                  <LayoutDashboard className="h-5 w-5 text-amber-300" />
                </div>
                <span className="font-display text-2xl font-black tracking-wider bg-gradient-to-r from-slate-950 via-purple-900 to-amber-700 bg-clip-text text-transparent">
                  SHOPDY
                </span>
              </a>
              <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-medium">
                {t.footer_desc}
              </p>
              
              {/* System Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] font-bold text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                {t.footer_status}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">{t.footer_col_1}</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Executive Dashboard</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Orders &amp; Fulfillment</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Products Stock Matrix</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Online Stores Hub</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Team Staff KPI Tracker</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">{t.footer_col_2}</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Omnichannel Ads Manager</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Creatives Asset Studio</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Automated Email Marketing</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">Multi-Gateway Payments</a></li>
                <li><a href="#features" className="hover:text-purple-700 transition-colors">System Settings Config</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">{t.footer_col_3}</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li>VIP Hotline: <strong className="text-slate-900">+1 (800) 888-SHOPDY</strong></li>
                <li>Enterprise: <strong className="text-slate-900">support@shopdy.com</strong></li>
                <li>Global HQ: New York &bull; Paris &bull; Milan</li>
                <li>APAC Hub: Landmark 81, Ho Chi Minh City</li>
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Shopdy E-Commerce Operating System Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">SLA 99.99% Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
