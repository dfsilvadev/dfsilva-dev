import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';

import { Flex, HeroBoxWrapper, MoveUp } from '@/components';

import { wordIntoAnimate } from './animate';

import * as S from './styles';

const Hero = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    const wordIntoAnimation = document.querySelectorAll(
      '[data-wordanimated="into"]'
    );

    gsap.registerPlugin(SplitText);

    const childSplit = new SplitText(gsap.utils.toArray(wordIntoAnimation), {
      type: 'lines',
      linesClass: 'split-child'
    });

    ctx.current = wordIntoAnimate(childSplit, logoRef);

    ctx.current.onInit();

    return () => {
      ctx.current && ctx.current.revert();
    };
  }, []);

  return (
    <S.HeroContent>
      <S.FirstColumn align="flex-end">
        <Flex direction="column" gap="4.5rem">
          <S.HeroMessage>
            <Flex direction="column">
              <MoveUp data-wordanimated="into">
                <span>
                  <strong>Desenvolver se</strong>
                </span>
              </MoveUp>

              <MoveUp data-wordanimated="into">
                <span>tornou um hobby</span>
              </MoveUp>

              <MoveUp data-wordanimated="into">
                <span>favorito.</span>
              </MoveUp>
            </Flex>
          </S.HeroMessage>

          <Flex align="center" gap="1rem">
            <Flex
              style={{
                overflow: 'hidden'
              }}
            >
              <Image
                src="images/svg/logo.svg"
                alt="Logo Daniel Silva"
                width={36}
                height={36}
                priority
                ref={logoRef}
              />
            </Flex>

            <S.HeroName>
              <Flex direction="column">
                <MoveUp data-wordanimated="into">
                  <span>Daniel Silva</span>
                </MoveUp>

                <MoveUp data-wordanimated="into">
                  <span>Sênior Frontend Developer</span>
                </MoveUp>
              </Flex>
            </S.HeroName>
          </Flex>
        </Flex>
      </S.FirstColumn>

      <HeroBoxWrapper />
    </S.HeroContent>
  );
};

export default Hero;
