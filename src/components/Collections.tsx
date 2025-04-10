
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const collections = [
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

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState(collections[0]);

  return (
    <section id="collections" className="py-20 bg-liyed-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-16">Nuestras colecciones</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <div className="space-y-8">
                {collections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => setActiveCollection(collection)}
                    className={`block text-left w-full transition-all duration-300 ${
                      activeCollection.id === collection.id
                        ? "transform translate-x-4"
                        : ""
                    }`}
                  >
                    <h3 className={`text-2xl font-bold mb-2 relative flex items-center ${
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
                <h3 className="text-3xl font-bold text-white mb-2">{activeCollection.name}</h3>
                <p className="text-white/80 mb-4">{activeCollection.description}</p>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 rounded-none">
                  Explorar colección
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
