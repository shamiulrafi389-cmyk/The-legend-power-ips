import { Product } from './types';

export const PRODUCTS: Product[] = [
  { 
    id: "1", 
    name: "Legend IPS 600VA", 
    va: 600, 
    watts: 500, 
    price: 12500, 
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    stockStatus: "In Stock",
    stockQuantity: 15,
    specs: {
      surgeProtection: "3000 Joules",
      transferTime: "< 10ms",
      efficiency: "> 95%",
      operatingTemp: "0°C - 45°C",
      batteryType: "Deep Cycle Lead Acid",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "2", 
    name: "Legend IPS 1000VA", 
    va: 1000, 
    watts: 800, 
    price: 18500, 
    img: "https://images.unsplash.com/photo-1558444479-c8 academic-f-0?auto=format&fit=crop&q=80&w=800",
    stockStatus: "Low Stock",
    stockQuantity: 3,
    specs: {
      surgeProtection: "4500 Joules",
      transferTime: "< 8ms",
      efficiency: "> 96%",
      operatingTemp: "0°C - 50°C",
      batteryType: "Lead Acid / Lithium Compatible",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "3", 
    name: "Legend IPS 1500VA", 
    va: 1500, 
    watts: 1200, 
    price: 24500, 
    img: "https://images.unsplash.com/photo-1517420812316-81518388915e?auto=format&fit=crop&q=80&w=800",
    stockStatus: "In Stock",
    stockQuantity: 8,
    specs: {
      surgeProtection: "6000 Joules",
      transferTime: "< 5ms",
      efficiency: "> 97%",
      operatingTemp: "0°C - 55°C",
      batteryType: "Heavy Duty Tubular",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "4", 
    name: "Legend IPS 2000VA", 
    va: 2000, 
    watts: 1600, 
    price: 32000, 
    img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
    stockStatus: "Out of Stock",
    stockQuantity: 0,
    specs: {
      surgeProtection: "8000 Joules",
      transferTime: "< 4ms",
      efficiency: "> 97.5%",
      operatingTemp: "-5°C - 55°C",
      batteryType: "Smart Hybrid Interface",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "5", 
    name: "Legend IPS 2500VA", 
    va: 2500, 
    watts: 2000, 
    price: 45000, 
    img: "https://images.unsplash.com/photo-1593344484962-996055d49377?auto=format&fit=crop&q=80&w=800",
    stockStatus: "In Stock",
    stockQuantity: 12,
    specs: {
      surgeProtection: "10000 Joules",
      transferTime: "Seamless (Zero Gap)",
      efficiency: "> 98%",
      operatingTemp: "Industrial Grade Specs",
      batteryType: "Lithium-Iron Phosphate Support",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "6", 
    name: "Legend IPS 3000VA", 
    va: 3000, 
    watts: 2400, 
    price: 58000, 
    img: "https://images.unsplash.com/photo-1610968237229-8777174db792?auto=format&fit=crop&q=80&w=800",
    stockStatus: "Low Stock",
    stockQuantity: 2,
    specs: {
      surgeProtection: "Maximum Grade",
      transferTime: "Seamless",
      efficiency: "Ultra Efficiency Mode (>98%)",
      operatingTemp: "Integrated Active Cooling",
      batteryType: "Multi-bank Sync",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "7", 
    name: "Legend IPS 4kVA", 
    va: 4000, 
    watts: 3200, 
    price: 85000, 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    stockStatus: "In Stock",
    stockQuantity: 5,
    specs: {
      surgeProtection: "Enterprise Standard",
      transferTime: "Real-time Sync",
      efficiency: "Peak Optimization (>98.5%)",
      operatingTemp: "Extreme Environment Ready",
      batteryType: "External Array Capable",
      waveForm: "Pure Sine Wave"
    }
  },
  { 
    id: "8", 
    name: "Legend IPS 5kVA", 
    va: 5000, 
    watts: 4000, 
    price: 110000, 
    img: "https://images.unsplash.com/photo-1580584126748-52ce714399b4?auto=format&fit=crop&q=80&w=800",
    stockStatus: "Out of Stock",
    stockQuantity: 0,
    specs: {
      surgeProtection: "Ultimate Protection",
      transferTime: "Instantaneous",
      efficiency: "Premium Efficiency (>99%)",
      operatingTemp: "Liquid-cooled Chassis Capable",
      batteryType: "Rack Mount Scalable",
      waveForm: "Pure Sine Wave"
    }
  }
];
