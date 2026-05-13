export interface Product {
  id: string;
  name: string;
  va: number;
  watts: number;
  price: number;
  img: string;
}

export interface CartItem extends Product {
  quantity: number;
}
