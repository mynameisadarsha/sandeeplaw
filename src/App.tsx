import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SeniorAdvocateProfile } from './components/SeniorAdvocateProfile';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-850 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Chamber & Advocate Overview */}
        <Hero />

        {/* 7 Practice Areas */}
        <ServicesSection />

        {/* Chambers Profile, Address & Contact Details */}
        <SeniorAdvocateProfile />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
