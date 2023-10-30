import { MutableRefObject } from 'react';
import gsap from 'gsap';

export const wordIntoAnimate = (
  childSplit: SplitText,
  logoRef: MutableRefObject<HTMLImageElement | null>
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
      .from(logoRef.current, {
        opacity: 0,
        duration: 1,
        yPercent: 100
      })
      .from(
        childSplit.lines,
        {
          yPercent: 170,
          skewY: 5
        },
        0.1
      );
    self.add('onInit', () => {
      tl.play();
    });
  });
};
