
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const tshirtCategories = [
  {
    id: 1,
    name: "Anime & Manga",
    image: "https://i.pinimg.com/736x/8e/1d/82/8e1d82674a063915853c8e544aebd373.jpg",
    description: "Diseños inspirados en tus series favoritas"
  },
  {
    id: 2,
    name: "Caricaturas & Clásicos",
    image: "https://i.pinimg.com/736x/e8/f7/e0/e8f7e0ffcc8b433102bdfbe87b6ca36a.jpg",
    description: "Nostalgia y diversión en cada estampado"
  },
  {
    id: 3,
    name: "Películas & Series",
    image: "https://images.unsplash.com/photo-1489599187440-09ba29b9c9d1?q=80&w=2670",
    description: "Iconos del cine y la televisión"
  },
  {
    id: 4,
    name: "Cultura Pop & Retro",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2670",
    description: "Tendencias que nunca pasan de moda"
  },
  {
    id: 5,
    name: "Arte & Creatividad",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2580",
    description: "Expresión artística en cada diseño"
  },
  {
    id: 6,
    name: "Ciencia & Espacio",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2670",
    description: "Explora el universo con estilo"
  }
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-liyed-lightgray">
      <div className="container mx-auto px-4">
     
        
        {/* Categorías de Camisetas Personalizadas */}
        <div>
          <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-4">
            Camisetas Personalizadas
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Diseños únicos que reflejan tu personalidad y pasiones
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tshirtCategories.map((category) => (
              <div 
                key={category.id} 
                className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h4 className="text-xl font-montserrat font-bold text-white mb-2">
                    {category.name}
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-liyed-red hover:bg-red-700 text-white rounded-none transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Ver más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-liyed-black hover:bg-black text-white px-8 py-6 text-base rounded-none">
              Ver todas las categorías
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
