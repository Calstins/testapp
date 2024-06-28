import React from 'react';
import HeaderText from './sub-section/HeaderText';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Links from './sub-section/Links';

const data = [
  {
    cardHeader: 'Work with Service Incubators to expedite your time-to-market',
    cardText1:
      'Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.',
    cardText2:
      'For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.',
  },
  {
    cardHeader: 'Access funding after your mvp is validated ',
    cardText1:
      'Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.',
    cardText2:
      'Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months ',
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center container">
      <HeaderText header="Network of builders helping startup scale" />
      <div className="flex gap-7">
        {data.map((datum, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white mb-4 rounded-lg p-7"
          >
            <div className="flex flex-col gap-4-">
              <h3 className="font-semibold text-xl">{datum.cardHeader}</h3>
              <p className="text-gray-600">{datum.cardText1}</p>
              <p className="text-gray-600 font-bold">{datum.cardText2}</p>
            </div>
            <Links text="learn more" url="#" className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
