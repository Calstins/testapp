import React from 'react';
import HeaderText from './sub-section/HeaderText';
import Links from './sub-section/Links';
import Image from 'next/image';
import Button from './sub-section/Button';

const Equity = () => {
  const data = [
    {
      logo: '/brand-images/brand21.png',
      cardHeader: 'Chief Executive Officer',
      industry: 'On-demand print',
    },
    {
      logo: '/brand-images/brand27.png',
      cardHeader: 'UX Strategist',
      industry: 'E-commerce',
    },
    {
      logo: '/brand-images/brand22.png',
      cardHeader: 'CTO & Head of innovations',
      industry: 'Fintech',
    },
    {
      logo: '/brand-images/brand29.png',
      cardHeader: 'Backend Developer',
      industry: 'Transportation',
    },
  ];

  return (
    <div className="container flex flex-col items-center">
      <HeaderText
        header="Equity jobs"
        text="See companies and startups offering equity or a mix of cash and equity for very important position in their company"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((datum, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 flex flex-col gap-4 justify-between"
          >
            <div className="w-[120px] h-[60px]">
              <Image
                src={datum.logo}
                priority
                width={120}
                height={60}
                objectFit="cover"
              />
            </div>
            <p className="text-sm">
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <h3 className="font-medium">{datum.cardHeader}</h3>
            <div className="flex flex-col">
              <span className="flex justify-between items-center uppercase text-gray-400">
                <p>Location</p>
                <p>Industry</p>
              </span>
              <span className="flex justify-between items-center capitalize text-primary mb-4">
                <p>Abuja, Nigeria</p>
                <p>{datum.industry}</p>
              </span>
              <span className="flex justify-between items-center uppercase text-gray-400">
                <p>Equity</p>
                <p>Stipend</p>
              </span>
              <span className="flex justify-between items-center capitalize text-primary mb-4">
                <p>1.2%</p>
                <p>NGN 200,000/mth </p>
              </span>
              <span className="flex justify-between items-center uppercase text-gray-400">
                <p>Deadline</p>
                <p>Role</p>
              </span>
              <span className="flex justify-between items-center capitalize text-primary mb-4">
                <p>24th, January 2024</p>
                <p>Full-time</p>
              </span>
            </div>
            <div className="">
              <Button
                backgroundColor="#303030"
                textColor="#fff"
                text="View Details"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Links text="See More Equity Jobs" url="#" />
      </div>
    </div>
  );
};

export default Equity;
