import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-liyed-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-liyed-black via-liyed-black/90 to-liyed-black/70 z-10"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-50">
          {/* This is where a background image would go */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=2069')] bg-cover bg-center"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-liyed-red">DISEÑOS</span> QUE INSPIRAN
            <br />
            Y DEFINEN TU ESTILO
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            Moda contemporánea que fusiona elegancia y autenticidad para quienes buscan destacar con prendas únicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-liyed-red hover:bg-red-700 text-white px-8 py-6 text-lg rounded-none">
              Explorar colección
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 text-lg rounded-none">
              Sobre nosotros
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Descubre más</span>
        <div className="w-px h-16 bg-white/30 relative">
          <div className="absolute w-1.5 h-1.5 rounded-full bg-white -left-[2px] animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
