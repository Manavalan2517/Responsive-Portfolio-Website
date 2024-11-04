import React from 'react';

export const Heading = ({title}) => {
  return (
    <div className='flex justify-center items-center'>
      <h2 className='heading text-4xl font-semibold mb-[60px] text-left text-primaryColor'>{title}</h2>
    </div>
  )
}
