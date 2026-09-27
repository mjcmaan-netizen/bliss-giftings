import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Collections from "@/components/Collections";
import Reach from "@/components/Reach";
import BrandStatement from "@/components/BrandStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
      <Reach />
      <BrandStatement />
      <Footer />
    </main>
  );
}
