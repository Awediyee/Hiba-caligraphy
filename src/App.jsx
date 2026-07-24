import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { PortfolioGrid } from './components/sections/PortfolioGrid';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1F2937]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PortfolioGrid />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
