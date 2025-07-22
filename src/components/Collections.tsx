import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tshirtCategories = [
  {
    id: 1,
    name: "Anime & Manga",
    image: "https://i.pinimg.com/736x/8e/1d/82/8e1d82674a063915853c8e544aebd373.jpg",
    description: "Diseños inspirados en tus series favoritas",
    url: "/categorias/anime"
  },
  {
    id: 2,
    name: "Caricaturas & Clásicos",
    image: "https://i.pinimg.com/736x/e8/f7/e0/e8f7e0ffcc8b433102bdfbe87b6ca36a.jpg",
    description: "Nostalgia y diversión en cada estampado",
    url: "/categorias/caricaturas"
  },
  {
    id: 3,
    name: "Películas & Series",
    image: "https://i.pinimg.com/736x/eb/44/7c/eb447ccb00c3919b297d8f534a76665e.jpg",
    description: "Iconos del cine y la televisión",
    url: "/categorias/peliculas"
  },
  {
    id: 4,
    name: "Cultura Pop & Retro",
    image: "https://i.pinimg.com/736x/a6/fc/29/a6fc296aff921f32a71cdf9e91b8bc6c.jpg",
    description: "Tendencias que nunca pasan de moda",
    url: "/categorias/pop-retro"
  },
  {
    id: 5,
    name: "Arte & Creatividad",
    image: "https://i.pinimg.com/736x/5d/e2/1d/5de21db91b149dfecd9630f3e75b337a.jpg",
    description: "Expresión artística en cada diseño",
    url: "/categorias/arte"
  },
  {
    id: 6,
    name: "Ciencia & Espacio",
    image: "https://i.pinimg.com/736x/0a/73/b1/0a73b172bbc8734e6b0488f2e505c7dc.jpg",
    description: "Explora el universo con estilo",
    url: "/categorias/ciencia"
  }
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 bg-liyed-lightgray">
      <div className="container mx-auto px-4">
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
                  <a href={category.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="bg-liyed-red hover:bg-red-700 text-white rounded-none transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Ver más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
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