import { Split } from '@/components';

import * as S from './styles';

import { ITechnologyProps } from './types';

const Technology = ({ label }: ITechnologyProps) => {
  return (
    <S.TechnologyContent>
      <Split
        splitChildren={label}
        fontSize="1.2rem"
        contentsize="1.8rem"
        color="gray200"
        weight={500}
      >
        {label}
      </Split>
    </S.TechnologyContent>
  );
};

export default Technology;
