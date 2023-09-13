import React from 'react';

import { MainInput } from '@/components/input/styled';

const Input = ({ className }: { className?: string | undefined }) => {
  return (
    <MainInput className={` flex w-full items-center  ${className}`}>
      <input
        className='main__input placeholder:text-[ color: #505050] block w-full  placeholder:text-base'
        placeholder='Enter your mail'
      />
    </MainInput>
  );
};

export default Input;
