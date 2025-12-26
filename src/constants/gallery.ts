// Gallery images - centralized to avoid duplication
export const galleryImages = [
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
] as const;

export type GalleryImage = typeof galleryImages[number];
