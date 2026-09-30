import React from 'react';
import { BackgroundCanvas } from '@/components/ui/BackgroundCanvas';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { LearningJourney } from '@/components/sections/LearningJourney';
import { GithubActivity } from '@/components/sections/GithubActivity';
import { Contact } from '@/components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bg-base text-text-primary selection:bg-accent-blue/30 selection:text-white">
      {/* Background Interactive Ambient Canvas */}
      <BackgroundCanvas />

      {/* Global Header Navigation */}
      <Header />

      {/* Main Single Page Document */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <LearningJourney />
        <GithubActivity />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
