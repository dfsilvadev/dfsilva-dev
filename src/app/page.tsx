'use client';

import { AboutMe, Cursor, Hero, Works } from '@/components';

export default function Home() {
  return (
    <main>
      <Cursor />
      <Hero />
      <AboutMe />
      <Works />

      <div
        style={{
          width: '100%',
          height: '100vh'
        }}
      ></div>
    </main>
  );
}
