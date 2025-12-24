// Services Page
import { Card } from "../../components/ui/card";
import { motion } from "framer-motion";
import { fadeInUpSimple, staggerContainer, cardVariant } from "../../constants/animations";
import { services } from "../../constants/services";

export default function ServicesPage() {
  return (
    <motion.section {...fadeInUpSimple} className="max-w-5xl mx-auto mt-24 p-3 sm:p-6 w-full">
      <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-6 sm:mb-10 text-center">Our Services</h2>
      <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.title} variants={cardVariant}>
              <Card className="p-4 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-red-50 hover:border-red-200 w-full h-full">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-red-600">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">{service.desc}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
