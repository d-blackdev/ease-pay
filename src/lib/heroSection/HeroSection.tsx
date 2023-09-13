import React from 'react';

import HeroInput from '@/lib/heroSection/HeroInput';
import { HeroContainer } from '@/lib/heroSection/styled';

const HeroSection = () => {
  return (
    <HeroContainer className='relative flex-col items-center  justify-center border-b-0 bg-[#04010E] px-20 pt-32'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-white lg:w-[90%] lg:text-[60px] lg:leading-[60px] xl:w-[60%] xl:text-[72px] xl:leading-[86px]'>
          Open Payments at the Speed of Light
        </h1>
        <h6 className='hero__section_sub_title'>
          Unlock Groundbreaking New Payment Experiences
        </h6>
        <HeroInput />
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
