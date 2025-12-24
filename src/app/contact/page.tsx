// Contact Us Page
import { Card } from "../../components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto mt-24 p-3 sm:p-6 w-full">
      <Card className="p-4 sm:p-10 shadow-xl border-2 border-red-50 w-full">
        <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-6 sm:mb-8 text-center">Contact Us</h2>
        <div className="flex flex-col gap-4 sm:gap-6 text-base sm:text-xl">
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Phone className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
            <a href="tel:8789370331" className="hover:underline text-gray-700 dark:text-gray-200 font-medium">8789370331</a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <FaWhatsapp className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
            <a href="https://wa.me/8789370331" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700 dark:text-gray-200 font-medium">WhatsApp Chat</a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Mail className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <a href="mailto:samastipurbloodcentre@gmail.com" className="hover:underline text-gray-700 dark:text-gray-200 font-medium break-all">samastipurbloodcentre@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <MapPin className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">Samastipur, Bihar, India</span>
          </div>
        </div>
      </Card>
    </section>
  );
}
