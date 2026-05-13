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
      { id: "1", name: "Legend IPS 600VA", va: 600, watts: 500, price: 12500, img: "https://placehold.co/600x400/151619/F27D26?text=600VA+IPS" },
      { id: "2", name: "Legend IPS 1000VA", va: 1000, watts: 800, price: 18500, img: "https://placehold.co/600x400/151619/F27D26?text=1000VA+IPS" },
      { id: "3", name: "Legend IPS 1500VA", va: 1500, watts: 1200, price: 24500, img: "https://placehold.co/600x400/151619/F27D26?text=1500VA+IPS" },
      { id: "4", name: "Legend IPS 2000VA", va: 2000, watts: 1600, price: 32000, img: "https://placehold.co/600x400/151619/F27D26?text=2000VA+IPS" },
      { id: "5", name: "Legend IPS 2500VA", va: 2500, watts: 2000, price: 45000, img: "https://placehold.co/600x400/151619/F27D26?text=2500VA+IPS" },
      { id: "6", name: "Legend IPS 3000VA", va: 3000, watts: 2400, price: 58000, img: "https://placehold.co/600x400/151619/F27D26?text=3000VA+IPS" },
      { id: "7", name: "Legend IPS 4kVA", va: 4000, watts: 3200, price: 85000, img: "https://placehold.co/600x400/151619/F27D26?text=4kVA+IPS" },
      { id: "8", name: "Legend IPS 5kVA", va: 5000, watts: 4000, price: 110000, img: "https://placehold.co/600x400/151619/F27D26?text=5kVA+IPS" }
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
