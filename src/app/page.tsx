"use client";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, Droplet, Users, Clock, Award, Heart, X, Images as ImagesIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../constants/services";
import { fadeInUp } from "../constants/animations";
import ImageGallery from "../components/ImageGallery";
import Image from "next/image";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = [
    '/IMG-20251226-WA0022.jpg',
    '/IMG-20251226-WA0023.jpg',
    '/IMG-20251226-WA0024.jpg',
    '/IMG-20251226-WA0025.jpg',
    '/IMG-20251226-WA0026.jpg',
    '/IMG-20251226-WA0027.jpg',
    '/IMG-20251226-WA0028.jpg',
    '/IMG-20251226-WA0029.jpg',
    '/IMG-20251226-WA0030.jpg',
    '/IMG-20251226-WA0031.jpg',
    '/logo.jpeg',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <main>
      <div className="scroll-smooth w-full">
        {/* Hero Section with Gradient Background */}
      <motion.section
        id="home"
        {...fadeInUp}
        className="relative flex flex-col items-center justify-center min-h-screen px-0 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>
        
        <div className="relative z-10 text-center w-full">
          <div className="inline-block mb-4 px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full">
            <span className="text-red-700 dark:text-red-300 font-semibold text-sm flex items-center gap-2">
              <Droplet className="w-4 h-4" />
              Saving Lives Since 2020
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-red-700 via-red-600 to-red-700 mb-6 tracking-tight animate-slide-down leading-tight">
            SAMASTIPUR<br/>BLOOD CENTRE
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 animate-slide-up font-light">
            Donate blood, save lives. Every drop counts.
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            We are committed to providing safe and timely blood to those in need. Join us in our mission to make a difference in the community.
          </p>
          <Button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-0 mt-16">
          <Card className="p-8 flex flex-col items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur hover:shadow-2xl transition-all duration-500 border-2 border-red-100 hover:border-red-300 hover:scale-105 animate-fade-in group">
            <div className="w-16 h-16 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <span className="text-5xl font-bold text-red-600 mb-3">1000+</span>
            <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">Units Donated</span>
          </Card>
          <Card className="p-8 flex flex-col items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur hover:shadow-2xl transition-all duration-500 border-2 border-red-100 hover:border-red-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <span className="text-5xl font-bold text-red-600 mb-3">500+</span>
            <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">Happy Donors</span>
          </Card>
          <Card className="p-8 flex flex-col items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur hover:shadow-2xl transition-all duration-500 border-2 border-red-100 hover:border-red-300 hover:scale-105 animate-fade-in group" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <span className="text-5xl font-bold text-red-600 mb-3">24x7</span>
            <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">Service Available</span>
          </Card>
        </div>
      </motion.section>

      {/* About Section with Enhanced Design */}
      <motion.section
        id="about"
        {...fadeInUp}
        className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 lg:px-24 xl:px-40 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-white via-red-50 to-white dark:from-gray-900 dark:via-red-900/10 dark:to-gray-900"></div>
        <div className="relative z-10 w-full">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 font-semibold text-sm mb-4">
              Our Story
            </span>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 to-red-600 mb-4">About Us</h2>
          </div>
          <Card className="p-12 shadow-2xl border-2 border-red-100 hover:shadow-red-500/20 transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  SAMASTIPUR BLOOD CENTRE is dedicated to saving lives by providing safe and reliable blood to hospitals and patients in need. Our team is committed to maintaining the highest standards of quality and safety in blood collection, testing, and distribution.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  We organize regular blood donation camps, awareness programs, and work closely with local communities to ensure a steady supply of blood. Our vision is a world where no one suffers due to lack of blood.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-semibold">
                  Join us in our mission to make a difference. Every drop counts!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Services Section with Icons */}
      <motion.section
        id="services"
        {...fadeInUp}
        className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-24 xl:px-40 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/10"></div>
        <div className="relative z-10 w-full">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 font-semibold text-sm mb-4">
              What We Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 to-red-600 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive blood banking services available 24/7 for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group p-8 shadow-xl border-2 border-red-100 bg-white/90 dark:bg-gray-800/90 backdrop-blur transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-linear-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        id="gallery"
        {...fadeInUp}
        className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-24 xl:px-40 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-white via-red-50 to-white dark:from-gray-900 dark:via-red-900/10 dark:to-gray-900"></div>
        <div className="relative z-10 w-full">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 font-semibold text-sm mb-4">
              Our Gallery
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 to-red-600 mb-4">Blood Bank Gallery</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Glimpses of our blood donation camps and community service
            </p>
          </div>

          {/* Carousel */}
          <ImageGallery images={galleryImages} />
        </div>
      </motion.section>

      {/* Query/Contact Form Section */}
      <motion.section
        id="query"
        {...fadeInUp}
        className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-8 lg:px-24 xl:px-40 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-white via-red-50 to-white dark:from-gray-900 dark:via-red-900/10 dark:to-gray-900"></div>
        <div className="relative z-10 w-full">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 font-semibold text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 to-red-600 mb-4">Send Us a Query</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have questions? We're here to help. Fill out the form below.
            </p>
          </div>
          <Card className="p-10 shadow-2xl border-2 border-red-100 bg-white/90 dark:bg-gray-800/90 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                Submit Query
              </Button>
              {formStatus && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg text-green-700 dark:text-green-300 text-center font-semibold">
                  {formStatus}
                </div>
              )}
            </form>
          </Card>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        {...fadeInUp}
        className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-8 lg:px-24 xl:px-40 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/10"></div>
        <div className="relative z-10 w-full">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-700 dark:text-red-300 font-semibold text-sm mb-4">
              Reach Out
            </span>
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-700 to-red-600 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect with us through any of the following channels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Call Us</p>
                  <a href="tel:8789370331" className="text-xl font-bold text-gray-800 dark:text-white hover:text-red-600 transition-colors">
                    8789370331
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="text-white w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/8789370331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-800 dark:text-white hover:text-green-600 transition-colors"
                  >
                    Chat with Us
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:samastipurbloodcentre@gmail.com"
                    className="text-lg font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors break-all"
                  >
                    samastipurbloodcentre@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            <Card className="p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white/90 dark:bg-gray-800/90 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                    Samastipur, Bihar, India
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative bg-linear-to-r from-red-700 to-red-900 text-white pt-12 pb-6 px-4 sm:px-8 lg:px-24 xl:px-40 w-full shadow-inner overflow-hidden mt-0">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-8">
          {/* Brand and tagline */}
          <div className="mb-8 md:mb-0 flex-1 min-w-[220px] text-center md:text-left">
            <p className="text-2xl font-extrabold tracking-wide mb-2 bg-clip-text text-transparent bg-linear-to-r from-white to-red-200">SAMASTIPUR BLOOD CENTRE</p>
            <p className="text-red-100 mb-4">Saving Lives, One Drop at a Time</p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a href="https://wa.me/8789370331" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors" aria-label="WhatsApp"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.26-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.36.71.31 1.26.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/></svg></a>
              <a href="mailto:samastipurbloodcentre@gmail.com" className="hover:text-blue-300 transition-colors" aria-label="Email"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg></a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="mb-8 md:mb-0 flex-1 min-w-[180px] text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-red-100">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-red-200 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-200 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-200 transition-colors">Services</a></li>
              <li><a href="#query" className="hover:text-red-200 transition-colors">Query</a></li>
              <li><a href="#contact" className="hover:text-red-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[220px] text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-red-100">Contact</h3>
            <p className="mb-2 flex items-center gap-2 justify-center md:justify-start"><svg className="w-5 h-5 text-red-200 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg> <a href="tel:8789370331" className="hover:text-red-200 transition-colors">8789370331</a></p>
            <p className="mb-2 flex items-start gap-2 justify-center md:justify-start"><svg className="w-5 h-5 text-red-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6 0 1.31.42 2.52 1.13 3.5l8.37-8.37C14.52 2.42 13.31 2 12 2zm6.87 4.5l-8.37 8.37C9.48 21.58 10.69 22 12 22c3.31 0 6-2.69 6-6 0-1.31-.42-2.52-1.13-3.5z"/></svg> <span className="text-left max-w-xs">Samastipur Blood Centre, Mata Chandrakala Hospital, Mohanpur Road, Samastipur (Near UN Place), Bihar - 848101</span></p>
            <p className="mb-2 flex items-center gap-2 justify-center md:justify-start"><svg className="w-5 h-5 text-red-200 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg> <a href="mailto:samastipurbloodcentre@gmail.com" className="hover:text-red-200 transition-colors break-all">samastipurbloodcentre@gmail.com</a></p>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 mt-10">
          <h3 className="text-xl font-semibold mb-4 text-center">Find Us Here</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden">
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
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 mt-10 border-t border-red-800 pt-6 text-center text-sm text-red-200">
          © 2025 Samastipur Blood Centre. All rights reserved. Powered by A2R Software Solution(9097275465).
        </div>
      </footer>

      {/* Gallery Popup Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-[110] group"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Blood Bank <span className="text-red-500">Gallery</span>
                </h2>
                <p className="text-gray-300">Browse through our collection of blood donation events</p>
              </div>
              <ImageGallery images={galleryImages} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </main>
  );
}

