'use client';

import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
