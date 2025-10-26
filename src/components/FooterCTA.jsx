import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="pricing" className="relative py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_60%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to accelerate your workflow?</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Join a trusted marketplace built for students. Post tasks, find gigs, and get paid securely with transparent reviews.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors">
              Contact sales
            </button>
          </div>
          <p className="mt-4 text-xs text-white/60">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
