"use client";
// Contact Us Page
import { Card } from "../../components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUpSimple, staggerContainer, itemVariant } from "../../constants/animations";

export default function ContactPage() {
  return (
    <motion.section {...fadeInUpSimple} className="max-w-3xl mx-auto mt-24 p-3 sm:p-6 w-full">
      <Card className="p-4 sm:p-10 shadow-xl border-2 border-red-50 w-full">
        <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-6 sm:mb-8 text-center">Contact Us</h2>
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="flex flex-col gap-4 sm:gap-6 text-base sm:text-xl">
          <motion.div variants={itemVariant} className="flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors w-full">
            {/* Phone icon and number on the left */}
            <div className="flex items-center gap-2">
              <Phone className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
              <a href="tel:8789370331" className="hover:underline text-gray-700 dark:text-gray-200 font-medium">8789370331</a>
            </div>
            {/* WhatsApp icon and link on the right */}
            <div className="flex items-center gap-2">
              <a href="https://wa.me/8789370331" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-700 dark:text-gray-200 font-medium">WhatsApp Chat</a>
              <FaWhatsapp className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </motion.div>
          <motion.div variants={itemVariant} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Mail className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <a href="mailto:samastipurbloodcentre@gmail.com" className="hover:underline text-gray-700 dark:text-gray-200 font-medium break-all">samastipurbloodcentre@gmail.com</a>
          </motion.div>
          <motion.div variants={itemVariant} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <MapPin className="text-gray-600 w-5 h-5 sm:w-6 sm:h-6 mt-1" />
            <span className="text-gray-700 dark:text-gray-200 font-medium">Samastipur Blood Centre, Mata Chandrakala Hospital, Mohanpur Road, Samastipur (Near UN Place), Bihar - 848101</span>
          </motion.div>
        </motion.div>
      </Card>
      
      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="mt-6 p-4 sm:p-6 shadow-xl border-2 border-red-50 w-full overflow-hidden">
        <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4 text-center">Find Us Here</h3>
        <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.2820891817595!2d85.77826631501487!3d25.865208683608937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed43e1f6b3c5d9%3A0x1e3f9c8b5e7d4c3a!2sMohanpur%20Road%2C%20Samastipur%2C%20Bihar%20848101!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Samastipur Blood Centre Location"
          ></iframe>
        </div>
      </Card>
      </motion.div>
    </motion.section>
  );
}
