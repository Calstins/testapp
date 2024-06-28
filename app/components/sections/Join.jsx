'use client';

import React, { useState } from 'react';
import HeaderText from './sub-section/HeaderText';
import Links from './sub-section/Links';
import Image from 'next/image';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const Join = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      icon: '/icon1.png',
      cardHeader: 'Application and Selection',
      cardText:
        'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.',
    },
    {
      icon: '/icon2.png',
      cardHeader: 'Alignment Meeting and Proposal Submission',
      cardText:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
    },
    {
      icon: '/icon3.png',
      cardHeader: 'Negotiation and Agreement',
      cardText:
        "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
    },
    {
      icon: '/icon4.png',
      cardHeader: 'Onboarding and Integration',
      cardText:
        "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full overflow-hidden">
      <HeaderText
        header="How It Works"
        text="Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."
      />
      <div className="pl-24 relative overflow-hidden">
        <div className="flex w-full ">
          {data.map((datum, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex flex-col justify-between min-h-[300px] w-[calc(100%/1)] transition-transform duration-500"
              style={{
                transform: `translateX(${(index - currentSlide) * 20}%)`,
              }}
            >
              <Image
                src={datum.icon}
                priority
                height={60}
                width={60}
                objectFit="contain"
                alt={`pics-${index + 1}`}
                className="bg-[#4E4E4E] p-3 rounded-full mb-4"
              />
              <h2 className="font-bold text-primary">{datum.cardHeader}</h2>
              <p className="mt-6 flex-grow">{datum.cardText}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Links text="Build your dream" url="#" />
      </div>
      <div className="inset-0 flex justify-center items-center gap-16 mt-5">
        <button
          onClick={handlePrev}
          className="p-4 border border-1 border-black rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-4 border border-1 border-black  rounded-full hover:bg-gray-200 transition-all duration-300"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Join;
