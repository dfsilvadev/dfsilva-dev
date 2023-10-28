import { Text, Work } from '@/components';

import * as S from './styles';

const Works = () => {
  return (
    <S.WorksContent>
      <S.FirstColumn>
        <Text as="h3" size="4.8rem" color="heading" texttransform="uppercase">
          Projetos em
          <Text as="span" size="4.8rem" color="gray200">
            Destaque.
          </Text>
        </Text>
      </S.FirstColumn>

      <S.LastColumn direction="column">
        <Work />
        <Work />
      </S.LastColumn>
    </S.WorksContent>
  );
};

export default Works;
