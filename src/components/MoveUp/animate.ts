import { MutableRefObject } from 'react';
import gsap from 'gsap';

export const moveUpAnimate = (
  moveUpWrapperRef: MutableRefObject<HTMLSpanElement | null>
) => {
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: 'power1.inOut',
          duration: 1,
          delay: 0.3,
          stagger: {
            amount: 0.15
          }
        }
      })
      .from(
        moveUpWrapperRef.current,
        {
          yPercent: 170,
          skewY: 5,
          opacity: 0.0001
        },
        0.1
      );
    self.add('onInit', () => {
      tl.play();
    });
  });
};
