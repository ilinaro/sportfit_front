import '@mantine/core/styles.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import 'dayjs/locale/ru';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
      refetchOnWindowFocus: false,
      refetchInterval: 2400000,
      staleTime: 900000,
      retry: 1,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextNProgress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
        options={{ showSpinner: false }}
      />
      <Toaster containerStyle={{ zIndex: 1000000 }} />
      <MantineProvider>
        <DatesProvider
          settings={{
            locale: 'ru',
          }}
        >
          <QueryClientProvider client={queryClientBase}>
            <Provider store={store}>
              <HydrationBoundary state={pageProps.dehydratedState}>
                {process.env.NODE_ENV === 'development' ? (
                  getLayout(<Component {...pageProps} />)
                ) : (
                  <ErrorBoundary>
                    {getLayout(<Component {...pageProps} />)}
                  </ErrorBoundary>
                )}
                {process.env.NODE_ENV === 'development' && false && (
                  <ReactQueryDevtools initialIsOpen={false} />
                )}
              </HydrationBoundary>
            </Provider>
          </QueryClientProvider>
        </DatesProvider>
      </MantineProvider>
    </>
  );
}
