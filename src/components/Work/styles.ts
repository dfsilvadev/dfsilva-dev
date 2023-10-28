'use client';

import styled, { css } from 'styled-components';

export const WorkContent = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'capa'
    'info';
  align-items: stretch;
  justify-items: stretch;

  @media (min-width: 992px) {
    height: 90vh;
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 'capa info';
  }
`;

export const WorkCapa = styled.div`
  grid-area: 'capa';
  background: #ff0074;
`;

export const WorkInfo = styled.div`
  ${({ theme }) => css`
    grid-area: 'info';
    background: ${theme.colors.text.heading};
    padding: 4.5rem 1.5rem;

    display: flex;
    align-items: stretch;
    justify-content: center;

    @media (min-width: 992px) {
      padding: 4.5rem;
    }
  `}
`;
