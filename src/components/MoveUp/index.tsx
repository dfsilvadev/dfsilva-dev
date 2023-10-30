import { ForwardRefRenderFunction, forwardRef } from 'react';

import * as S from './styles';

import { IMoveUpInProps } from './types';

const MoveUpIn: ForwardRefRenderFunction<HTMLDivElement, IMoveUpInProps> = (
  { children, ...props },
  ref
) => {
  return (
    <S.WordAnimatedContent>
      <S.TextWrapper ref={ref} {...props}>
        {children}
      </S.TextWrapper>
    </S.WordAnimatedContent>
  );
};

export default forwardRef(MoveUpIn);
