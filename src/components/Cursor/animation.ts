import { RefObject } from 'react';
import gsap from 'gsap';

import { DefaultTheme } from '@/styles';

export const cursorMouseAnimation = (cursorRef: RefObject<HTMLDivElement>) => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: 'power1.easeInOut',
          duration: 0.4
        }
      })
      .to(cursorRef.current, {
        scale: 1.5,
        borderColor: DefaultTheme.colors.primary.main
      });
    self.add('onEnter', () => {
      tl.play();
    });

    self.add('onLeave', () => {
      tl.reverse();
    });
  });
};

export const onMouseMove = (
  evt: globalThis.MouseEvent,
  cursorRef: RefObject<HTMLDivElement>
) => {
  const { clientX, clientY } = evt;
  gsap.to(cursorRef.current, {
    x: clientX,
    y: clientY
  });
};
