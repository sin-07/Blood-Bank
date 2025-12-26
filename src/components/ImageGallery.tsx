'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (autoPlay && !isFullscreen) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoPlay, isFullscreen, images.length]);

  // ESC key to close fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeFullscreen();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    setAutoPlay(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setAutoPlay(true);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
          {/* Main Carousel */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-pointer group"
                onClick={openFullscreen}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={currentIndex === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 group-hover:from-black/40" />
                {/* Click hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Auto-play Toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); setAutoPlay(!autoPlay); }}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black/50 hover:bg-black/60 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all z-10"
            >
              {autoPlay ? 'Pause' : 'Play'}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="bg-gray-900/50 backdrop-blur-md p-2 sm:p-4">
            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 ${
                    currentIndex === index
                      ? 'ring-2 sm:ring-4 ring-red-500 scale-105'
                      : 'ring-1 sm:ring-2 ring-gray-600 hover:ring-gray-400 opacity-60 hover:opacity-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-16 h-12 sm:w-24 sm:h-16">
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-gray-800 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-red-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-0"
            onClick={closeFullscreen}
          >
            {/* Close Button - Positioned below navbar (navbar is h-16 = 64px) */}
            <motion.button
              onClick={closeFullscreen}
              className="fixed top-20 right-4 sm:top-24 sm:right-6 bg-red-600 hover:bg-red-700 text-white p-3 sm:p-4 rounded-full transition-all z-[10000] touch-manipulation shadow-2xl"
              aria-label="Close fullscreen"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.button>

            {/* Close hint text - below navbar */}
            <div className="fixed top-20 left-4 sm:top-24 sm:left-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs sm:text-sm z-[10000]">
              Tap X or outside to close
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    fill
                    className="object-contain p-2 sm:p-4"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Fullscreen Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-3 sm:p-4 rounded-full transition-all z-[10000] touch-manipulation shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 active:bg-white/40 text-white p-3 sm:p-4 rounded-full transition-all z-[10000] touch-manipulation shadow-lg"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Fullscreen Counter */}
              <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-medium z-[10000]">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
