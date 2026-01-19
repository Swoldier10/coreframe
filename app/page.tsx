'use client';

import CanvasEngine from './components/CanvasEngine';
import Hero from './components/Hero';
import NarrativeBeats from './components/NarrativeBeats';
import TeamSection from './components/TeamSection';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main id="main-content" className="relative bg-core-black min-h-screen">
      {/* Loader Removed for instant access */}

      <div className="transition-opacity duration-1000 opacity-100">
        <div className="relative h-[850vh]">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <CanvasEngine />
            <Hero />
            <NarrativeBeats />
            <TeamSection />
            <SocialProof />
            <CTA />
          </div>
        </div>

        {/* Standard Scrolling Sections */}

      </div>
    </main>
  );
}
