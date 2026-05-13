export type StockStatus = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface Product {
  id: string;
  name: string;
  va: number;
  watts: number;
  price: number;
  img: string;
  stockStatus: StockStatus;
  stockQuantity: number;
  specs?: {
    surgeProtection: string;
    transferTime: string;
    efficiency: string;
    operatingTemp: string;
    batteryType: string;
    waveForm: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
