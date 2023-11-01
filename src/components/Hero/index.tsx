import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';

import { Flex, HeroBoxWrapper, MoveUp } from '@/components';

import * as S from './styles';

import { moveUpAnimate } from './animate';

const Hero = () => {
  const ctx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    const moveUpContentList = document.querySelectorAll('[data-moveup="into"]');
    ctx.current = moveUpAnimate(moveUpContentList);

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
              <MoveUp data-moveup="into">
                <span>
                  <strong>Desenvolver se</strong>
                </span>
              </MoveUp>

              <MoveUp data-moveup="into">
                <span>tornou um hobby</span>
              </MoveUp>

              <MoveUp data-moveup="into">
                <span>favorito.</span>
              </MoveUp>
            </Flex>
          </S.HeroMessage>

          <Flex align="center" gap="1rem">
            <MoveUp data-moveup="into">
              <Image
                src="images/svg/logo.svg"
                alt="Logo Daniel Silva"
                width={36}
                height={36}
              />
            </MoveUp>
            <S.HeroName>
              <Flex direction="column">
                <MoveUp data-moveup="into">
                  <span>Daniel Silva</span>
                </MoveUp>

                <MoveUp data-moveup="into">
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
