import Image from "next/image";

interface GallerySectionProps {
  isDarkMode: boolean;
  galleryImages: string[];
  galleryRef: React.RefObject<HTMLDivElement | null>;
  scrollGallery: (direction: 'left' | 'right') => void;
  setSelectedImage: (image: string) => void;
}

export default function GallerySection({ isDarkMode, galleryImages, galleryRef, scrollGallery, setSelectedImage }: GallerySectionProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-16 -mt-10">
      <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white border border-gray-200'} shadow-sm`}>
        <h2 className={`text-base font-semibold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Gallery
        </h2>
        <div className="relative">
          <button
            onClick={() => scrollGallery('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${isDarkMode ? 'bg-gray-900/90 hover:bg-gray-900 text-white' : 'bg-white/90 hover:bg-white text-gray-900'} shadow-lg transition-all`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 h-64 rounded-lg overflow-hidden snap-start"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${idx + 1}`}
                  width={288}
                  height={256}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollGallery('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${isDarkMode ? 'bg-gray-900/90 hover:bg-gray-900 text-white' : 'bg-white/90 hover:bg-white text-gray-900'} shadow-lg transition-all`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
