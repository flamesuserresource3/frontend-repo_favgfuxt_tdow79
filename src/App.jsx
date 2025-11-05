import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Navbar = () => {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-4">
      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur">
        <a href="#home" className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-lg font-semibold text-transparent">
          dev.portfolio
        </a>
        <nav className="hidden gap-6 md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-slate-300 transition hover:text-white">
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
