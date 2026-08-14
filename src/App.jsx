import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ParticlesBackground } from './components/react-bits/ParticlesBackground';
import { ScrollProgress } from './components/react-bits/ScrollProgress';
import { ScrollVelocity } from './components/react-bits/ScrollVelocity';
import { DockNavbar } from './components/react-bits/DockNavbar';
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
  const { t } = useLanguage();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden">
      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* React Bits HTML5 Canvas Interactive Particles Mesh Background */}
      <ParticlesBackground />

      {/* Floating Glassmorphism Dock Navbar */}
      <DockNavbar
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        />

        <BrandScrollerSection />

        {/* React Bits Dynamic Scroll Velocity Marquee */}
        <ScrollVelocity
          texts={t.marquee_items}
          velocity={4}
        />

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

      {/* Interactive Modals */}
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

export function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;
