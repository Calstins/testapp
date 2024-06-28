import React from 'react';
import HeaderText from './sub-section/HeaderText';
import Links from './sub-section/Links';
import Image from 'next/image';

const Services = () => {
  const data = [
    {
      card: [
        {
          cardIcon: '/polygon1.png',
          cardText:
            'Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support',
        },
        {
          cardIcon: '/polygon2.png',
          cardText:
            'If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment',
        },
        {
          cardIcon: '/polygon3.png',
          cardText:
            'Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return ',
        },
      ],
    },
    {
      spanCard: [
        { text: 'Service Incubator Equity' },
        { text: 'SEEQ Maths Equation' },
        { text: 'Value of my Equity Over Time' },
      ],
    },
  ];
  return (
    <div className="container  flex flex-col items-center">
      <HeaderText
        header="Our Service Incubation Model"
        text="The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest."
      />
      <div className="flex flex-col gap-7">
        <div>
          <h2 className="font-semibold text-2xl">Hypothesis</h2>
          <p>
            Just a few reasons we know its time for this model within the
            ecosystem
          </p>
        </div>
        <div className="flex justify-between items-start gap-11 text-center h-full">
          {data[0].card.map((datum, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex-1 flex flex-col justify-start min-h-[250px]"
            >
              <Image
                src={datum.cardIcon}
                priority
                height={40}
                width={40}
                className="text-left"
              />
              <p className="mt-6 flex-grow text-left">{datum.cardText}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="font-semibold text-2xl">Case Study</h2>
          <p>
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
        </div>
        <div className="flex gap-4">
          {data[1].spanCard.map((datum, index) => (
            <span
              key={index}
              className="border-2 bg-white py-2 px-4 rounded-full"
            >
              {datum.text}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Links text="Become A Service Incubator" url="#" />
        </div>
      </div>
    </div>
  );
};

export default Services;
