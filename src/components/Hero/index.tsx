import Image from 'next/image';

import { Flex, HeroBoxWrapper, MoveUp } from '@/components';

import * as S from './styles';

const Hero = () => {
  return (
    <S.HeroContent>
      <S.FirstColumn align="flex-end">
        <Flex direction="column" gap="4.5rem">
          <S.HeroMessage>
            <Flex direction="column">
              <MoveUp>
                <span>
                  <strong>Desenvolver se</strong>
                </span>
              </MoveUp>

              <MoveUp>
                <span>tornou um hobby</span>
              </MoveUp>

              <MoveUp>
                <span>favorito.</span>
              </MoveUp>
            </Flex>
          </S.HeroMessage>

          <Flex align="center" gap="1rem">
            <Image
              src="images/svg/logo.svg"
              alt="Logo Daniel Silva"
              width={36}
              height={36}
              priority
            />

            <S.HeroName>
              <Flex direction="column">
                <MoveUp>
                  <span>Daniel Silva</span>
                </MoveUp>

                <MoveUp>
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
