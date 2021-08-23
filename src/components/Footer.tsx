import * as React from 'react';
import CustomLink from './CustomLink';

export default function Footer() {
  return (
    <footer className='absolute w-full text-center text-gray-500 bottom-2'>
      © {new Date().getFullYear()} By{' '}
      <CustomLink href='https://theodorusclarence.com?ref=tsnextstarter'>
        Theodorus Clarence
      </CustomLink>
    </footer>
  );
}
