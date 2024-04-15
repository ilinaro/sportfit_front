import { Footer, FooterBar, HeadBar, SearchBlock } from '@components';
import styles from './PrimaryLayout.module.scss';
import {
  useAppDispatch,
  useAppSelector,
  useDeviceTypeIdentifier,
  useNoScroll,
} from '@lib';
import { getToken } from '@services';
import { toggleAuthState } from '@store/authStateSlice';
import { useEffect } from 'react';

export interface PrimaryLayoutProps {
  children: React.ReactNode;
  title?: string;
  footer?: boolean;
}

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({
  children,
  title,
  footer = true,
}) => {
  const dispatch = useAppDispatch();

  useDeviceTypeIdentifier();
  const { isMobile } = useAppSelector((state) => state.isMobile);
  const { accessToken, refreshToken } = getToken();
  const { noScroll } = useAppSelector((state) => state.noScroll);

  useEffect(() => {
    if (!refreshToken) {
      dispatch(toggleAuthState({ isLogin: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useNoScroll(noScroll);

  if (isMobile === undefined) return null;

  return (
    <div className={styles.Main}>
      <HeadBar />
      {!isMobile && <SearchBlock />}
      <div className={styles.Main_children}>{children}</div>
      <Footer />
      {isMobile && <FooterBar />}
    </div>
  );
};
