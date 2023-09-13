import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const SingleFooter = ({
  data,
  title,
}: {
  data: { link: string; title: string }[];
  title: string;
}) => {
  return (
    <div>
      <h6 className='mb-5 text-base font-semibold text-white'>{title}</h6>
      <ul className='flex-col'>
        {data.map(({ link, title }) => (
          <li key={`${link}`} className='flex flex-row items-center pb-2'>
            <UnstyledLink
              href={link}
              className='text-sm font-normal text-white transition-all duration-500 ease-in-out hover:text-[#310E93]'
            >
              {title}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleFooter;
