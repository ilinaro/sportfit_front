import { NextPageContext } from 'next';
import { PrimaryLayout } from '@layouts';
import { Page, ProductT } from '@types';
import { Product } from '@feature';
import { QUERY_KEYS } from '@lib';
import ProductService from '@services/products.service';
import { queryClientBase } from '@pages/_app';

type ProductPageT = {
  product?: ProductT | null;
};

const ProductPage: Page<ProductPageT> = ({ product }) => (
  <Product product={product} />
);

ProductPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const regex = /[^a-zA-Z-]/g;

  let queryId = `${query?.id}`.replace(regex, '') ?? null;

  if (queryId) {
    try {
      const product = await queryClientBase.fetchQuery({
        queryKey: [QUERY_KEYS.GET_PRODUCT_ID, queryId],
        queryFn: async () => {
          try {
            return await ProductService.getId(queryId);
          } catch (err) {
            return null;
          }
        },
      });
      return {
        props: { product: product?.[0] ?? null },
      };
    } catch (err) {
      return {
        props: { product: null },
      };
    }
  }

  return {
    props: { product: null },
  };
};

export default ProductPage;
