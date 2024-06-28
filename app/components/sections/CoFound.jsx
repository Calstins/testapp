import React from 'react';
import HeaderText from './sub-section/HeaderText';
import Links from './sub-section/Links';

const CoFound = () => {
  const data = [
    {
      color: '#303030',
      cardHeader: 'We Ideate',
      cardText:
        'We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.',
    },
    {
      color: '#F47733',
      cardHeader: 'You Validate',
      cardText:
        'You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ',
    },
    {
      color: '#FF78BF',
      cardHeader: 'You Co-own',
      cardText:
        'After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.',
    },
  ];

  return (
    <div className="container flex flex-col items-center">
      <HeaderText
        header="Co-found With Us"
        text="We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((datum, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 flex flex-col justify-between min-h-[300px]"
          >
            <span
              className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mb-4 p-6"
              style={{ backgroundColor: datum.color }}
            >
              {index + 1}
            </span>
            <h2 className="font-bold text-primary">{datum.cardHeader}</h2>
            <p className="mt-6 flex-grow">{datum.cardText}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Links text="Build your dream" url="#" />
      </div>
    </div>
  );
};

export default CoFound;
