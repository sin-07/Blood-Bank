"use client";
// About Us Page
import { Card } from "../../components/ui/card";
import { motion } from "framer-motion";
import { fadeInUpSimple } from "../../constants/animations";

export default function AboutPage() {
  return (
    <motion.section {...fadeInUpSimple} className="max-w-4xl mx-auto mt-24 p-3 sm:p-6 w-full">
      <Card className="p-4 sm:p-10 shadow-xl border-2 border-red-50 w-full">
        <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-4 sm:mb-6">About Us</h2>
        <div className="space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            SAMASTIPUR BLOOD CENTRE is dedicated to saving lives by providing safe and reliable blood to hospitals and patients in need. Our team is committed to maintaining the highest standards of quality and safety in blood collection, testing, and distribution.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            We organize regular blood donation camps, awareness programs, and work closely with local communities to ensure a steady supply of blood. Our vision is a world where no one suffers due to lack of blood.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-semibold">
            Join us in our mission to make a difference. Every drop counts!
          </p>
        </div>
      </Card>
    </motion.section>
  );
}
