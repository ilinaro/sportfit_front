import { PaginatedResponseT, ProductT } from '@types';
import HttpService from './http.service';

const ProductService = {
  get: async (params: any) => {
    const data = await HttpService().get<Partial<PaginatedResponseT<ProductT>>>(
      '/product-list/',
      { params }
    );
    return data;
  },

  getId: async (id: number) => {
    const { data }: { data: Partial<{ product: ProductT[] }> } =
      await HttpService().get(`/product-list/${id}/`);
    return data;
  },
};

export default ProductService;
