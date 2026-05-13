import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { Plus, Zap, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  onSelect: (p: Product) => void;
  key?: React.Key;
}

export function ProductCard({ product, onAdd, onSelect }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    onAdd(product);
    setTimeout(() => setIsAdding(false), 2000);
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={product.stockStatus !== 'Out of Stock' ? { y: -10 } : {}}
      onClick={() => onSelect(product)}
      className={`industrial-card group flex flex-col h-full glow-border cursor-pointer shadow-low ${
        product.stockStatus === 'Out of Stock' ? 'opacity-60 grayscale-[0.3]' : ''
      }`}
    >
      <div className="noise-overlay" />
      <div className="relative aspect-[5/4] overflow-hidden bg-surface-accent border-b border-white/5">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute top-5 left-5 z-20">
          <div className="bg-white/10 backdrop-blur-md text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-2xl border border-white/10">
            Series V.04
          </div>
        </div>

        <div className="absolute top-5 right-5 z-20">
          <div className={`text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md border ${
            product.stockStatus === 'In Stock' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
            product.stockStatus === 'Low Stock' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
            'bg-red-500/10 text-red-400 border-red-500/20'
          }`}>
            {product.stockStatus}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-20 bg-surface/50">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="tech-label text-slate-600 mb-2">The Legend Power™</div>
            <h3 className="text-2xl font-black font-sans tracking-tight leading-tight group-hover:text-brand transition-colors text-white">{product.name}</h3>
          </div>
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.2, backgroundColor: 'rgba(242, 125, 38, 0.2)' }}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:text-brand transition-colors"
          >
            <Zap className="text-slate-400 group-hover:text-brand" size={18} />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/5 p-px rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/5">
          <div className="bg-bg-dark/80 backdrop-blur p-5">
            <div className="tech-label text-slate-700 mb-2">V-Rating</div>
            <div className="text-2xl font-mono font-black tracking-tighter text-white">{product.va} <span className="text-[10px] text-slate-600 font-sans tracking-widest uppercase">VA</span></div>
          </div>
          <div className="bg-bg-dark/80 backdrop-blur p-5">
            <div className="tech-label text-slate-700 mb-2">Capacity</div>
            <div className="text-2xl font-mono font-black tracking-tighter text-white">{product.watts} <span className="text-[10px] text-slate-600 font-sans tracking-widest uppercase">W</span></div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
          <div className="relative">
            <div className="tech-label text-slate-700 absolute -top-5">Unit Price</div>
            <div className="text-4xl font-black font-sans tracking-[-0.06em] text-white">
              <span className="text-lg text-brand mr-1">৳</span>{product.price.toLocaleString()}
            </div>
          </div>
          
          <motion.button 
            whileHover={!isAdding && product.stockStatus !== 'Out of Stock' ? { scale: 1.1 } : {}}
            whileTap={!isAdding && product.stockStatus !== 'Out of Stock' ? { scale: 0.95 } : {}}
            onClick={handleAdd}
            disabled={isAdding || product.stockStatus === 'Out of Stock'}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ease-out border ${
              isAdding 
                ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] border-blue-500/50' 
                : product.stockStatus === 'Out of Stock'
                  ? 'bg-white/5 text-slate-700 cursor-not-allowed border-white/5'
                  : 'bg-white text-black hover:bg-brand hover:shadow-[0_0_30px_rgba(242,125,38,0.3)] border-white/10'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdding ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <Check size={28} className="stroke-[3]" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Plus size={28} className="stroke-[3]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
