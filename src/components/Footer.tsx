import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#151619] border-t border-[#2A2C32] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#F27D26] rounded flex items-center justify-center">
              <Zap className="text-black fill-current" size={20} />
            </div>
            <div className="font-bold tracking-tighter text-lg text-white">
               THE LEGEND <span className="text-[#F27D26]">POWER</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
            Setting the standard for uninterruptible power solutions in Bangladesh since 2012. 
            Engineered for resilience, built for life.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 border border-[#2A2C32] rounded-full flex items-center justify-center hover:bg-[#F27D26] hover:text-black transition-all cursor-pointer">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4.11h3V22.5h5v-11.23h3.82l.45-4.11Z"/></svg>
            </div>
            <div className="w-10 h-10 border border-[#2A2C32] rounded-full flex items-center justify-center hover:bg-[#F27D26] hover:text-black transition-all cursor-pointer">
              <span className="sr-only">Twitter</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.95 4.57a10 10 0 0 1-2.82.775 4.96 4.96 0 0 0 2.16-2.73 9.87 9.87 0 0 1-3.13 1.2 4.93 4.93 0 0 0-8.39 4.49 14 14 0 0 1-10.17-5.15 4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62c0 .02 0 .04 0 .07a4.93 4.93 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.23.08 4.93 4.93 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.9 13.9 0 0 0 7.55 2.21c9.06 0 14-7.5 14-14 0-.21 0-.42-.01-.63a10 10 0 0 0 2.41-2.55Z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <h4 className="tech-label text-slate-100 mb-6">Product Range</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Residential IPS</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Industrial Online UPS</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Pure Sine Wave Inverters</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Solar Hybrid Systems</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Dry Cell Batteries</a></li>
          </ul>
        </div>

        <div>
          <h4 className="tech-label text-slate-100 mb-6">Quick Actions</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Check Status</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Warranty Registry</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Dealer Network</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Career Opportunities</a></li>
            <li><a href="#" className="hover:text-[#F27D26] transition-colors">Installation Request</a></li>
          </ul>
        </div>

        <div>
          <h4 className="tech-label text-slate-100 mb-6">Terminal Node</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#F27D26] mt-1 shrink-0" size={18} />
              <p className="text-sm text-slate-400">Circuit House Road, Mohipal, Feni</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#F27D26] shrink-0" size={18} />
              <p className="text-sm text-slate-400">+880 1619-288205 (WhatsApp)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#2A2C32] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
          © 2026 THE LEGEND POWER SYSTEMS LTD. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 hover:text-white">Privacy Protocol</a>
          <a href="#" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 hover:text-white">Security Specs</a>
        </div>
      </div>
    </footer>
  );
}
