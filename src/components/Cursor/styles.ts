'use client';

import styled, { css } from 'styled-components';

export const CursorContent = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    z-index: ${theme.layers.alwaysOnTop};
    mix-blend-mode: difference;
    padding: 0.5rem;
    background: transparent;
    border: 2px solid ${theme.colors.white};
    transform: rotate(-45deg);

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
