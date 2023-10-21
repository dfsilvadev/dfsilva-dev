'use client';

import styled from 'styled-components';

export const SocialIconsContentContent = styled.div`
  display: none;

  @media (min-width: 992px) {
    width: 100%;
    display: initial;
    grid-area: social-icons;

    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'in lk gh tw';
  }
`;
