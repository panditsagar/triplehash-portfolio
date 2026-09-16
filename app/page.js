import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
