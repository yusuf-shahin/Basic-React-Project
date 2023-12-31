import React, { useState } from 'react';
import menu from './data';
import Categories from './Categories';
import Header from './Header';
const allItems = ['all', ...new Set(menu.map((e) => e.category))];

const Menu = () => {
  const [allCategory, setAllCategory] = useState(menu);
  const [menuItems, setMenuItems] = useState(allItems);

  const catchItem = (category) => {
    if (category === 'all') {
      setAllCategory(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setAllCategory(newItems);
  };

  return (
    <main className='body'>
      <Header menuItems={menuItems} catchItem={catchItem} />
      <Categories category={allCategory} />
    </main>
  );
};

export default Menu;
