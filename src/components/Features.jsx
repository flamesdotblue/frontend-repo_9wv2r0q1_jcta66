import { Sparkles, MessageCircle, ShieldCheck, Clock3, Filter, Wallet } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Smart matching',
    desc: 'AI-assisted matching pairs tasks with the best-fit students based on skills, reviews, and availability.'
  },
  {
    icon: MessageCircle,
    title: 'Real-time chat',
    desc: 'Collaborate instantly with typing indicators, read receipts, and task-specific channels.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe and secure',
    desc: 'Escrowed payments, dispute resolution, and verified profiles keep work fair and transparent.'
  },
  {
    icon: Clock3,
    title: 'Deadline-driven',
    desc: 'Stay on track with reminders, progress updates, and calendar-friendly scheduling.'
  },
  {
    icon: Filter,
    title: 'Powerful filters',
    desc: 'Find the perfect task with advanced search by price, deadline, category, and location.'
  },
  {
    icon: Wallet,
    title: 'Fast payouts',
    desc: 'Integrated billing and instant payouts after completion and review.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white transition-[filter] hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.65)]">
            Built for speed and trust
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to post, discover, and complete tasks with confidence—on any device.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:from-indigo-500/20 group-hover:via-fuchsia-500/20 group-hover:to-emerald-500/20 blur-lg transition-all" />
              <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-600/60 to-emerald-600/60 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] transition-shadow">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="relative text-white font-semibold text-lg transition-[filter,color] group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]">
                {f.title}
              </h3>
              <p className="relative text-white/70 text-sm mt-2 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
