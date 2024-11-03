import React from 'react'
import { social } from '../data/dummyData'

export const Footer = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <footer >
        <div className='flex justify-center'>
          <div className='flex justify-between mb-2 w-[80%]'>
            {social.map((val) => (
                <i className="text-primaryColor">{val.icon}</i>
            ))}
          </div>
        </div>
        <p className='text-greyDark'>All Rights Reserved 2024</p>
      </footer>
    </div>
  );
}
