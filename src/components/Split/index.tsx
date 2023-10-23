import { useLayoutEffect, useRef } from 'react';

import * as S from './styles';

import { splitElementAnimation } from './animation';

import { ISplitProps } from './types';

const Split = ({ children, splitChildren, ...props }: ISplitProps) => {
  const splitElementRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | null>();

  const onEnter = () => {
    if (ctx.current) {
      ctx.current.onEnter();
    }
  };

  const onLeave = () => {
    if (ctx.current) {
      ctx.current.onLeave();
    }
  };

  useLayoutEffect(() => {
    ctx.current = splitElementAnimation(splitElementRef);

    return () => {
      ctx.current && ctx.current.revert();
    };
  }, []);

  return (
    <S.SplitContent
      {...props}
      ref={splitElementRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <S.SplitChildren>{children}</S.SplitChildren>
      <S.SplitChildren>{splitChildren}</S.SplitChildren>
    </S.SplitContent>
  );
};

export default Split;
