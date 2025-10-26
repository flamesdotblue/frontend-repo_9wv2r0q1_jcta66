import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-teal-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center py-14 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80 mb-4 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 text-emerald-400" />
            Trusted by students and pros
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Get tasks done. Learn, earn, and grow.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl">
            A modern marketplace where students post tasks and skilled peers deliver fast, quality results. Secure, transparent, and built for real-time collaboration.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity">
              Browse tasks
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors">
              Post a task
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-blue-400" />
              <span>5-star reviews</span>
            </div>
          </div>
        </div>

        <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
