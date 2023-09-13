import Image from 'next/image';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import SingleFooter from '@/lib/footerSection/SingleFooter';

import Input from '@/components/input/Input';
import UnstyledLink from '@/components/links/UnstyledLink';

import { companyLinks, resourcesLinks, zenithLinks } from '@/utils/data';

const Footer = () => {
  return (
    <footer className=' w-full flex-1 px-20 pb-20'>
      <section className='grid w-full gap-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 '>
        {/* Logo */}
        <div>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            <Image src='/svg/logo.svg' alt='logo' width={50} height={40} />
          </UnstyledLink>
        </div>
        {/* URL one */}
        <SingleFooter data={zenithLinks} title='Use Zenith' />
        <SingleFooter data={companyLinks} title='Company' />
        <SingleFooter data={resourcesLinks} title='Resources' />
        {/* Footer input */}
        <div className='col-span-2'>
          <h6 className='mb-5 text-base font-semibold text-white'>Subscribe</h6>
          <p className=' text-sm text-white'>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className='mt-4 flex  w-full items-center space-x-5'>
            <Input className='w-[70%]' />
            <button className='flex h-[48px] w-[20%] items-center justify-center border border-white text-sm text-white'>
              Subscribe
            </button>
          </div>
          <p className='pt-2 text-xs font-light text-white'>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
      </section>
      <div className='mb-6 mt-14 h-[1px] w-full bg-gray-600' />
      <div className='item-center flex w-full justify-between'>
        <div className='flex items-center'>
          <p className='text-xs font-light text-white'>
            © 2023 Relume. All rights reserved.
          </p>
          <UnstyledLink
            href='/'
            className='pl-4 text-xs font-light text-white underline hover:text-gray-600'
          >
            <span className='text-xs font-light text-white underline'>
              Privacy Policy
            </span>
          </UnstyledLink>
          <UnstyledLink
            href='/'
            className='pl-4 text-xs font-light text-white underline hover:text-gray-600'
          >
            <span className='text-xs font-light text-white underline'>
              Terms of Service
            </span>
          </UnstyledLink>
          <UnstyledLink
            href='/'
            className='pl-4 text-xs font-light text-white underline hover:text-gray-600'
          >
            <span className='text-xs font-light text-white underline'>
              Cookie Settings
            </span>
          </UnstyledLink>
        </div>
        {/* Icons */}
        <div className='flex items-center'>
          <FaFacebook className='ml-2 cursor-pointer text-lg text-white transition-all duration-500 ease-in-out hover:text-[#310E93]' />
          <FaTwitter className='ml-2 cursor-pointer text-lg text-white transition-all duration-500 ease-in-out hover:text-[#310E93]' />
          <FaInstagram className='ml-2 cursor-pointer text-lg text-white transition-all duration-500 ease-in-out hover:text-[#310E93]' />
          <FaLinkedin className='ml-2 cursor-pointer text-lg text-white transition-all duration-500 ease-in-out hover:text-[#310E93]' />
          <FaYoutube className='ml-2 cursor-pointer text-lg text-white transition-all duration-500 ease-in-out hover:text-[#310E93]' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
