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
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-7xl mx-auto glass-panel h-20 rounded-2xl md:rounded-full px-6 flex items-center justify-between pointer-events-auto border-white/5">
        <div className="flex items-center gap-3 shrink-0">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(242,125,38,0.3)]"
          >
            <Zap className="text-black fill-current" size={20} />
          </motion.div>
          <div className="font-black tracking-tighter text-sm md:text-xl hidden xs:block">
             THE LEGEND <span className="text-brand">POWER</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <a href="#products" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-brand transition-colors">Inventory</a>
          <a href="#footer" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-brand transition-colors">Support</a>
          <a href="#footer" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-brand transition-colors">Feni Hub</a>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end max-w-[180px] md:max-w-xs ml-auto">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-brand transition-colors" size={14} />
            <input 
              type="text" 
              placeholder="SEARCH..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-bg-dark/40 border border-border rounded-full py-2 pl-9 pr-3 text-[10px] font-mono tracking-widest focus:outline-none focus:border-brand/40 focus:ring-4 focus:ring-brand/5 transition-all placeholder:text-slate-700"
            />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onCartClick}
            className="group relative p-2 text-slate-400 hover:text-brand transition-colors shrink-0"
          >
            <ShoppingCart size={22} className="group-hover:drop-shadow-[0_0_8px_#F27D26]" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute -top-1 -right-1 bg-brand text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-bg-dark shadow-lg shadow-brand/20"
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
