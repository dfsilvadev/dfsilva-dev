import Image from 'next/image';

import { Flex } from '@/components';

import * as S from './styles';

const Main = () => (
  <S.MainContent>
    <h1>Boilerplate</h1>
    <Flex>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </Flex>
  </S.MainContent>
);

export default Main;
