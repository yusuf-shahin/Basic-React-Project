import React from 'react';

const IsLoading = () => {
  return (
    <div className='h-screen w-auto flex justify-center items-center '>
      {' '}
      {/* <p className='text-6xl text-red-700  '> Loading.... </p> */}
      {/* <span className='loading loading-infinity loading-lg'></span> */}
      <span className='loading loading-bars loading-lg'></span>
    </div>
  );
};

export default IsLoading;
