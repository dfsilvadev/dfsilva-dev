import Link from 'next/link';
import { PaperPlaneTilt } from 'phosphor-react';

import { Avatar, Box, Flex, Status, Text } from '@/components/';

import { SOCIAL_URL } from '@/utils/common/constant';

import * as S from './styles';

const AboutMe = () => {
  return (
    <S.AboutMeContent>
      <S.FirstColumn>
        <Text as="h3" size="4.8rem" color="heading">
          Sobre mim
        </Text>
      </S.FirstColumn>

      <S.LastColumn>
        <S.AboutMeInfo gap="4.5rem" direction="column">
          <Flex gap="4.5rem" align="center" justify="center">
            <Avatar />

            <Flex gap="0.8rem" direction="column">
              <Text as="h1" size="4.8rem" color="heading">
                Daniel F. Silva
              </Text>

              <Flex gap="1rem" align="center" justify="center">
                <Status />

                <Text as="span" size="1.2rem" color="gray200" weight={500}>
                  De São Paulo, SP - BR
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap="2rem" direction="column">
            <Text as="p">
              Olá, meu nome é Daniel Silva e moro em São Paulo - SP. Meu
              trabalho gira em torno da criação de experiências interativas
              únicas com tecnologia baseada em navegador. Atualmente desenvolvo
              em <strong>React / Next.</strong>
            </Text>

            <Text as="p">
              Adoro escrever código, mas também tenho experiência em design UX.
              Costumo lidar com projetos desde a idealização e arquitetura até a
              implementação e testes.
            </Text>

            <Text as="p">
              Desenvolver tornou-se um hobby favorito e atualmente pratico esse
              hobby no <strong>Grupo Boticário</strong>.
            </Text>

            <Text as="p">
              Obrigado por ler um pouco sobre mim. Fico feliz em conversar e
              trocar experiências.
            </Text>
          </Flex>
        </S.AboutMeInfo>

        <Link href={SOCIAL_URL.EMAIL} target="_blank" rel="noopener noreferrer">
          <Box
            splitChildren="Vamos Conversar?"
            verticalAlign="center"
            borderbat="top"
            borderlar="none"
            icon={<PaperPlaneTilt size={24} />}
          >
            Vamos Conversar?
          </Box>
        </Link>
      </S.LastColumn>
    </S.AboutMeContent>
  );
};

export default AboutMe;
