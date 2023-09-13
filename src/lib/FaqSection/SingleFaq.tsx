import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { SingleFaqStyled } from '@/lib/FaqSection/styled';

const SingleFaq = ({ text, content }: { text: string; content: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <SingleFaqStyled
      onClick={() => setOpen(!open)}
      className='w-full  cursor-pointer px-4 py-4 transition-all duration-1000 ease-in-out'
    >
      <div className='flex w-full flex-row items-center justify-between  transition-all  duration-1000 ease-in-out'>
        <p className='text-lg text-white'>{text}</p>
        {open ? (
          <FaMinus className='text-base text-white' />
        ) : (
          <FaPlus className='text-base text-white' />
        )}
      </div>
      {open && (
        <p className='pt-5 text-lg text-white transition-all  duration-1000 ease-in-out'>
          {content}
        </p>
      )}
    </SingleFaqStyled>
  );
};

export default SingleFaq;
