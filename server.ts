import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Routes (Mocked for now, following requested MongoDB structure)
  /**
   * Product Schema Suggestion:
   * {
   *   name: String,
   *   va_rating: Number,
   *   category: { type: String, enum: ['IPS', 'UPS'] },
   *   price: Number,
   *   stock: Number,
   *   image_url: String
   * }
   */
  app.get("/api/products", (req, res) => {
    // Static payload for demonstration
    const products = [
      { 
        id: "1", 
        name: "Legend IPS 600VA", 
        va: 600, 
        watts: 500, 
        price: 12500, 
        img: "https://placehold.co/600x400/151619/F27D26?text=600VA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=1000VA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=1500VA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=2000VA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=2500VA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=3000VA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=4kVA+IPS",
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
        img: "https://placehold.co/600x400/151619/F27D26?text=5kVA+IPS",
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
    res.json(products);
  });

  /**
   * Order Schema Suggestion:
   * {
   *   customer_name: String,
   *   email: String,
   *   items: [{ product_id: ObjectId, quantity: Number }],
   *   total_amount: Number,
   *   status: { type: String, default: 'Pending' }
   * }
   */
  app.post("/api/checkout", (req, res) => {
    const { items, customer } = req.body;
    console.log("Processing order for:", customer.email);
    res.json({ success: true, orderId: "ORD-" + Math.random().toString(36).substr(2, 9) });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
