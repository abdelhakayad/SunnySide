import React, { useState } from 'react';
import { close, hamburger, logo } from '../assets/assets';
import { navList } from '../constants/NavList';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className='mx-auto font-barlow px-8 lg:py-5 sm:pt-8 xs:pt-6 mb-20 flex items-center justify-between'>
      <article>
        <a href="#"><img src={logo} alt="Logo" /></a>
      </article>

      <article>
        <ul className='lg:flex items-center gap-6 sm:hidden xs:hidden'>
          {navList.map((nav) => (
            <li key={nav.id}>
              <a className='capitalize' href={`#${nav.id}`}>{nav.name}</a>
            </li>
          ))}
          <button type="button" className='rounded-[2rem] transition-all duration-[250ms] ease-in bg-white hover:bg-opacity-25 hover:text-white text-black text-xs uppercase font-fraunces font-bold px-4 py-3'>
            <a href="#Contact">Contact</a>
          </button>
        </ul>
      </article>

      <article className='lg:hidden sm:block'>
        <img className='cursor-pointer object-contain' src={menu ? close : hamburger} onClick={() => setMenu((prev) => !prev)} alt="Menu" />
      </article>

      {menu &&(
        <article className='lg:hidden bg-white sm:shadow-md xs:shadow-sm z-50 flex-col fixed inset-x-8 top-[50%] -translate-y-[50%] items-center sm:py-24 xs:py-20'>
          <ul className='lg:hidden items-center  gap-8 flex flex-col'>
            {navList.map((nav) => (
              <li key={nav.id}>
                <a className='text-VDGBlue capitalize sm:text-xl xs:text-2xl font-semibold ' href={`#${nav.id}`}>{nav.name}</a>
              </li>
            ))}
            <button type="button" className='rounded-[2rem] bg-Yellow text-black sm:text-xl xs:text-2xl uppercase font-fraunces font-bold px-5 py-3'>
              <a href="#Contact">Contact</a>
            </button>
          </ul>
        </article>
      )}
    </nav>
  );
}
