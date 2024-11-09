import React, { useState } from 'react';
import { Star, ThumbsUp, Send } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    rating: 5,
    content: '',
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.content.trim()) return;

    const review = {
      id: Date.now(),
      author: 'You', // In a real app, this would come from user authentication
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      content: newReview.content,
      verified: true,
    };

    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, content: '' });
    setShowForm(false);
  };

  const handleHelpful = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Customer Reviews</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Write a Review
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmitReview} className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= newReview.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
            <textarea
              value={newReview.content}
              onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
              className="w-full min-h-[100px] p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your thoughts about the product..."
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Review
            </button>
          </div>
        </form>
      )}

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No reviews yet. Be the first to review this product!</p>
        ) : (
          reviews.map((review) => (
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
              <button
                onClick={() => handleHelpful(review.id)}
                className="flex items-center gap-2 mt-3 text-sm text-gray-500 hover:text-gray-700"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Helpful ({review.helpful})</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}