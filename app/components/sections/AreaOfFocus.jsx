import React from 'react';
import HeaderText from './sub-section/HeaderText';

const AreaOfFocus = () => {
  const data = [
    { paragraph: 'Business Support & Incubation', bgColor: '#303030' },
    { paragraph: 'On-Demand & As-A-Service', bgColor: '#F47733' },
    { paragraph: 'Marketplace & Crowdsourcing', bgColor: '#FF78BF' },
    { paragraph: 'Aggregation & Shared Economy', bgColor: '#20888F' },
    { paragraph: 'Decentralized Economy & Digital Assets', bgColor: '#FF88C6' },
  ];

  return (
    <div className="container flex flex-col items-center">
      <HeaderText
        text="In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab"
        header="Our Area of Focus"
      />
      <div className="flex">
        {data.map((datum, index) => (
          <div
            key={index}
            style={{ backgroundColor: datum.bgColor }}
            className="p-4 mb-4 flex-1"
          >
            <span className=" font-bold text-white">{`0${index + 1}`}</span>
            <p className="text-white mt-7">{datum.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaOfFocus;
