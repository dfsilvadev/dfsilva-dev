import Link from 'next/link';
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react';

import { Box } from '@/components';

import { SOCIAL_URL } from '@/utils/common/constant';

import * as S from './styles';

const SocialIcons = () => {
  return (
    <S.SocialIconsContentContent>
      <Link href={SOCIAL_URL.GITHUB} target="_blank" rel="noopener noreferrer">
        <Box
          splitChildren={<GithubLogo size={24} />}
          contentAlign="center"
          justifySplit="center"
          area="gh"
          borderbat="top"
          borderlar="left"
        >
          <GithubLogo size={24} />
        </Box>
      </Link>

      <Link
        href={SOCIAL_URL.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          splitChildren={<InstagramLogo size={24} />}
          contentAlign="center"
          justifySplit="center"
          area="in"
          borderbat="top"
          borderlar="left"
        >
          <InstagramLogo size={24} />
        </Box>
      </Link>

      <Link
        href={SOCIAL_URL.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          splitChildren={<LinkedinLogo size={24} />}
          contentAlign="center"
          justifySplit="center"
          area="lk"
          borderbat="top"
          borderlar="left"
        >
          <LinkedinLogo size={24} />
        </Box>
      </Link>

      <Link href={SOCIAL_URL.TWITTER} target="_blank" rel="noopener noreferrer">
        <Box
          splitChildren={<TwitterLogo size={24} />}
          contentAlign="center"
          justifySplit="center"
          area="tw"
          borderbat="top"
          borderlar="left"
        >
          <TwitterLogo size={24} />
        </Box>
      </Link>
    </S.SocialIconsContentContent>
  );
};

export default SocialIcons;
