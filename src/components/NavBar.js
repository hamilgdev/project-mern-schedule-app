import React from 'react';
import Button from './Button';

const NavBar = () => {
  const handleLogout = () => {
    console.log('here!');
  };

  return (
    <header className='flex items-center justify-between | px-4 min-h-[var(--min-height-navbar)] | bg-slate-800'>
      <span className='font-semibold text-white'>Miltoncodeyt</span>
      <Button type='outline' text='Logout' handle={handleLogout} />
    </header>
  );
};

export default NavBar;
