import { useState } from 'react';
import { Menu, X, Rocket, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="group relative sticky top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/10">
      {/* Neon aura on hover */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-x-10 -bottom-12 h-24 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(99,102,241,0.25),rgba(168,85,247,0.15)_50%,rgba(16,185,129,0.12)_100%)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500/70 to-emerald-500/70 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-[0_0_28px_rgba(99,102,241,0.5)] transition-shadow">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-emerald-200 transition-[filter] group-hover:drop-shadow-[0_0_14px_rgba(99,102,241,0.65)]">
            TaskFlow
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: '#features', label: 'Features' },
            { href: '#market', label: 'Marketplace' },
            { href: '#testimonials', label: 'Testimonials' },
            { href: '#pricing', label: 'Pricing' }
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-white/80 transition-all hover:text-white hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.55)]"
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.45)]">
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-emerald-500 rounded-full text-[10px] flex items-center justify-center text-white shadow-[0_0_10px_rgba(16,185,129,0.8)]">3</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:shadow-[0_0_26px_rgba(168,85,247,0.45)]">
            <User className="h-4 w-4 text-white" />
            <span className="text-sm text-white/90">Sign in</span>
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            {[
              { href: '#features', label: 'Features' },
              { href: '#market', label: 'Marketplace' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#pricing', label: 'Pricing' }
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 transition-[filter,background-color] hover:bg-white/10 hover:drop-shadow-[0_0_14px_rgba(34,197,94,0.5)]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.45)]">Sign in</button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600 text-white font-medium shadow-lg shadow-indigo-500/20 hover:saturate-150 hover:shadow-[0_0_36px_rgba(99,102,241,0.55)] transition-all">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
