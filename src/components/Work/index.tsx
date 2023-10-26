import { ArrowRight } from 'phosphor-react';

import { Flex, Technology, Text } from '@/components';

import * as S from './styles';
import Link from 'next/link';

const Work = () => {
  return (
    <S.WorkContent>
      <S.WorkCapa>
        <Flex
          align="center"
          justify="center"
          style={{
            color: 'white',
            width: '100%',
            height: '100%'
          }}
        >
          capa
        </Flex>
      </S.WorkCapa>

      <S.WorkInfo>
        <Link href="/" className="view-all-content">
          <Flex
            direction="column"
            justify="center"
            gap="3rem"
            style={{
              height: '100%'
            }}
          >
            <Text
              as="h3"
              size="2.4rem"
              weight={500}
              color="white"
            >{`{01}`}</Text>

            <Text as="h1" size="4.8rem" weight={500} color="white">
              Project title
            </Text>

            <Flex gap="1rem" align="center" justify="center" wrap="wrap">
              <Technology label="React" />
              <Technology label="Next" />
              <Technology label="Styled Components" />
            </Flex>

            <Text as="p" color="white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus accusantium
            </Text>

            <Flex align="center" justify="center" gap="0.8rem">
              <Text color="white" size="1.4rem">
                Saiba mais
              </Text>
              <ArrowRight size={16} color="white" />
            </Flex>
          </Flex>
        </Link>
      </S.WorkInfo>
    </S.WorkContent>
  );
};

export default Work;
