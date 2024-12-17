export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  model: string;
  category: string;
  color: string;
  image: string;
  brand: string;
  discount?: number;
  popular?: boolean;
}
