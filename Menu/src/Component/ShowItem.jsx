import React from 'react';

const ShowItem = ({ category, catchItem }) => {
  return (
    <div className='item-info header'>
      <button type='button' className='btn' onClick={() => catchItem(category)}>
        {' '}
        {category}{' '}
      </button>
    </div>
  );
};

export default ShowItem;
