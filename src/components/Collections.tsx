
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const originalCollections = [
  {
    id: 1,
    name: "Primavera 2025",
    image: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=2574",
    description: "Frescura y color en prendas versátiles para la temporada."
  },
  {
    id: 2,
    name: "Esencial",
    image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=2570",
    description: "Básicos atemporales reinventados con nuestro toque distintivo."
  },
  {
    id: 3,
    name: "Noche Urbana",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671",
    description: "Elegancia moderna para momentos especiales en la ciudad."
  }
];

const tshirtCategories = [
  {
    id: 1,
    name: "Anime & Manga",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670",
    description: "Diseños inspirados en tus series favoritas"
  },
  {
    id: 2,
    name: "Caricaturas & Clásicos",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=2535",
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
  const [activeCollection, setActiveCollection] = useState(originalCollections[0]);

  return (
    <section id="collections" className="py-20 bg-liyed-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-16">Nuestras colecciones</h2>
        
        {/* Colecciones Originales */}
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <div className="space-y-8">
                {originalCollections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => setActiveCollection(collection)}
                    className={`block text-left w-full transition-all duration-300 ${
                      activeCollection.id === collection.id
                        ? "transform translate-x-4"
                        : ""
                    }`}
                  >
                    <h3 className={`text-2xl font-montserrat font-bold mb-2 relative flex items-center ${
                      activeCollection.id === collection.id
                        ? "text-liyed-red"
                        : "text-gray-500"
                    }`}>
                      {activeCollection.id === collection.id && (
                        <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-liyed-red"></span>
                      )}
                      {collection.name}
                    </h3>
                    <p className={`${
                      activeCollection.id === collection.id
                        ? "text-gray-800"
                        : "text-gray-400"
                    }`}>
                      {collection.description}
                    </p>
                  </button>
                ))}
              </div>
              
              <Button className="mt-10 bg-liyed-red hover:bg-red-700 text-white rounded-none">
                Ver todas las colecciones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/3 transition-all duration-500">
            <div className="relative overflow-hidden group">
              <img 
                src={activeCollection.image} 
                alt={activeCollection.name} 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-3xl font-montserrat font-bold text-white mb-2">{activeCollection.name}</h3>
                <p className="text-white/80 mb-4">{activeCollection.description}</p>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 rounded-none">
                  Explorar colección
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Categorías de Camisetas Personalizadas */}
        <div className="border-t border-gray-200 pt-16">
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
