
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">Sobre la marca</h2>
            <p className="text-lg mb-6 text-gray-700">
              Liyed Design nació en 2018 de la pasión por crear prendas que combinan la elegancia de lo atemporal con la frescura de lo contemporáneo. Nuestra visión es transformar la moda en una forma de expresión personal genuina.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Cada colección es el resultado de un cuidadoso proceso creativo donde la calidad, el detalle y la autenticidad son protagonistas. Creemos en prendas que trascienden temporadas y tendencias pasajeras.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <h3 className="font-montserrat text-4xl font-bold text-liyed-red">6+</h3>
                <p className="text-gray-500">Años de experiencia</p>
              </div>
              <div>
                <h3 className="font-montserrat text-4xl font-bold text-liyed-red">15+</h3>
                <p className="text-gray-500">Colecciones</p>
              </div>
              <div>
                <h3 className="font-montserrat text-4xl font-bold text-liyed-red">5k+</h3>
                <p className="text-gray-500">Clientes satisfechos</p>
              </div>
            </div>
            
            <Button className="bg-liyed-black hover:bg-black text-white px-8 py-6 text-base rounded-none">
              Nuestra historia
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987" 
                alt="Diseñadora de Liyed" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-4 border-liyed-red z-0 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
