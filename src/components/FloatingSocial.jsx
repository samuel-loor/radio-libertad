import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 bottom-24 flex flex-col gap-3 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=593993499990" // reemplaza con tu número
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500/50 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-white w-5 h-5" />
      </a>
      <a
        href="https://www.facebook.com/radiolibertadmanabi"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600/50 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <Facebook className="text-white w-5 h-5" />
      </a>
      <a
        href="https://www.instagram.com/radiolibertad740/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500/50 hover:bg-pink-600 p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <Instagram className="text-white w-5 h-5" />
      </a>
    </div>
  );
}
