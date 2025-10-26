import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="pricing" className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_60%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 text-center overflow-hidden">
          {/* Neon aura */}
          <div className="pointer-events-none absolute -inset-1 rounded-[1.6rem] bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(99,102,241,0.25)_0%,_rgba(168,85,247,0.25)_50%,_rgba(34,197,94,0.25)_100%)] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <h3 className="relative text-2xl sm:text-3xl font-bold text-white transition-[filter] hover:drop-shadow-[0_0_16px_rgba(99,102,241,0.6)]">
            Ready to accelerate your workflow?
          </h3>
          <p className="relative mt-3 text-white/70 max-w-2xl mx-auto">
            Join a trusted marketplace built for students. Post tasks, find gigs, and get paid securely with transparent reviews.
          </p>
          <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:saturate-150 hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] transition-all">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.45)]">
              Contact sales
            </button>
          </div>
          <p className="relative mt-4 text-xs text-white/60">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
