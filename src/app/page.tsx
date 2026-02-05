import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <Header />

      <main>
        <Hero />
        <Features />
        <Team />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
