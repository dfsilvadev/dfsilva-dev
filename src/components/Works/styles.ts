'use client';

import styled, { css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

export const WorksContent = styled.div`
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

  h3 {
    position: sticky;
    top: 6rem;
  }

  @media (min-width: 992px) {
    padding: 6rem;
  }
`;

export const LastColumn = styled(FlexComponent)`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray[100]};

    a {
      display: inline-block;
      width: 100%;
    }

    strong {
      color: ${theme.colors.primary.main};
    }

    @media (min-width: 992px) {
      border-top: 1px solid transparent;
    }
  `}
`;

export const WorkInfoContent = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'capa'
    'info';

  @media (min-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 'info capa';
  }
`;

export const WorkInfo = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.text.heading};
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    grid-area: info;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 992px) {
      padding: 6rem;
    }
  `}
`;

export const WorkCapa = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    grid-area: capa;
  `}
`;
