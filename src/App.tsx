/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpenAINavbar } from './components/OpenAINavbar';
import { OpenAIHero } from './components/OpenAIHero';
import { OpenAIFeatures } from './components/OpenAIFeatures';
import { OpenAICategoryBanner } from './components/OpenAICategoryBanner';
import { OpenAICourse } from './components/OpenAICourse';
import { OpenAIResults } from './components/OpenAIResults';
import { OpenAIContact } from './components/OpenAIContact';
import { OpenAIFooter } from './components/OpenAIFooter';
import { AppView } from './components/AppView';
import { LoginView } from './components/LoginView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/app' || path === '/login') {
        return path;
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentRoute(path === '/app' || path === '/login' ? path : '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentRoute === '/app') {
    return <AppView onBack={() => navigateTo('/')} />;
  }

  if (currentRoute === '/login') {
    return (
      <LoginView
        onBack={() => navigateTo('/')}
        onLoginSuccess={() => navigateTo('/app')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-white/20 selection:text-white font-sans overflow-x-hidden relative">
      {/* Persistent OpenAI Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-white opacity-40" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '-4s' }} />
      </div>

      {/* OpenAI Sticky Minimal Header with Imkoniyatlar, Kurs, Aloqa */}
      <div className="relative z-50">
        <OpenAINavbar onNavigate={navigateTo} />
      </div>

      {/* Main Experience */}
      <main className="flex-1 relative z-10">
        {/* OpenAI Iconic Hero: "Sizga nima bilan yordam bera olaman?" + Prompt Bar + Pills */}
        <OpenAIHero onNavigate={navigateTo} />

        {/* 1. Imkoniyatlar (#features) */}
        <OpenAIFeatures onNavigate={navigateTo} />

        {/* 2. Category Banner (A, B, C, D, E) */}
        <OpenAICategoryBanner onNavigate={navigateTo} />

        {/* 3. Kurs (#kurs) */}
        <OpenAICourse onNavigate={navigateTo} />

        {/* 4. Natijalarimiz (#natijalar) */}
        <OpenAIResults onNavigate={navigateTo} />

        {/* 5. Aloqa (#aloqa) */}
        <OpenAIContact />
      </main>

      {/* OpenAI Footer */}
      <OpenAIFooter onNavigate={navigateTo} />
    </div>
  );
}
