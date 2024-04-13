import { NextPageContext } from 'next';
import { PrimaryLayout } from '@layouts';
import { Page } from '@types';
import { Product } from '@feature';

type ProductPageT = {
  id: number | null;
};

const ProductPage: Page<ProductPageT> = ({ id }) => <Product id={id} />;

ProductPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const { id } = query;

  return {
    props: { id: Number(`${id}`.replace(/\D/g, '')) ?? null },
  };
};

export default ProductPage;
