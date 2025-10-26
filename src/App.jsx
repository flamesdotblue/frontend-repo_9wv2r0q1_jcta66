import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-600/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FooterCTA />
      </main>

      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
