import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { cursorMouseAnimation, onMouseMove } from './animation';

import * as S from './styles';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | null>();

  useEffect(() => {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    ctx.current = cursorMouseAnimation(cursorRef);

    document.addEventListener('mousemove', (evt) =>
      onMouseMove(evt, cursorRef)
    );

    links?.forEach((link) => {
      link.addEventListener('mouseenter', () => ctx.current?.onEnter());
      link.addEventListener('mouseleave', () => ctx.current?.onLeave());
    });

    buttons?.forEach((button) => {
      button.addEventListener('mouseenter', () => ctx.current?.onEnter());
      button.addEventListener('mouseleave', () => ctx.current?.onLeave());
    });

    return () => {
      ctx.current && ctx.current.revert();
      document.removeEventListener('mousemove', (evt) =>
        onMouseMove(evt, cursorRef)
      );
    };
  }, []);

  return <S.CursorContent className="custom-cursor" ref={cursorRef} />;
};

export default Cursor;
