import Image from 'next/image';
import React from 'react';

import SingleFaq from '@/lib/FaqSection/SingleFaq';
import { FaqSectionContainer } from '@/lib/FaqSection/styled';

import { HeaderButton } from '@/components/layout/styled';

import { faqsData } from '@/utils/data';

const FaqSection = () => {
  return (
    <FaqSectionContainer className=' w-full flex-1 bg-[#04010E] px-20 pb-40'>
      <div className='absolute right-0 lg:left-[50px] lg:top-[30%] xl:left-[200px] xl:top-[40%]'>
        <div className='relative sm:mt-24 sm:h-[30rem] sm:w-[100%] lg:mt-32 lg:h-[40rem] xl:h-[60rem] xl:w-[90%]'>
          <Image src='/images/heroImage.png' alt='hero-image' fill={true} />
        </div>
      </div>
      <div className='w-full lg:pt-[50%] xl:pt-[85%]'>
        <h6 className=' text-5xl font-bold text-white'>FAQs</h6>
        <p className='w-[50%] pt-10 text-lg font-normal text-white'>
          Are you looking for a reliable payment processor to help you expand
          your online business? Look no further, Zenithpay is here to help you
          access a larger market with ease!
        </p>
        {/* FAQS */}
        <div className='mb-20 mt-14 w-full'>
          {faqsData.map((item, index) => (
            <SingleFaq key={index} {...item} />
          ))}
        </div>
        <h6 className='text-3xl font-bold text-white'>
          Still have a question?
        </h6>
        <p className='mb-5 pt-5 text-sm font-normal text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <HeaderButton>Contact us</HeaderButton>
      </div>
    </FaqSectionContainer>
  );
};

export default FaqSection;
