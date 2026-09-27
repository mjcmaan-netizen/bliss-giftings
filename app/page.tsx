import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Collections from "@/components/Collections";
import FeaturedWork from "@/components/FeaturedWork";
import BrandStatement from "@/components/BrandStatement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
      <FeaturedWork />
      <BrandStatement />
      <Footer />
    </main>
  );
}
