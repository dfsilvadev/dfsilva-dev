'use client';

import { AboutMe, Hero, Works } from '@/components';

export default function Home() {
  return (
    <main>
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
