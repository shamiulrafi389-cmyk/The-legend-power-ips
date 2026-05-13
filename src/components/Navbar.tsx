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
      <div className="max-w-7xl mx-auto glass-panel h-20 rounded-[2rem] px-8 flex items-center justify-between pointer-events-auto border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.6)] relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="flex items-center gap-4 shrink-0 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-11 h-11 bg-brand rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(242,125,38,0.4)]"
          >
            <Zap className="text-black fill-current" size={22} />
          </motion.div>
          <div className="flex flex-col">
            <div className="font-black tracking-[-0.05em] text-xl leading-none">
               THE LEGEND <span className="text-brand">POWER</span>
            </div>
            <div className="tech-label text-[8px] text-slate-500 mt-1">IPS & UPS SYSTEMS</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12 relative z-10">
          <a href="#products" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-brand transition-all">Archive</a>
          <a href="#footer" className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-brand transition-all">Support</a>
        </div>

        <div className="flex items-center gap-6 flex-1 justify-end max-w-[220px] md:max-w-sm ml-auto relative z-10">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 group-focus-within:text-brand transition-colors" size={14} />
            <input 
              type="text" 
              placeholder="SYSTEM LOG SEARCH..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-black/40 border border-white/5 rounded-full py-2.5 pl-11 pr-4 text-[9px] font-mono tracking-[0.2em] focus:outline-none focus:border-brand/40 focus:ring-8 focus:ring-brand/5 transition-all placeholder:text-slate-800"
            />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onCartClick}
            className="group relative p-3 text-slate-400 hover:text-brand transition-colors shrink-0 bg-white/5 rounded-2xl border border-white/5"
          >
            <ShoppingCart size={22} className="group-hover:drop-shadow-[0_0_12px_#F27D26]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1.5 -right-1.5 bg-brand text-black text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-bg-dark shadow-[0_0_20px_rgba(242,125,38,0.5)]"
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
