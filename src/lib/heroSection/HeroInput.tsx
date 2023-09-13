import React from 'react';

import { HeroInputStyled } from '@/lib/heroSection/styled';

const HeroInput = () => {
  return (
    <HeroInputStyled className='mt-10 flex flex-row items-center'>
      <div className='input__container flex items-center'>
        <input
          className='hero__input placeholder:text-[ color: #505050] block  placeholder:text-base'
          placeholder='Enter your mail'
        />
      </div>

      <button className='hero__button  ml-5 flex  h-full items-center  justify-center px-6 text-base'>
        Join our waitlist
      </button>
    </HeroInputStyled>
  );
};

export default HeroInput;
