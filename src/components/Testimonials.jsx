import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Martinez',
    role: 'Computer Science, Sophomore',
    text: 'I landed three gigs in my first week. The chat and payment flow made everything feel safe and professional.',
    rating: 5
  },
  {
    name: 'Liam Johnson',
    role: 'Business Admin, Senior',
    text: 'Posting tasks is effortless. I got high-quality help within hours and the review system kept standards high.',
    rating: 5
  },
  {
    name: 'Noah Chen',
    role: 'Design, Junior',
    text: 'Love the dark, glassy vibes. It’s fast, intuitive, and the real-time updates are a game changer.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by student communities</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Hear from students using TaskFlow to learn, earn, and build their portfolios.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <Quote className="absolute -top-3 -left-3 h-6 w-6 text-white/20" />
              <blockquote className="text-white/80 leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
