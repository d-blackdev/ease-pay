import * as React from 'react';

import FaqSection from '@/lib/FaqSection/FaqSection';
import HeroSection from '@/lib/heroSection/HeroSection';

import Layout from '@/components/layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FaqSection />
    </Layout>
  );
}
