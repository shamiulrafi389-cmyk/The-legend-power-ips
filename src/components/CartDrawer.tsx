import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

export function CartDrawer({ isOpen, onClose, items, onRemove, onUpdateQty }: CartDrawerProps) {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#151619] border-l border-[#2A2C32] z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-[#2A2C32] flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-[#F27D26]" size={24} />
                <h2 className="text-xl font-bold tracking-tight">System Cart</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-[#2A2C32] rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-4">
                  <div className="w-16 h-16 border-2 border-dashed border-slate-700 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="opacity-20" />
                  </div>
                  <p className="text-sm font-mono uppercase tracking-widest">Buffer Empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 industrial-card bg-black/20"
                    >
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded bg-slate-800" 
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate">{item.name}</h4>
                        <p className="tech-label text-slate-400 mt-1">{item.va}VA Rating</p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-black/40 rounded-md p-1 border border-[#2A2C32]">
                            <button 
                              onClick={() => onUpdateQty(item.id, -1)}
                              className="p-1 hover:text-[#F27D26] transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-mono w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQty(item.id, 1)}
                              className="p-1 hover:text-[#F27D26] transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-[#2A2C32] bg-black/20">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="tech-label">Total Execution Value</div>
                    <div className="text-sm text-slate-500 italic mt-1">Tax and shipping calculated at checkout</div>
                  </div>
                  <div className="text-3xl font-bold text-[#F27D26]">
                    ৳{total.toLocaleString()}
                  </div>
                </div>
                <button className="btn-primary w-full text-center">
                  Initialize Checkout Sequence
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
