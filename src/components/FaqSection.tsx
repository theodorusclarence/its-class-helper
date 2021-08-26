import * as React from 'react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { Disclosure, Transition } from '@headlessui/react';

import NextImage from './NextImage';

export default function FaqSection() {
  return (
    <Disclosure as='div'>
      <Disclosure.Button className='inline-flex items-center gap-2 text-lg font-bold text-gray-300 md:text-xl hover:text-primary-400 focus-visible:text-primary-400'>
        <HiQuestionMarkCircle className='flex-shrink-0' />{' '}
        <span>Not working? Click here</span>
      </Disclosure.Button>

      <Transition
        enter='transition origin-top duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Disclosure.Panel className='mt-4 space-y-4'>
          <div className='space-y-2'>
            <p>Kalo muncul error kaya gini</p>
            <NextImage
              src='/images/error1.png'
              width='410'
              height='74'
              alt='Error: Maaf anda tidak berhak akses'
            />
          </div>
          <div className='space-y-2'>
            <p>
              Pastiin di <b>Step 1</b>, udah masuk sampe <b>SIAKAD</b>, bukan
              sampe dashboard doang
            </p>
            <NextImage
              src='/images/troubleshoot.png'
              width='800'
              height='352'
              alt='Troubleshoot: harus masuk sampe SIAKAD'
            />
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
