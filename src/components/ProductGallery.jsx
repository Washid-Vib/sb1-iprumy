import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1600&auto=format&fit=crop'
];

export default function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={images[currentImage]}
          alt={`Product view ${currentImage + 1}`}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`relative rounded-lg overflow-hidden ${
              currentImage === idx ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="aspect-square object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}