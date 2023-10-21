import { HTMLAttributes, ReactNode } from 'react';

type SplitDivType = HTMLAttributes<HTMLDivElement>;

export interface ISplitProps extends SplitDivType {
  children: ReactNode;
  splitChildren: ReactNode;
}
