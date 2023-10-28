'use client';

import { ArrowCircleRight } from 'phosphor-react';

import { AboutMe, Box, Cursor, Flex, Hero, Works } from '@/components';

export default function Home() {
  return (
    <main>
      <Cursor />
      <Hero />
      <AboutMe />
      <Works />
      <Flex
        style={{
          height: '20rem'
        }}
      >
        <Box
          splitChildren="Projetos."
          borderbat="bottom"
          verticalAlign="center"
          icon={<ArrowCircleRight size={24} />}
        >
          Ver mais
        </Box>
      </Flex>

      <div
        style={{
          width: '100%',
          height: '100vh'
        }}
      ></div>
    </main>
  );
}
