import Image from 'next/image';

import { Box, MoveUp, SocialIcons } from '@/components';

import * as S from './styles';

const HeroBoxWrapper = () => {
  return (
    <S.HeroBoxWrapperContent>
      <Box
        splitChildren="React"
        area="react"
        borderbat="top"
        borderlar="left"
        icon={
          <MoveUp data-moveup="into">
            <Image
              src="images/svg/icons/react_icon.svg"
              alt="React logo"
              width={24}
              height={24}
              priority
            />
          </MoveUp>
        }
      >
        <MoveUp data-moveup="into">React</MoveUp>
      </Box>

      <Box
        splitChildren="Next"
        area="next"
        borderbat="top"
        borderlar="left"
        icon={
          <MoveUp data-moveup="into">
            <Image
              src="images/svg/icons/next_icon.svg"
              alt="Next logo"
              width={24}
              height={24}
              priority
            />
          </MoveUp>
        }
      >
        <MoveUp data-moveup="into">Next</MoveUp>
      </Box>

      <Box
        splitChildren="Node"
        area="node"
        borderbat="top"
        borderlar="left"
        icon={
          <MoveUp data-moveup="into">
            <Image
              src="images/svg/icons/node_icon.svg"
              alt="Node logo"
              width={24}
              height={24}
              priority
            />
          </MoveUp>
        }
      >
        <MoveUp data-moveup="into">Node</MoveUp>
      </Box>

      <SocialIcons />
    </S.HeroBoxWrapperContent>
  );
};

export default HeroBoxWrapper;
