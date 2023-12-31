import React from 'react';
import { useState } from 'react';
import reviews from './data';

const Reviewer = () => {
  const [index, setIndex] = useState(0);

  const plus = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
    // console.log(index);
  };
  const minus = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else setIndex(reviews.length - 1);
  };

  const random = () => {
    setIndex((e) => Math.ceil(Math.random() * reviews.length - 1));
  };
  const { id, name, job, image, text } = reviews[index];
  return (
    <div className='card  w-80 bg-base-100 shadow-xl'>
      <figure className='h-64'>
        <img src={image} alt={name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title '>{name}</h2>
        <div className='badge badge-secondary'> {job} </div>

        <p> {text} </p>
        <div className=' mt-8 card-actions justify-center gap-6'>
          <button onClick={minus} className='badge badge-outline px-6 py-2'>
            {' '}
            -{' '}
          </button>

          <button onClick={plus} className='badge badge-outline px-6 py-2 '>
            {' '}
            +{' '}
          </button>
          <button onClick={random} className='badge badge-outline px-6 py-2 '>
            rendom review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviewer;
