import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop',
];

const About = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-slate-200">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">About Me</h2>
        <p className="mt-3 text-slate-400">A quick glimpse into my background and passions.</p>
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p>
            I'm a software engineer who loves building elegant, user-centric interfaces and robust systems. I care deeply about
            performance, accessibility, and developer experience.
          </p>
          <p>
            My toolkit spans modern JavaScript/TypeScript, React, Node, and cloud-native patterns. I enjoy collaborating with
            cross-functional teams and turning ideas into polished products.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind', 'FastAPI'].map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-3"
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
