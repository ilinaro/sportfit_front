import { Drawer } from '@mantine/core';
import React from 'react';

type GlobalDrawerPropsT = {
  opened: boolean;
  close: () => void;
  open: () => void;
  children: React.ReactNode;
};

export const GlobalDrawer: React.FC<GlobalDrawerPropsT> = ({
  opened,
  close,
  open,
  children,
}) => {
  return (
    <Drawer opened={opened} onClose={close} position="right">
      {children}
    </Drawer>
  );
};
