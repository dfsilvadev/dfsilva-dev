import gsap from 'gsap';

export const moveUpAnimate = (moveUpContentList: NodeListOf<Element>) => {
  const list = gsap.utils.toArray(moveUpContentList);
  return gsap.context((self) => {
    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          ease: 'power1.inOut',
          duration: 1,
          delay: 0.3,
          stagger: {
            amount: 0.6
          }
        }
      })
      .from(
        list,
        {
          yPercent: 170,
          skewY: 2,
          opacity: 0.0001
        },
        0.1
      );
    self.add('onInit', () => {
      tl.play();
    });
  });
};
