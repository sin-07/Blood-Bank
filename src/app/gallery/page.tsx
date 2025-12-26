import ImageGallery from '@/components/ImageGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Blood Bank',
  description: 'View our gallery of blood donation events and activities',
};

export default function GalleryPage() {
  // Automatically collect all .jpg and .jpeg images from public folder
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-red-500">Gallery</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore moments from our blood donation camps, events, and community activities
          </p>
        </div>

        {/* Gallery Component */}
        <ImageGallery images={galleryImages} />

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Every Drop Counts
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              These images capture the spirit of our community coming together to save lives.
              Join us in our mission to ensure no one has to struggle for blood in times of need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                <div className="text-4xl font-bold text-red-500 mb-2">10+</div>
                <div className="text-gray-300">Blood Donation Camps</div>
              </div>
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
                <div className="text-gray-300">Lives Saved</div>
              </div>
              <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
                <div className="text-gray-300">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
