export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export type RateType = {
  count: number;
  rate: number;
};

export interface ProductDetailInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RateType;
}
