// Services Page
import { Card } from "../../components/ui/card";

const services = [
  {
    title: "Blood Donation",
    desc: "We organize regular blood donation camps and accept voluntary donations at our centre.",
  },
  {
    title: "Blood Group Testing",
    desc: "Get your blood group tested quickly and accurately by our trained professionals.",
  },
  {
    title: "Component Separation",
    desc: "We provide blood components (RBC, Platelets, Plasma) as per medical requirements.",
  },
  {
    title: "24x7 Emergency Service",
    desc: "Our team is available round the clock to provide blood in emergencies.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto mt-24 p-3 sm:p-6 w-full">
      <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-6 sm:mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {services.map((service) => (
          <Card key={service.title} className="p-4 sm:p-8 hover:shadow-xl transition-all duration-300 border-2 border-red-50 hover:border-red-200 w-full">
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-red-600">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">{service.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
