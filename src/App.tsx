/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';

function ProductSkeleton() {
  return (
    <div className="industrial-card h-[450px] bg-surface-accent flex flex-col">
      <div className="relative aspect-[5/4] bg-bg-dark/40 animate-pulse" />
      <div className="p-7 flex-1 space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <div className="h-2 w-20 bg-border rounded animate-pulse" />
            <div className="h-6 w-3/4 bg-border rounded animate-pulse" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-border animate-pulse" />
        </div>
        <div className="grid grid-cols-2 gap-4 bg-border p-4 rounded-xl">
          <div className="space-y-2">
            <div className="h-2 w-10 bg-bg-dark rounded animate-pulse" />
            <div className="h-4 w-16 bg-bg-dark rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-10 bg-bg-dark rounded animate-pulse" />
            <div className="h-4 w-16 bg-bg-dark rounded animate-pulse" />
          </div>
        </div>
        <div className="pt-6 flex justify-between items-center">
          <div className="h-8 w-24 bg-border rounded animate-pulse" />
          <div className="w-14 h-14 bg-border rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      product.name.toLowerCase().includes(query) ||
      product.va.toString().includes(query) ||
      product.watts.toString().includes(query)
    );
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen selection:bg-brand selection:text-black relative">
      <div className="noise-overlay fixed inset-0 z-[100] opacity-[0.02]" />
      <div className="fixed inset-0 pointer-events-none z-[99] shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
      
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <Hero />
        
        <section id="products" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="tech-label mb-2">Inventory Staged</div>
              <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">
                IPS <span className="text-[#F27D26]">Solutions</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Precision-engineered pure sine wave inverters for seamless power transitions. 
              Built for reliability in high-demand environments.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : (
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAdd={addToCart}
                    onSelect={setSelectedProduct}
                  />
                ))}
              </AnimatePresence>
              {filteredProducts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="col-span-full py-32 text-center border-2 border-dashed border-border rounded-3xl bg-surface/30 px-6"
                >
                  <div className="w-20 h-20 bg-surface border border-border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Activity size={32} className="text-slate-700" />
                  </div>
                  <div className="tech-label mb-3 text-brand">Null Result Error</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">System Archive Search Empty</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">Our logs show no hardware units matching your current filter parameters. Try another query.</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-8 text-brand font-bold uppercase text-xs tracking-widest hover:underline"
                  >
                    Reset Grid Monitor
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />

      <ProductDetail 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAdd={addToCart}
      />
    </div>
  );
}

