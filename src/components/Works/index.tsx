import { Flex, Technology, Text } from '@/components';

import * as S from './styles';
import Link from 'next/link';

const Works = () => {
  return (
    <S.WorksContent>
      <S.FirstColumn>
        <Text as="h3" size="4.8rem" color="heading">
          Projetos
        </Text>
      </S.FirstColumn>

      <S.LastColumn direction="column">
        <S.WorkInfoContent>
          <Link href="https://www.dfsilva.dev/">
            <S.WorkInfo>
              <Flex justify="center" direction="column" gap="1.6rem">
                <Text color="white" size="4.8rem">
                  01
                </Text>

                <Text as="h4" color="white" size="4.8rem">
                  Nome do Projeto
                </Text>

                <Flex gap="1rem">
                  <Technology label="React" />
                  <Technology label="Typescript" />
                </Flex>

                <Text as="p" color="white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, odio necessitatibus ipsum hic atque rerum. Dignissimos,
                  inventore, aliquam earum libero veritatis assumenda explicabo
                  ad accusamus labore iusto, ipsa temporibus cupiditate?
                </Text>
              </Flex>
            </S.WorkInfo>
          </Link>

          <S.WorkCapa>right</S.WorkCapa>
        </S.WorkInfoContent>

        <S.WorkInfoContent>
          <Link href="https://www.dfsilva.dev/">
            <S.WorkInfo>
              <Flex justify="center" direction="column" gap="1.6rem">
                <Text color="white" size="4.8rem">
                  02
                </Text>

                <Text as="h4" color="white" size="4.8rem">
                  Nome do Projeto
                </Text>

                <Flex gap="1rem">
                  <Technology label="React" /> <Technology label="Typescript" />
                </Flex>

                <Text as="p" color="white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, odio necessitatibus ipsum hic atque rerum. Dignissimos,
                  inventore, aliquam earum libero veritatis assumenda explicabo
                  ad accusamus labore iusto, ipsa temporibus cupiditate?
                </Text>
              </Flex>
            </S.WorkInfo>
          </Link>

          <S.WorkCapa>right</S.WorkCapa>
        </S.WorkInfoContent>
      </S.LastColumn>
    </S.WorksContent>
  );
};

export default Works;
