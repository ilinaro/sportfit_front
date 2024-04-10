import { useEffect, useState } from 'react';
import { toggleDeviceType } from 'store/deviceTypeSlice';
import { useAppDispatch } from './useAppDispatch';

export const useDeviceTypeIdentifier = () => {
  const dispatch = useAppDispatch();
  const [isMobile, setMobile] = useState<boolean>();
  const [isTablet, setTablet] = useState<boolean>();
  const [isPhone, setPhone] = useState<boolean>();

  useEffect(() => {
    const clientWidth: number = window.innerWidth;
    const mobileCondition: boolean = clientWidth < 1024.1;
    const tabletCondition: boolean = clientWidth < 1024.1 && clientWidth > 768;
    const phoneCondition: boolean = clientWidth < 768;
    setMobile(mobileCondition);
    setTablet(tabletCondition);
    setPhone(phoneCondition);
    window.addEventListener('resize', () => {
      const resizeClientWidth = window.innerWidth;
      const resizeMobileCondition: boolean = resizeClientWidth < 1024.1;
      const resizeTabletCondition: boolean =
        resizeClientWidth < 1024.1 && resizeClientWidth > 768.1;
      const resizePhoneCondition: boolean = resizeClientWidth < 768;
      setMobile(resizeMobileCondition);
      setTablet(resizeTabletCondition);
      setPhone(resizePhoneCondition);
    });
  }, []);
  useEffect(() => {
    dispatch(toggleDeviceType({ isMobile, isTablet, isPhone }));
  }, [dispatch, isMobile, isTablet, isPhone]);
};
