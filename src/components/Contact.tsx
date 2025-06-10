
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-liyed-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title text-white mb-8">Contacto</h2>
            <p className="text-gray-300 mb-10">
              Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta, colaboración o información sobre nuestros productos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-liyed-red mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">liyedesign1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-liyed-red mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-300">+57 305 236 6735</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-liyed-red hover:border-liyed-red transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-liyed-red hover:border-liyed-red transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-liyed-red hover:border-liyed-red transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-liyed-black p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Nombre" className="rounded-none border-gray-300" />
                <Input placeholder="Email" type="email" className="rounded-none border-gray-300" />
              </div>
              <Input placeholder="Asunto" className="rounded-none border-gray-300" />
              <Textarea placeholder="Mensaje" className="rounded-none border-gray-300 min-h-[150px]" />
              <Button className="bg-liyed-red hover:bg-red-700 text-white w-full rounded-none">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
