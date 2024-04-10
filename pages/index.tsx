import { Page } from '@types';
import { PrimaryLayout } from '@layouts';
import { Home } from '@feature';

const HomePage: Page = () => {
  return <Home />;
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
