import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Activity, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden grid-pattern">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand blur-[150px] rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600 blur-[150px] rounded-full opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-surface/50 backdrop-blur border border-border px-4 py-1.5 rounded-full mb-8 shadow-inner"
          >
            <div className="flex -space-x-2">
              <div className="w-2 h-2 bg-brand rounded-full animate-ping" />
              <div className="w-2 h-2 bg-brand rounded-full" />
            </div>
            <span className="tech-label text-slate-300">System Link: Active [2ms]</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black font-sans tracking-tight mb-8 leading-[0.85]">
            ENERGY <br />
            <span className="text-brand glow-text">LEGEND</span> <br />
            <span className="text-slate-500">DEFINED.</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
            Next-gen uninterruptible power systems. <span className="text-white">Pure Sine Wave</span> architecture designed to protect your most critical hardware.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#products" 
              className="btn-primary flex items-center gap-3 group"
            >
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <button className="px-8 py-4 bg-surface border border-border rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300">
              Technical Datasheet
            </button>
          </div>

          <div className="mt-16 flex gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-accent flex items-center justify-center border border-border">
                <ShieldCheck className="text-brand" size={18} />
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-accent flex items-center justify-center border border-border">
                <Cpu className="text-blue-500" size={18} />
              </div>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">AI Load Balancing</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative industrial-card p-4 aspect-square max-w-lg mx-auto group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-80 z-10" />
            
            <img 
              src="https://placehold.co/800x800/151619/F27D26?text=LEGEND+POWER+PRO" 
              alt="IPS Unit Hero" 
              className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-[2s] ease-out" 
            />
            
            {/* Visual HUD elements */}
            <div className="absolute top-8 right-8 z-20 flex flex-col items-end gap-2">
              <div className="bg-brand/20 backdrop-blur-md border border-brand/30 px-3 py-1 rounded text-[10px] font-mono font-bold text-brand">
                VOLTAGE: 230V
              </div>
              <div className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-3 py-1 rounded text-[10px] font-mono font-bold text-blue-400">
                TEMP: 42°C
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 z-20">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-1 bg-brand mb-4 shadow-[0_0_10px_#F27D26]"
              />
              <div className="tech-label text-white/50 mb-1">旗舰系列旗舰 Series</div>
              <h3 className="text-3xl font-black tracking-tighter">THE LEGEND X5</h3>
            </div>
          </div>
          
          {/* Decorative bits */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-[3px] border-r-[3px] border-brand/20 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-[3px] border-l-[3px] border-blue-500/20 rounded-bl-3xl" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-8 glass-panel p-4 rounded-xl hidden md:block"
          >
            <Activity className="text-brand mb-2" size={20} />
            <div className="h-12 w-32 bg-slate-800/30 rounded overflow-hidden flex items-end">
                {[...Array(12)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ height: [10, Math.random() * 40, 10] }}
                        transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                        className="flex-1 bg-brand/40 mx-[1px]"
                    />
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
