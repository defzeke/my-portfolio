'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

export default function UsContent() {
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: 'image' | 'video' } | null>(null);
  const [media, setMedia] = useState<{ src: string; type: 'image' | 'video' }[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch media from API
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('/api/us-media');
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.error('Error loading media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  return (
    <>
      {/* Pinterest-style Masonry Grid */}
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-gray-400 text-xl">Loading memories...</div>
        </div>
      ) : (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={`Memory ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="relative">
                <video
                  src={item.src}
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                  muted
                  playsInline
                />
                {/* Video Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-all duration-300">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
          </div>
        ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-pink-400 transition-colors z-10 w-12 h-12 flex items-center justify-center hover:rotate-90 duration-300"
            onClick={() => setSelectedMedia(null)}
          >
            ×
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {selectedMedia.type === 'image' ? (
              <Image
                src={selectedMedia.src}
                alt="Selected"
                width={1200}
                height={900}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-scaleIn"
                style={{ objectFit: 'contain' }}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
