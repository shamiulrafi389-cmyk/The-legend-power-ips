import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Clock, Zap, Thermometer, Battery, Activity } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
  onAdd: (product: Product) => void;
}

export function ProductDetail({ product, onClose, onAdd }: ProductDetailProps) {
  if (!product) return null;

  const specs = product.specs || {
    surgeProtection: 'Standard Protection',
    transferTime: '< 10ms',
    efficiency: '> 95%',
    operatingTemp: '0°C - 45°C',
    batteryType: 'Lead Acid',
    waveForm: 'Pure Sine Wave'
  };

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg-dark/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-[2.5rem] relative z-10 flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.8)] border-white/10"
          >
            <div className="noise-overlay" />
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-surface-accent sticky top-0 md:h-[90vh] z-20 overflow-hidden">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
              <button 
                onClick={onClose}
                className="absolute top-6 left-6 p-3 bg-bg-dark/50 backdrop-blur-md rounded-2xl border border-white/10 text-white hover:text-brand transition-colors md:hidden"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-slate-400 hover:text-brand transition-all hidden md:block"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="tech-label text-brand">Hardware Specifications</div>
                <div className={`text-[9px] font-black px-2.5 py-1 rounded-sm uppercase tracking-tighter border ${
                  product.stockStatus === 'In Stock' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                  product.stockStatus === 'Low Stock' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                  'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  {product.stockStatus} {product.stockStatus === 'Low Stock' && `(${product.stockQuantity} Left)`}
                </div>
              </div>
              <h2 className="text-4xl font-black mb-2 tracking-tight">{product.name}</h2>
              <div className="text-3xl font-mono font-black text-slate-500 mb-8 tracking-tighter">
                {product.va}VA / {product.watts}W
              </div>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <SpecItem icon={<Shield size={18} />} label="Surge Protection" value={specs.surgeProtection} />
                <SpecItem icon={<Clock size={18} />} label="Transfer Time" value={specs.transferTime} />
                <SpecItem icon={<Activity size={18} />} label="Efficiency" value={specs.efficiency} />
                <SpecItem icon={<Thermometer size={18} />} label="Operating Temp" value={specs.operatingTemp} />
                <SpecItem icon={<Battery size={18} />} label="Battery Config" value={specs.batteryType} />
                <SpecItem icon={<Zap size={18} />} label="Wave Form" value={specs.waveForm} />
              </div>

              {/* Warranty Section */}
              <div className="mb-10 p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center gap-6 group hover:border-brand/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-brand text-black flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(242,125,38,0.2)] group-hover:scale-110 transition-transform">
                  <Shield size={28} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="tech-label text-brand mb-1">Protection Protocol</div>
                  <div className="text-xl font-black text-white tracking-tight">2 Year Standard Warranty</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">Certified Legend Support Included</div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                <div>
                  <div className="tech-label text-slate-500 mb-1">MSRP Grid Price</div>
                  <div className="text-4xl font-black glow-text">৳{product.price.toLocaleString()}</div>
                </div>
                <button 
                  onClick={() => {
                    onAdd(product);
                    onClose();
                  }}
                  disabled={product.stockStatus === 'Out of Stock'}
                  className={`btn-primary ${product.stockStatus === 'Out of Stock' ? 'opacity-50 grayscale cursor-not-allowed pointer-events-none' : ''}`}
                >
                  {product.stockStatus === 'Out of Stock' ? 'System Unavailable' : 'Acquire Unit'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand/20 transition-colors group">
      <div className="w-10 h-10 rounded-xl bg-bg-dark flex items-center justify-center text-brand group-hover:shadow-[0_0_15px_rgba(242,125,38,0.2)] transition-all">
        {icon}
      </div>
      <div>
        <div className="tech-label text-slate-600 mb-0.5">{label}</div>
        <div className="font-bold text-slate-200">{value}</div>
      </div>
    </div>
  );
}
