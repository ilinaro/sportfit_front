import { QUERY_KEYS } from '@lib';
import ProductService from '@services/products.service';
import { useInfiniteQuery } from 'react-query';

export const useGetProductsAllQuery = () => {
  const { data, ...stuff } = useInfiniteQuery(
    [QUERY_KEYS.GET_PRODUCT_LIST],
    () => ProductService.get(),
    {
      getNextPageParam: (lastPage) => lastPage.next,
      getPreviousPageParam: (lastPage) => lastPage.previous,
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
  return {
    data,
    ...stuff,
  };
};
