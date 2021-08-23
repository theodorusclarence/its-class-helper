import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

export default function NextImage(props: ImageProps) {
  const [status, setStatus] = React.useState('loading');

  return (
    <figure>
      <Image
        onLoadingComplete={() => setStatus('finish')}
        className={clsx('bg-gray-600', props.className, {
          'animate-pulse': status === 'loading',
        })}
        alt={props.alt}
        {...props}
      />
    </figure>
  );
}
