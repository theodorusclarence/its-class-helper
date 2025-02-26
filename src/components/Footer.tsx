import * as React from 'react';
import CustomLink from './CustomLink';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer className='absolute w-full text-center text-gray-500 bottom-2'>
      © {new Date().getFullYear()} By{' '}
      <CustomLink
        href='https://theodorusclarence.com?ref=class.thcl.dev'
        onClick={() => {
          trackEvent(`Click Clarence's Footer`);
        }}
      >
        Theodorus Clarence
      </CustomLink>
      {' & '}
      <CustomLink href='https://robbypambudi.com'>Robby Pambudi</CustomLink>
    </footer>
  );
}
