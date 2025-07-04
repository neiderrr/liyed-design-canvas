
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">Sobre la marca</h2>
            <p className="text-lg mb-6 text-gray-700">
              Liyed Design nació en diciembre de 2024 como una apuesta por crear prendas con alma: piezas que mezclan lo atemporal con lo actual, y que hablen por sí solas.
              Desde el primer boceto, nuestra misión ha sido diseñar ropa con intención, cuidando cada detalle para reflejar autenticidad, estilo y creatividad.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Aunque estamos dando nuestros primeros pasos, creemos firmemente en el poder de la expresión personal a través de la moda. Cada colección busca conectar con personas que valoran lo único, lo bien hecho y lo que perdura más allá de las tendencias.
            </p>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://i.pinimg.com/474x/46/a8/17/46a817ee86b3ec684fc99e32554868cd.jpg" 
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
