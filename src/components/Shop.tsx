
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const categories = ["Todos", "Blusas", "Pantalones", "Vestidos", "Accesorios"];

const products = [
  {
    id: 1,
    name: "Blusa Elena",
    category: "Blusas",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2505"
  },
  {
    id: 2,
    name: "Pantalón Casual Negro",
    category: "Pantalones",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2487"
  },
  {
    id: 3,
    name: "Vestido Noche",
    category: "Vestidos",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2651"
  },
  {
    id: 4,
    name: "Bolso Elegante",
    category: "Accesorios",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2670"
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="shop" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="section-title mb-6 md:mb-0">Tienda</h2>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 transition-all ${
                  activeCategory === category
                    ? "bg-liyed-red text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button className="bg-white text-liyed-black hover:bg-liyed-red hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0 duration-300">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Añadir al carrito
                </Button>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-liyed-red font-semibold">{product.price.toFixed(2)} €</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-liyed-black hover:bg-black text-white px-8 py-6 text-base rounded-none">
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
