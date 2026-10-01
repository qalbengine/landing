/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpenAINavbar } from './components/OpenAINavbar';
import { OpenAIHero } from './components/OpenAIHero';
import { OpenAIFeatures } from './components/OpenAIFeatures';
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
    <div className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-white/20 selection:text-white font-sans overflow-x-hidden">
      {/* OpenAI Sticky Minimal Header with Imkoniyatlar, Kurs, Aloqa */}
      <OpenAINavbar onNavigate={navigateTo} />

      {/* Main Experience */}
      <main className="flex-1">
        {/* OpenAI Iconic Hero: "Sizga nima bilan yordam bera olaman?" + Prompt Bar + Pills */}
        <OpenAIHero onNavigate={navigateTo} />

        {/* 1. Imkoniyatlar (#features) */}
        <OpenAIFeatures onNavigate={navigateTo} />

        {/* 2. Kurs (#kurs) */}
        <OpenAICourse onNavigate={navigateTo} />

        {/* 3. Natijalarimiz (#natijalar) */}
        <OpenAIResults onNavigate={navigateTo} />

        {/* 4. Aloqa (#aloqa) */}
        <OpenAIContact />
      </main>

      {/* OpenAI Footer */}
      <OpenAIFooter onNavigate={navigateTo} />
    </div>
  );
}
