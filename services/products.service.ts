import { PaginatedResponseT, ProductT } from '@types';
import HttpService from './http.service';

const ProductService = {
  get: async () => {
    const { data }: { data: PaginatedResponseT<ProductT> } =
      await HttpService().get('/product-list/');
    return data;
  },
};

export default ProductService;
