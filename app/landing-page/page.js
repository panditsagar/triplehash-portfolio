import Navbar from "../components/Navbar";
import LandingHero from "../components/LandingHero";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <LandingHero />
      </div>
      <Footer />
    </main>
  );
}
