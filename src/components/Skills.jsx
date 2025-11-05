import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Rocket } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: Cpu,
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Craft',
    icon: Rocket,
    items: [
      { name: 'Performance', level: 80 },
      { name: 'Testing', level: 75 },
      { name: 'Accessibility', level: 70 },
      { name: 'CI/CD', level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 text-slate-200">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Technical Skills</h2>
        <p className="mt-3 text-slate-400">A snapshot of my most-used tools and strengths.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <group.icon className="h-5 w-5 text-emerald-400" />
              <h3 className="text-xl font-medium">{group.title}</h3>
            </div>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.name}</span>
                    <span className="text-slate-400">{item.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
