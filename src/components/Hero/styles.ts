'use client';

import styled, { css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

export const HeroContent = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    border-bottom: 1px solid ${theme.colors.gray[100]};
    overflow: hidden;

    display: grid;
    grid-template-rows: repeat(2, 1fr);

    @media (min-width: 992px) {
      height: 90vh;

      grid-template-columns: 1.5fr 1fr;
      grid-template-rows: auto;
    }
  `}
`;

export const FirstColumn = styled(FlexComponent)`
  padding: 3.2rem 1.5rem;

  @media (min-width: 992px) {
    padding: 6rem;
  }
`;

export const HeroMessage = styled.h1`
  ${({ theme }) => css`
    font-size: 10vw;
    line-height: 90%;

    strong {
      background: ${theme.colors.gradient.base};
      background: ${theme.colors.gradient.linear};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (min-width: 992px) {
      font-size: 6vw;
    }
  `}
`;

export const HeroName = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1;
    font-weight: 500;
    text-transform: uppercase;
    text-align: left;
  `}
`;
