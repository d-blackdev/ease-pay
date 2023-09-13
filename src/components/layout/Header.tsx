import Image from 'next/image';
import * as React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { HeaderButton } from '@/components/layout/styled';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Products', dropdown: false },
  { href: '/', label: 'Solutions', dropdown: false },
  { href: '/', label: 'Resources', dropdown: false },
  { href: '/', label: 'Company', dropdown: true },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-transparent'>
      <div className='flex h-[72px] items-center justify-between  px-20'>
        <div className='flex flex-row items-center'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <Image src='/svg/logo.svg' alt='logo' width={50} height={40} />
          </UnstyledLink>
          <nav className='ml-10'>
            <ul className='flex items-center justify-between space-x-6'>
              {links.map(({ href, label, dropdown }) => (
                <li
                  key={`${href}${label}`}
                  className='flex flex-row items-center'
                >
                  <UnstyledLink
                    href={href}
                    className='text-base font-normal text-white hover:text-gray-600'
                  >
                    {label}
                  </UnstyledLink>
                  {dropdown && (
                    <FaChevronDown className='ml-2 text-white' size={16} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <HeaderButton>Contact us</HeaderButton>
      </div>
    </header>
  );
}
