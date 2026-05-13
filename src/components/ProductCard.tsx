import { motion } from 'motion/react';
import { Product } from '../types';
import { Plus, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  key?: string;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      className="industrial-card group flex flex-col h-full"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-surface-accent">
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-brand text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter shadow-lg">
            Certified Grade
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-7 flex-1 flex flex-col relative z-20">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="tech-label text-brand/60 mb-2">Model Series LP-{product.va}</div>
            <h3 className="text-2xl font-black font-sans tracking-tight leading-tight">{product.name}</h3>
          </div>
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="p-2 rounded-lg bg-surface-accent border border-border"
          >
            <Zap className="text-brand" size={16} />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border p-px rounded-xl overflow-hidden mb-8">
          <div className="bg-surface p-4">
            <div className="tech-label text-slate-500 mb-1">Apparent</div>
            <div className="text-xl font-mono font-bold tracking-tighter">{product.va}VA</div>
          </div>
          <div className="bg-surface p-4">
            <div className="tech-label text-slate-500 mb-1">Effective</div>
            <div className="text-xl font-mono font-bold tracking-tighter">{product.watts}W</div>
          </div>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="relative">
            <div className="tech-label text-[#F27D26]/40 absolute -top-4">Retail Val</div>
            <div className="text-3xl font-black font-sans tracking-tighter glow-text">
              ৳{product.price.toLocaleString()}
            </div>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onAdd(product)}
            className="w-14 h-14 rounded-2xl bg-brand text-black flex items-center justify-center hover:shadow-[0_0_20px_rgba(242,125,38,0.5)] transition-all ease-out"
          >
            <Plus size={28} className="stroke-[3]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
