'use client';

import styled, { css } from 'styled-components';

export const TechnologyContent = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`;
