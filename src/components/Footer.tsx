
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-liyed-black text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <h2 className="text-2xl font-bold text-white mb-4">LIYED<span className="text-liyed-red">DESIGN</span></h2>
            </Link>
            <p className="mb-6 text-sm">
              Moda contemporánea que fusiona elegancia y autenticidad para quienes buscan destacar con prendas únicas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-liyed-red transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-liyed-red transition-colors">Sobre la marca</a></li>
              <li><a href="#collections" className="hover:text-liyed-red transition-colors">Colecciones</a></li>
              <li><a href="#shop" className="hover:text-liyed-red transition-colors">Tienda</a></li>
              <li><a href="#contact" className="hover:text-liyed-red transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-liyed-red transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-liyed-red transition-colors">Envíos y devoluciones</a></li>
              <li><a href="#" className="hover:text-liyed-red transition-colors">Métodos de pago</a></li>
              <li><a href="#" className="hover:text-liyed-red transition-colors">Políticas de privacidad</a></li>
              <li><a href="#" className="hover:text-liyed-red transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">Suscríbete para recibir las últimas novedades y ofertas especiales.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="py-2 px-4 w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-liyed-red"
              />
              <button 
                type="submit" 
                className="bg-liyed-red py-2 px-4 text-white font-medium hover:bg-red-700 transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm">
          <p className="text-center">© {new Date().getFullYear()} Liyed Design. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
