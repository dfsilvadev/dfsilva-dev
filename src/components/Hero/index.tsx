import Image from 'next/image';

import { Box, Flex, SocialIcons } from '@/components';

import * as S from './styles';

const Hero = () => {
  return (
    <S.HeroContent>
      <S.FirstColumn align="flex-end">
        <Flex direction="column" gap="4.5rem">
          <S.HeroMessage>
            <Flex direction="column">
              <span>
                <strong>Desenvolver</strong> se
              </span>
              <span>tornou um hobby</span>
              <span>favorito.</span>
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
                <span>Daniel Silva</span>
                <span>Sênior Frontend Developer</span>
              </Flex>
            </S.HeroName>
          </Flex>
        </Flex>
      </S.FirstColumn>
      <S.LastColumn>
        <Box
          splitChildren="React"
          area="react"
          borderbat="top"
          borderlar="left"
          icon={
            <Image
              src="images/svg/icons/react_icon.svg"
              alt="React logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          React
        </Box>

        <Box
          splitChildren="Next"
          area="next"
          borderbat="top"
          borderlar="left"
          icon={
            <Image
              src="images/svg/icons/next_icon.svg"
              alt="Next logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          Next
        </Box>

        <Box
          splitChildren="Node"
          area="node"
          borderbat="top"
          borderlar="left"
          icon={
            <Image
              src="images/svg/icons/node_icon.svg"
              alt="Node logo"
              width={24}
              height={24}
              priority
            />
          }
        >
          Node
        </Box>

        <SocialIcons />
      </S.LastColumn>
    </S.HeroContent>
  );
};

export default Hero;
