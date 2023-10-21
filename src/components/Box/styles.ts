'use client';

import styled, { DefaultTheme, css } from 'styled-components';

import { FlexComponent } from '@/components/Flex';

import { SplitChildren, SplitWrapper } from '@/components/Split/styles';

import { BorderType } from './types';

export const BoxContent = styled(FlexComponent)<BorderType>`
  ${({ theme, borderbat, borderlar, padding }) => css`
    width: 100%;
    height: 100%;
    padding: ${padding};
    color: ${theme.colors.gray[200]};

    svg {
      font-size: inherit;
    }

    ${!!borderbat && borderTopAndBottomVariant[borderbat](theme)}
    ${!!borderlar && borderLeftAndRightVariant[borderlar](theme)}
  `}
`;

export const BoxSplitWrapper = styled(SplitWrapper)``;

export const BoxSplitChildren = styled(SplitChildren)``;

const borderTopAndBottomVariant = {
  top: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
  `,
  bottom: (theme: DefaultTheme) => css`
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `,
  tpb: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.gray[100]};
    border-bottom: 1px solid ${theme.colors.gray[100]};
  `,
  none: () => css`
    border: none;
  `
};

const borderLeftAndRightVariant = {
  left: (theme: DefaultTheme) => css`
    border-left: 1px solid ${theme.colors.gray[100]};
  `,
  right: (theme: DefaultTheme) => css`
    border-right: 1px solid ${theme.colors.gray[100]};
  `,
  lfr: (theme: DefaultTheme) => css`
    border-left: 1px solid ${theme.colors.gray[100]};
    border-right: 1px solid ${theme.colors.gray[100]};
  `,
  none: () => css`
    border: none;
  `
};
