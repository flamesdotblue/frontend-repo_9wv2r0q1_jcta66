import { useState } from 'react';
import { Menu, X, Rocket, Bell, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500/70 to-emerald-500/70 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">TaskFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#market" className="text-white/80 hover:text-white transition-colors">Marketplace</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-emerald-500 rounded-full text-[10px] flex items-center justify-center text-white">3</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <User className="h-4 w-4 text-white" />
            <span className="text-sm text-white/90">Sign in</span>
          </button>
        </div>

        <button aria-label="Toggle menu" className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10" onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90">Features</a>
            <a href="#market" className="block px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90">Marketplace</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90">Pricing</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90">Sign in</button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium shadow-lg shadow-blue-500/20">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
