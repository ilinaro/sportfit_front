import { QUERY_KEYS } from '@lib';
import ProductService from '@services/products.service';
import { useQuery } from '@tanstack/react-query';

export const useGetProductIdQuery = (id: number) => {
  const { data, ...stuff } = useQuery({
    queryKey: [QUERY_KEYS.GET_PRODUCT_ID],
    queryFn: () => ProductService.getId(id),
  });
  return {
    data: data?.[0],
    ...stuff,
  };
};
