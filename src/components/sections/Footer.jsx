import React from 'react';
import { LayoutDashboard, Sparkles, Heart, Globe, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-rose-500 to-amber-400 p-0.5 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                  <LayoutDashboard className="h-5 w-5 text-amber-300" />
                </div>
              </div>
              <span className="font-display text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-amber-200 to-purple-300 bg-clip-text text-transparent">
                SHOPDY
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Shopdy is the Next-Gen B2B Fashion E-Commerce Operating System and Management Platform tailored for Haute Couture Luxury Houses, D2C Brands, and Retail Chains.
            </p>
            
            {/* System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Shopdy Engine 3.0: 99.99% Operational SLA
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Platform Engines</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-amber-300 transition-colors">AI Size &amp; Fit Matcher</a></li>
              <li><a href="#features" className="hover:text-amber-300 transition-colors">Visual Lookbook 3D 4K</a></li>
              <li><a href="#features" className="hover:text-amber-300 transition-colors">Omnichannel POS Sync</a></li>
              <li><a href="#features" className="hover:text-amber-300 transition-colors">Flash Sale 500k RPM</a></li>
              <li><a href="#features" className="hover:text-amber-300 transition-colors">Anti-Counterfeit QR Auth</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Brand Resources</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#interactive-demo" className="hover:text-amber-300 transition-colors">Management Console Demo</a></li>
              <li><a href="#roi-calculator" className="hover:text-amber-300 transition-colors">Financial Performance Calculator</a></li>
              <li><a href="#pricing" className="hover:text-amber-300 transition-colors">Enterprise Pricing Plans</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Fashion Tech Blog</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Developer API Documentation</a></li>
            </ul>
          </div>

          {/* Col 4: Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Global Offices</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>VIP Hotline: <strong className="text-slate-200">+1 (800) 888-SHOPDY</strong></li>
              <li>Enterprise: <strong className="text-slate-200">luxury@shopdy.com</strong></li>
              <li>Global HQ: New York &bull; Paris &bull; Milan</li>
              <li>APAC Hub: Landmark 81, Ho Chi Minh City</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shopdy Operating System Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">SLA 99.99% Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
