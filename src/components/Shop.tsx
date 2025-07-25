import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const categories = ["Todos", "Camisas", "Buzos"];

const products = [
  {
    id: 1,
    name: "Camisa de Gojo Cyberpunk",
    category: "Camisas",
    price: 80000,
    image: "https://i.pinimg.com/736x/ef/a3/23/efa3232c7e9c5d7c95a1f8d3948f075d.jpg",
    description: "Camisa gris clara - 230gr - 100% algodón"
  },
  {
    id: 2,
    name: "Buzo super mario world",
    category: "Buzos",
    price: 120000,
    image: "https://i.pinimg.com/736x/70/a4/a3/70a4a32d6622468cde0fb3b806bc2b21.jpg",
    description: "Buzo de 305gr - 100% algodón"
  },
  {
    id: 3,
    name: "Camiseta BROOK ONE PIECE",
    category: "Camisas",
    price: 75900,
    image: "https://i.pinimg.com/736x/32/79/32/327932c785fe3b4ff9e6852594b39a83.jpg",
    description: "Camisa de 220gr - 100% algodón"
  },
  {
    id: 4,
    name: "Camisa Mclaren",
    category: "Camisas",
    price: 80000,
    image: "	https://i.pinimg.com/736x/8d/f9/50/8df950365f47151b2b99b8365d43cc77.jpg",
    description: "Camisa de 230gr - 100% algodón"
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
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-liyed-red font-semibold">${product.price.toLocaleString('es-CO')} COP</p>
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
