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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-md">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <span className="font-display text-2xl font-black tracking-wider text-slate-950">
                  SHOPDY
                </span>
              </a>
              <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-medium">
                {t.footer_desc}
              </p>
              
              {/* System Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-bold text-rose-700">
                <span className="h-2 w-2 rounded-full bg-rose-600 animate-ping" />
                {t.footer_status}
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-4">{t.footer_col_1}</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Executive Dashboard</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Orders &amp; Fulfillment</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Products Stock Matrix</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Online Stores Hub</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Team Staff KPI Tracker</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-4">{t.footer_col_2}</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Omnichannel Ads Manager</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Creatives Asset Studio</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Automated Email Marketing</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">Multi-Gateway Payments</a></li>
                <li><a href="#features" className="hover:text-slate-950 transition-colors">System Settings Config</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-950 mb-4">{t.footer_col_3}</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li>VIP Hotline: <strong className="text-slate-950">+1 (800) 888-SHOPDY</strong></li>
                <li>Enterprise: <strong className="text-slate-950">support@shopdy.com</strong></li>
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
            <a href="#" className="hover:text-slate-950">Terms of Service</a>
            <a href="#" className="hover:text-slate-950">Privacy Policy</a>
            <a href="#" className="hover:text-slate-950">SLA 99.99% Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
