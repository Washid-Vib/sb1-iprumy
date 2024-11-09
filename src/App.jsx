import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Bell, Search, Menu } from 'lucide-react';
import ProductGallery from './components/ProductGallery';
import Reviews from './components/Reviews';
import Cart from './components/Cart';
import RelatedProducts from './components/RelatedProducts';
import Newsletter from './components/Newsletter';
import SizeGuide from './components/SizeGuide';

const product = {
  name: 'Premium Automatic Watch',
  price: 299.99,
  originalPrice: 399.99,
  description: 'Elegant automatic watch with genuine leather strap and sapphire crystal glass. Water-resistant up to 100m.',
  rating: 4.8,
  reviews: 128,
  variants: ['Silver', 'Gold', 'Rose Gold'],
  features: [
    'Automatic movement',
    'Sapphire crystal glass',
    'Genuine leather strap',
    'Water-resistant 100m',
    '2-year warranty'
  ],
  stock: 12
};

function App() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = () => {
    const newItem = {
      id: Date.now(),
      name: `${product.name} - ${product.variants[selectedVariant]}`,
      price: product.price,
      quantity: quantity,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop'
    };
    setCartItems([...cartItems, newItem]);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LuxWatch
              </h1>
              <nav className="hidden lg:flex items-center gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Collections</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Men</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Women</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none focus:outline-none text-sm w-40"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            <nav className="px-4 py-3 space-y-2">
              <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100">New Arrivals</a>
              <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Collections</a>
              <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Men</a>
              <a href="#" className="block px-3 py-2 rounded-lg hover:bg-gray-100">Women</a>
            </nav>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery />

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  New Arrival
                </span>
                {product.stock < 20 && (
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    Only {product.stock} left
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <p className="text-3xl font-bold text-blue-600">${product.price}</p>
              {product.originalPrice && (
                <p className="text-lg text-gray-500 line-through">${product.originalPrice}</p>
              )}
              {product.originalPrice && (
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Color</h3>
                <button 
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex gap-3">
                {product.variants.map((variant, idx) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedVariant === idx
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border rounded-lg hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border rounded-lg hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={addToCart}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Add to Cart
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Reviews />
        <RelatedProducts />
        <Newsletter />
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeCartItem}
      />

      <SizeGuide isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}

export default App;