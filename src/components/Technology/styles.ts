'use client';

import styled, { css } from 'styled-components';

export const TechnologyContent = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray[200]};
    padding: 0.7rem 1.5rem 1rem 1.5rem;

    border-radius: 50px;
  `}
`;
