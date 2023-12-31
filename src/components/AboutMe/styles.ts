'use client';

import styled, { css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

export const AboutMeContent = styled.section`
  ${({ theme }) => css`
    width: 100vw;
    height: table;
    border-bottom: 1px solid ${theme.colors.gray[100]};

    display: grid;
    grid-template-rows: auto 2fr;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto;
    }
  `}
`;

export const FirstColumn = styled(FlexComponent)`
  padding: 6rem 1.5rem;

  @media (min-width: 992px) {
    padding: 6rem;
  }
`;

export const LastColumn = styled(FlexComponent)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray[100]};

    strong {
      color: ${theme.colors.primary.main};
      text-decoration: underline;
    }

    @media (min-width: 992px) {
      border-top: 1px solid transparent;
      border-left: 1px solid ${theme.colors.gray[100]};
    }
  `}
`;

export const AboutMeInfo = styled(FlexComponent)`
  padding: 3.2rem 1.5rem;

  @media (min-width: 992px) {
    padding: 6rem;
  }
`;
