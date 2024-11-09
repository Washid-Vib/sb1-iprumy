import React from 'react';
import { Star } from 'lucide-react';

const relatedProducts = [
  {
    id: 1,
    name: 'Classic Chronograph',
    price: 249.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Minimalist Watch',
    price: 199.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sport Edition',
    price: 299.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Luxury Gold Watch',
    price: 399.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=400&auto=format&fit=crop'
  }
];

export default function RelatedProducts() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-50">
                Quick View
              </button>
            </div>
            <h3 className="font-medium mb-1">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{product.rating}</span>
            </div>
            <p className="font-semibold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}