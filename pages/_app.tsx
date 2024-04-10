import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import 'dayjs/locale/ru';
import NextNProgress from 'nextjs-progressbar';
import React, { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { toggleDeviceType } from '@store/deviceTypeSlice';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from '@layouts/ErrorBoundary/ErrorBoundary';
import { DatesProvider } from '@mantine/dates';

import { Provider } from 'react-redux';
import store from '@store';
import { Page } from '@types';

type AppPropsWithLayout = AppProps & {
  Component: Page;
  pageProps: { isMobileView?: boolean; dehydratedState: DehydratedState };
};

export const queryClientBase = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchOnWindowFocus: true,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    store.dispatch(
      toggleDeviceType({
        isMobile: pageProps.isMobileView as boolean | undefined,
        isPhone: undefined,
        isTablet: undefined,
      })
    );
  }, []);

  return (
    <>
      <NextNProgress
        color="#333333"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
        options={{ showSpinner: false }}
      />
      <Toaster containerStyle={{ zIndex: 1000000 }} />
      <DatesProvider
        settings={{
          locale: 'ru',
        }}
      >
        <QueryClientProvider client={queryClientBase}>
          <MantineProvider>
            <Provider store={store}>
              <Hydrate state={pageProps.dehydratedState}>
                <ErrorBoundary>
                  {getLayout(<Component {...pageProps} />)}
                </ErrorBoundary>
                {process.env.NODE_ENV === 'development' && false && (
                  <ReactQueryDevtools initialIsOpen={false} />
                )}
              </Hydrate>
            </Provider>
          </MantineProvider>
        </QueryClientProvider>
      </DatesProvider>
    </>
  );
}
