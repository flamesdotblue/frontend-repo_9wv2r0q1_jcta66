import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Futuristic gradient beams */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute top-40 -right-16 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center py-14 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80 mb-4 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 text-emerald-400" />
            Trusted by students and pros
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-cyan-200 to-emerald-300 transition-[filter] hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.85)]">
            Get tasks done. Learn, earn, and grow.
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl transition-[filter,color] hover:text-white hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.55)]">
            A futuristic marketplace where students post tasks and skilled peers deliver fast, quality results. Secure, transparent, and built for real-time collaboration.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-emerald-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:saturate-150 hover:shadow-[0_0_40px_rgba(99,102,241,0.55)] transition-all">
              Browse tasks
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-colors">
              Post a task
            </button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2 transition-[filter] hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Secure payments</span>
            </div>
            <div className="flex items-center gap-2 transition-[filter] hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
              <Star className="h-4 w-4 text-blue-400" />
              <span>5-star reviews</span>
            </div>
          </div>
        </div>

        {/* 3D Spline container with neon aura */}
        <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group">
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-fuchsia-400/25 to-emerald-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
