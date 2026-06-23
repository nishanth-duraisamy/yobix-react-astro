import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isGlobalLoading } from '../store/loaderStore';

const GlobalLoader = () => {
  const $isGlobalLoading = useStore(isGlobalLoading);

  const [text, setText] = useState(
    `Analyzing cluster nodes & fetching demo slots...`
  );

  if (!$isGlobalLoading) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-[9999]'
      aria-live='polite'
      aria-busy='true'
    >
      <div className='p-4 rounded-2xl bg-secondary border border-white/10 flex items-center justify-center shadow-2xl'>
        <img
          src='/logo.webp'
          alt='Loading...'
          className='h-12 w-12 animate-pulse'
        />
      </div>
      <p className='text-primary font-display font-medium text-lg mt-6 text-center'>{text}</p>
    </div>
  );
};

export default GlobalLoader;
