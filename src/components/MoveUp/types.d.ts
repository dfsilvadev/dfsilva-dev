import { HTMLAttributes, ReactNode } from 'react';

export type MoveUpInType = HTMLAttributes<HTMLDivElement>;

export interface IMoveUpInProps extends MoveUpInType {
  children: ReactNode;
}
