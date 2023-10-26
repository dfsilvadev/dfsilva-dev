import { Text } from '@/components';

import * as S from './styles';

const Works = () => {
  return (
    <S.WorksContent>
      <S.FirstColumn>
        <Text as="h3" size="4.8rem" color="heading">
          Projetos em
          <Text as="span" size="4.8rem" color="gray200">
            Destaque
          </Text>
        </Text>
      </S.FirstColumn>

      <S.LastColumn direction="column">
        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'sticky',
            top: 0,
            background: '#524bf2'
          }}
        ></div>
        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'sticky',
            top: 0,
            background: '#e00167'
          }}
        ></div>
        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'sticky',
            top: 0,
            background: '#23292e'
          }}
        ></div>
      </S.LastColumn>
    </S.WorksContent>
  );
};

export default Works;
