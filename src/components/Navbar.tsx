import { ShoppingCart, Search, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto glass-panel h-16 rounded-full px-8 flex items-center justify-between pointer-events-auto border-white/5 relative overflow-hidden backdrop-blur-2xl">
        <div className="noise-overlay" />
        <div className="flex items-center gap-6 shrink-0 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-2xl"
          >
            <Zap className="text-black fill-current" size={20} />
          </motion.div>
          <div className="flex flex-col">
            <div className="font-black tracking-[-0.05em] text-lg text-white leading-none">
               THE LEGEND <span className="text-brand">POWER</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12 relative z-10">
          <a href="#products" className="tech-label text-slate-400 hover:text-white transition-all">Inventory</a>
          <a href="#support" className="tech-label text-slate-400 hover:text-white transition-all">Architecture</a>
        </div>

        <div className="flex items-center gap-6 flex-1 justify-end max-w-[220px] md:max-w-sm ml-auto relative z-10">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-brand transition-colors" size={14} />
            <input 
              type="text" 
              placeholder="SEARCH SYSTEMS..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-11 pr-4 text-[9px] font-mono tracking-widest focus:outline-none focus:border-brand/40 transition-all placeholder:text-slate-700 text-white"
            />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCartClick}
            className="group relative p-3 text-slate-400 hover:text-white transition-colors shrink-0 bg-white/5 rounded-full border border-white/10"
          >
            <ShoppingCart size={20} className="group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1 -right-1 bg-brand text-black text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-bg-dark shadow-2xl"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
