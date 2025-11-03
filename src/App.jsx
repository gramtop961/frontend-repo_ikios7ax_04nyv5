import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutAndServices from './components/AboutAndServices';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-inter bg-black text-white">
      <Navbar />
      <main className="scroll-smooth">
        <Hero3D />
        <AboutAndServices />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950 py-8 text-center text-white/70">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm">© {new Date().getFullYear()} VoltPro Electric. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
