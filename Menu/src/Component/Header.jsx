import React from 'react';

const Header = ({ menuItems, catchItem }) => {
  return (
    <div className='btn-container'>
      {menuItems.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => catchItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Header;
