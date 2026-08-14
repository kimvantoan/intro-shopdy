import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { DockNavbar } from './components/react-bits/DockNavbar';
import { DotFieldBackground } from './components/react-bits/DotFieldBackground';
import { ScrollProgress } from './components/react-bits/ScrollProgress';
import { ScrollVelocity } from './components/react-bits/ScrollVelocity';
import { HeroSection } from './components/sections/HeroSection';
import { BrandScrollerSection } from './components/sections/BrandScrollerSection';
import { FashionCoreFeatures } from './components/sections/FashionCoreFeatures';
import { InteractiveStorefrontDemo } from './components/sections/InteractiveStorefrontDemo';
import { RoiCalculatorSection } from './components/sections/RoiCalculatorSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { PricingSection } from './components/sections/PricingSection';
import { CtaBanner } from './components/sections/CtaBanner';
import { Footer } from './components/sections/Footer';
import { DemoStoreModal } from './components/modals/DemoStoreModal';
import { RegisterModal } from './components/modals/RegisterModal';

function MainApp() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-950 selection:text-white">
      {/* React Bits Top Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* React Bits Interactive Dot Field Canvas Background */}
      <DotFieldBackground />

      {/* Streamlined Dock Navbar */}
      <DockNavbar
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <HeroSection
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />
        
        {/* React Bits Scroll Velocity Dynamic Marquee */}
        <ScrollVelocity />

        <BrandScrollerSection />
        
        <FashionCoreFeatures />
        
        <InteractiveStorefrontDemo
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />
        
        <RoiCalculatorSection
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />
        
        <TestimonialsSection />
        
        <PricingSection
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />
        
        <CtaBanner
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Platform Console Demo & Registration Modals */}
      <DemoStoreModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
