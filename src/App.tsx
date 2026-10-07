import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WhoTrustsYou from '@/components/WhoTrustsYou';
import Capabilities from '@/components/Capabilities';
import ProofOfControl from '@/components/ProofOfControl';
import HowWeEngage from '@/components/HowWeEngage';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Nav />
      <main>
        <Hero />
        <WhoTrustsYou />
        <Capabilities />
        <ProofOfControl />
        <HowWeEngage />
      </main>
      <Footer />
    </div>
  );
}
