import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: 'Sarah Johnson',
    rating: 5,
    date: '2024-03-10',
    helpful: 24,
    content: 'Absolutely love this watch! The build quality is exceptional and it looks even better in person.',
    verified: true
  },
  {
    id: 2,
    author: 'Michael Chen',
    rating: 4,
    date: '2024-03-08',
    helpful: 15,
    content: 'Great timepiece, though the strap needed some breaking in. Overall very satisfied with the purchase.',
    verified: true
  },
  {
    id: 3,
    author: 'Emma Wilson',
    rating: 5,
    date: '2024-03-05',
    helpful: 19,
    content: 'Elegant design and perfect for both casual and formal occasions. The automatic movement is smooth and reliable.',
    verified: true
  }
];

export default function Reviews() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{review.author}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{review.content}</p>
            <button className="flex items-center gap-2 mt-3 text-sm text-gray-500 hover:text-gray-700">
              <ThumbsUp className="w-4 h-4" />
              <span>Helpful ({review.helpful})</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}