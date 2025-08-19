
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
import Collections from "@/components/Collections";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Collections />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
