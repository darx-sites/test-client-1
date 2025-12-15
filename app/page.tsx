'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    description: 'High-quality sound with active noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Electronics',
    description: 'Track your fitness and stay connected'
  },
  {
    id: 3,
    name: 'Designer Sunglasses',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    category: 'Fashion',
    description: 'UV protection with premium style'
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Fashion',
    description: 'Durable and stylish for everyday use'
  },
  {
    id: 5,
    name: 'Portable Speaker',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'Electronics',
    description: 'Waterproof with 360-degree sound'
  },
  {
    id: 6,
    name: 'Running Shoes',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'Fashion',
    description: 'Comfortable and performance-driven'
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const categories = ['All', 'Electronics', 'Fashion'];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: ''
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    setShowCheckout(false);
    setShowCart(false);
    setCheckoutForm({
      name: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
      cardNumber: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                test-client-1
              </h1>
            </motion.div>
            <motion.button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cart ({cart.length})
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            Premium Products,
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Exceptional Quality
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our curated collection of premium products designed to elevate your lifestyle
          </motion.p>
          <motion.button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </div>
      </motion.section>

      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Browse our selection of premium items</p>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 mb-12 flex-wrap"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300 font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: 'Free Shipping', desc: 'On orders over $100' },
              { title: 'Secure Payment', desc: '100% secure transactions' },
              { title: '24/7 Support', desc: 'Always here to help' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/90">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">test-client-1</h3>
          <p className="text-gray-400 mb-6">Premium products for exceptional lifestyles</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-gray-500 mt-8">© 2024 test-client-1. All rights reserved.</p>
        </div>
      </footer>

      {showCart && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCart(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-primary-600 font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-primary-600">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => {
                        setShowCart(false);
                        setShowCheckout(true);
                      }}
                      className="w-full bg-primary-600 text-white py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {showCheckout && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCheckout(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <form onSubmit={handleCheckout} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={checkoutForm.email}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.city}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.zipCode}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, zipCode: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={checkoutForm.cardNumber}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, cardNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary-600">${getCartTotal().toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  Place Order
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}