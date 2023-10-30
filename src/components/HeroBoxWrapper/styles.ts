'use client';

import styled from 'styled-components';

export const HeroBoxWrapperContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'react react react react'
    'next next next next'
    'node node node node';

  @media (min-width: 992px) {
    grid-template-rows: repeat(2, 1fr) 9.2rem;
    grid-template-areas:
      'react react next next'
      'react react node node'
      'social-icons social-icons social-icons social-icons';
  }
`;
