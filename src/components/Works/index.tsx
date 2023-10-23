import { Text } from '@/components';

import * as S from './styles';

const Works = () => {
  return (
    <S.WorksContent>
      <S.FirstColumn>
        <Text as="h3" size="4.8rem" color="heading">
          Projetos
        </Text>
      </S.FirstColumn>
      <S.LastColumn direction="column">
        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'sticky',
            top: 0,
            background: '#F0F'
          }}
        >
          One
        </div>

        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'sticky',
            top: 0,
            background: '#0FF'
          }}
        >
          Two
        </div>

        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'sticky',
            top: 0,
            background: '#89F'
          }}
        >
          Three
        </div>
      </S.LastColumn>
    </S.WorksContent>
  );
};

export default Works;
