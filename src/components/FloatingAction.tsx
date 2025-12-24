// FloatingAction.tsx
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const phoneNumber = "8789370331";
const whatsappNumber = `91${phoneNumber}`;
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export function FloatingAction() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex flex-row justify-between items-center px-4 sm:bottom-8 sm:px-8 pointer-events-none">
      <a
        href={`tel:${phoneNumber}`}
        className="relative bg-linear-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl p-4 sm:p-5 flex items-center transition-all duration-300 hover:scale-110 group pointer-events-auto"
        title="Call Now"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-75"></span>
        <Phone className="w-5 h-5 sm:w-7 sm:h-7 relative z-10" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-linear-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl p-4 sm:p-5 flex items-center transition-all duration-300 hover:scale-110 group pointer-events-auto"
        title="WhatsApp Chat"
        aria-label="WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        <FaWhatsapp className="w-5 h-5 sm:w-7 sm:h-7 relative z-10" />
      </a>
    </div>
  );
}
