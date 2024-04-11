export type PaginatedResponseT<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type ProductT = {
  avg_rating: number | null;
  category: string | null;
  description: string | null;
  discount: number | null;
  discount_price: number | null;
  id: number;
  img: string | null;
  name: string | null;
  price: number | null;
  time_create: string | null;
};
