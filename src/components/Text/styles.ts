'use client';

import styled, { DefaultTheme, css } from 'styled-components';

import { TextContentStyleProps } from './types';

export const TextContent = styled.p<TextContentStyleProps>`
  ${({ theme, size, weight, color }) => css`
    font-size: ${size};
    font-weight: ${weight};
    line-height: 1;

    ${!!color && textColorVariant[color](theme)}
  `}
`;

const textColorVariant = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.main};
  `,

  heading: (theme: DefaultTheme) => css`
    color: ${theme.colors.text.heading};
  `,

  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  gray100: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray[100]};
  `,

  gray200: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray[200]};
  `
};
