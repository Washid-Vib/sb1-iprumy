import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Join Our Newsletter</h2>
        <p className="text-blue-100 mb-6">
          Subscribe to get special offers, free giveaways, and exclusive deals.
        </p>
        {submitted ? (
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-lg">Thank you for subscribing! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-medium flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}