'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './sections/sub-section/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'About',
    'SIP',
    'Studio',
    'SEEQ',
    'Platforms',
    'Initiatives',
    'More',
  ];

  const buttonData = [
    {
      backgroundColor: '#20888F',
      textColor: '#FFFFFF',
      text: 'SINC With Us',
    },
    {
      backgroundColor: '#303030',
      textColor: '#FFF',
      text: 'Apply to SIP 1.0',
    },
  ];

  return (
    <nav className="text-primary w-full container">
      <div className="py-3">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                height={100}
                width={120}
                src="/logo.png"
                alt="Logo"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-4 ml-10 font-semibold">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary hover:text-secondary"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xl">
            {buttonData.map((button, index) => (
              <Button
                key={index}
                backgroundColor={button.backgroundColor}
                textColor={button.textColor}
                text={button.text}
              />
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" text-primary "
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-primary hover:text-secondary px-3 py-2 rounded-md text-base font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="px-2 pb-3 space-y-1 sm:px-3">
          <div className="hidden lg:flex items-center space-x-4">
            {buttonData.map((button, index) => (
              <Button
                key={index}
                backgroundColor={button.backgroundColor}
                textColor={button.textColor}
                text={button.text}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
