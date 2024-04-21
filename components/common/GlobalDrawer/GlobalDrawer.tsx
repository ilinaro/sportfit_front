import { Drawer } from '@mantine/core';
import React from 'react';

type GlobalDrawerPropsT = {
  opened: boolean;
  close: () => void;
  open: () => void;
};

export const GlobalDrawer: React.FC<GlobalDrawerPropsT> = ({
  opened,
  close,
  open,
}) => {
  return (
    <Drawer opened={opened} onClose={close} title="Authentication">
      {/* Drawer content */}123
    </Drawer>
  );
};
