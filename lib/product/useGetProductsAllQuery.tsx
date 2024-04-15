import { PaginatedResponseT, ProductT } from '@types';
import { QUERY_KEYS } from '@lib';
import {
  useInfiniteQuery,
  QueryFunctionContext,
  UseInfiniteQueryOptions,
  InfiniteData,
} from '@tanstack/react-query';
import ProductService from '@services/products.service';
import { AxiosResponse } from 'axios';

export const useGetProductsAllQuery = () => {
  let page = 1;

  const { data, ...stuff } = useInfiniteQuery<
    AxiosResponse<Partial<PaginatedResponseT<ProductT>>>
  >({
    initialPageParam: page,
    queryKey: [QUERY_KEYS.GET_PRODUCT_LIST],
    queryFn: ({ pageParam = page }) => ProductService.get({ page: pageParam }),
    getNextPageParam: (count) => {
      if (count) {
        return;
      }
      return page + 1;
    },
    getPreviousPageParam: (lastPage) => lastPage?.data?.previous,
  });

  return {
    data,
    ...stuff,
  };
};
