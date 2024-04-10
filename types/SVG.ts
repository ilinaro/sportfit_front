import { SVGProps } from 'react';
import { SystemColor } from './system';

export interface SVGType extends SVGProps<SVGSVGElement> {
  width?: number;
  fill?: string;
  full?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  path?: 'full' | 'left' | 'right';
  className?: string;
  strokeColor?: SystemColor;
  color?: SystemColor;
}
