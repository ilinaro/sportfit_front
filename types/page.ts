import { NextPage } from 'next';
import { ComponentType } from 'react';

export type Page<P = object> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  layout?: ComponentType;
};
