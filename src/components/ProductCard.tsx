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
      <div className="relative aspect-[5/4] overflow-hidden bg-surface-accent">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115" 
        />
        <div className="absolute top-5 left-5 z-20">
          <div className="bg-brand text-black text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-tighter shadow-2xl backdrop-blur-sm">
            Military Grade
          </div>
        </div>

        <div className="absolute top-5 right-5 z-20">
          <div className={`text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-tighter shadow-2xl backdrop-blur-md border border-white/10 ${
            product.stockStatus === 'In Stock' ? 'bg-green-500/20 text-green-400' :
            product.stockStatus === 'Low Stock' ? 'bg-amber-500/20 text-amber-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {product.stockStatus}
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-20">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="tech-label text-brand/50 mb-2">Core Processor V.4</div>
            <h3 className="text-2xl font-black font-sans tracking-tight leading-tight group-hover:text-brand transition-colors">{product.name}</h3>
          </div>
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.2 }}
            className="p-2.5 rounded-xl bg-surface-accent border border-white/5 shadow-inner"
          >
            <Zap className="text-brand" size={18} />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/5 p-px rounded-2xl overflow-hidden mb-10 shadow-inner">
          <div className="bg-surface/50 backdrop-blur p-5">
            <div className="tech-label text-slate-600 mb-2">Load Capacity</div>
            <div className="text-2xl font-mono font-black tracking-tighter text-slate-200">{product.va} <span className="text-[10px] text-slate-500 font-sans">VA</span></div>
          </div>
          <div className="bg-surface/50 backdrop-blur p-5">
            <div className="tech-label text-slate-600 mb-2">Output Power</div>
            <div className="text-2xl font-mono font-black tracking-tighter text-slate-200">{product.watts} <span className="text-[10px] text-slate-500 font-sans">W</span></div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
          <div className="relative">
            <div className="tech-label text-brand/30 absolute -top-5">Base Unit Price</div>
            <div className="text-4xl font-black font-sans tracking-[ -0.05em] text-white glow-text">
              <span className="text-lg text-brand mr-1">৳</span>{product.price.toLocaleString()}
            </div>
          </div>
          
          <motion.button 
            whileHover={!isAdding && product.stockStatus !== 'Out of Stock' ? { scale: 1.1, backgroundColor: '#FF8E3C' } : {}}
            whileTap={!isAdding && product.stockStatus !== 'Out of Stock' ? { scale: 0.9 } : {}}
            onClick={handleAdd}
            disabled={isAdding || product.stockStatus === 'Out of Stock'}
            className={`w-16 h-16 rounded-[24px] flex items-center justify-center transition-all duration-500 ease-out border border-white/10 ${
              isAdding 
                ? 'bg-blue-600 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)]' 
                : product.stockStatus === 'Out of Stock'
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border-white/5'
                  : 'bg-brand text-black hover:shadow-[0_0_40px_rgba(242,125,38,0.4)]'
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
