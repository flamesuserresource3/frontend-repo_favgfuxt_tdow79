import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 text-slate-200">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Get In Touch</h2>
        <p className="mt-3 text-slate-400">Have a project or a question? Drop a message and let’s talk.</p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-emerald-300/50 focus:ring"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-emerald-300/50 focus:ring"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-2 block text-sm text-slate-300">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            rows={6}
            className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-emerald-300/50 focus:ring"
            required
          />
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <Mail className="h-5 w-5" />
            Send Message
          </button>
          <div className="text-sm text-slate-400">
            Prefer email? <a href="mailto:you@example.com" className="text-emerald-400 underline">you@example.com</a>
          </div>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
