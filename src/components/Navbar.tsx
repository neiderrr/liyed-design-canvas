
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Instagram, Facebook } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Inicio', href: 'home' },
    { name: 'Sobre la marca', href: 'about' },
    { name: 'Colecciones', href: 'collections' },
    { name: 'Tienda', href: 'shop' },
    { name: 'Contacto', href: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="z-50">
          <img 
            src="/public/lovable-uploads/80613fd0-056f-42fb-bf9c-d4cb3bd52991.png" 
            alt="Liyed Design Logo" 
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={`#${item.href}`}
              className="font-montserrat font-medium text-liyed-black hover:text-liyed-red transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-liyed-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social and Cart Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-liyed-red transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-liyed-red transition-colors">
            <Facebook size={20} />
          </a>
          <Button variant="ghost" size="icon" className="relative hover:text-liyed-red">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-liyed-red text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-liyed-black" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={`#${item.href}`}
                className="font-montserrat text-xl font-medium text-liyed-black hover:text-liyed-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="hover:text-liyed-red transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-liyed-red transition-colors">
                <Facebook size={24} />
              </a>
              <Button variant="ghost" size="icon" className="relative hover:text-liyed-red">
                <ShoppingBag size={24} />
                <span className="absolute -top-1 -right-1 bg-liyed-red text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
