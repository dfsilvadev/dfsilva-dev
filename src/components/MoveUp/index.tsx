import { useLayoutEffect, useRef } from 'react';

import * as S from './styles';

import { IMoveUpInProps } from './types';
import { moveUpAnimate } from './animate';

const MoveUpIn = ({ children }: IMoveUpInProps) => {
  const moveUpWrapperRef = useRef<HTMLSpanElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    ctx.current = moveUpAnimate(moveUpWrapperRef);

    ctx.current.onInit();

    return () => {
      ctx.current && ctx.current.revert();
    };
  }, []);

  return (
    <S.MoveUpContent>
      <S.MoveUpWrapper ref={moveUpWrapperRef}>{children}</S.MoveUpWrapper>
    </S.MoveUpContent>
  );
};

export default MoveUpIn;
