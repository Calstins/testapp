import React from 'react';
import HeaderText from './sub-section/HeaderText';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Links from './sub-section/Links';

const data = [
  { brandUrl: '/brand-images/brand1.png' },
  { brandUrl: '/brand-images/brand2.png' },
  { brandUrl: '/brand-images/brand3.png' },
  { brandUrl: '/brand-images/brand4.png' },
  { brandUrl: '/brand-images/brand5.png' },
  { brandUrl: '/brand-images/brand6.png' },
  { brandUrl: '/brand-images/brand7.png' },
  { brandUrl: '/brand-images/brand8.png' },
  { brandUrl: '/brand-images/brand9.png' },
  { brandUrl: '/brand-images/brand10.png' },
  { brandUrl: '/brand-images/brand11.png' },
  { brandUrl: '/brand-images/brand12.png' },
  { brandUrl: '/brand-images/brand13.png' },
  { brandUrl: '/brand-images/brand14.png' },
  { brandUrl: '/brand-images/brand15.png' },
  { brandUrl: '/brand-images/brand16.png' },
  { brandUrl: '/brand-images/brand17.png' },
  { brandUrl: '/brand-images/brand18.png' },
  { brandUrl: '/brand-images/brand19.png' },
  { brandUrl: '/brand-images/brand20.png' },
  { brandUrl: '/brand-images/brand21.png' },
  { brandUrl: '/brand-images/brand22.png' },
  { brandUrl: '/brand-images/brand23.png' },
  { brandUrl: '/brand-images/brand24.png' },
  { brandUrl: '/brand-images/brand25.png' },
  { brandUrl: '/brand-images/brand26.png' },
  { brandUrl: '/brand-images/brand27.png' },
  { brandUrl: '/brand-images/brand28.png' },
  { brandUrl: '/brand-images/brand29.png' },
  { brandUrl: '/brand-images/brand30.png' },
  { brandUrl: '/brand-images/brand31.png' },
  { brandUrl: '/brand-images/brand32.png' },
  { brandUrl: '/brand-images/brand33.png' },
  { brandUrl: '/brand-images/brand34.png' },
  { brandUrl: '/brand-images/brand35.png' },
  { brandUrl: '/brand-images/brand36.png' },
  { brandUrl: '/brand-images/brand37.png' },
  { brandUrl: '/brand-images/brand38.png' },
  { brandUrl: '/brand-images/brand39.png' },
  { brandUrl: '/brand-images/brand40.png' },
  { brandUrl: '/brand-images/brand41.png' },
  { brandUrl: '/brand-images/brand42.png' },
  { brandUrl: '/brand-images/brand43.png' },
  { brandUrl: '/brand-images/brand44.png' },
  { brandUrl: '/brand-images/brand45.png' },
  { brandUrl: '/brand-images/brand46.png' },
  { brandUrl: '/brand-images/brand47.png' },
  { brandUrl: '/brand-images/brand48.png' },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center container gap-5">
      <HeaderText header="Network of builders helping startup scale" />
      <div className="grid grid-cols-8 grid-rows-6 gap-4">
        {data.map((datum, index) => (
          <div
            key={index}
            className="rounded-md h-[60px] w-[120px] bg-white bg-center bg-no-repeat bg-contain p-3 px-3 py-4"
            style={{ backgroundImage: `url(${datum.brandUrl})` }}
          ></div>
        ))}
      </div>
      <Links text="View All Companies" url="#" />
    </div>
  );
};

export default Portfolio;
