import React from 'react';
import Links from './sub-section/Links';
import Button from './sub-section/Button';

const Sinc = () => {
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
    <div className="container flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center justify-start text-center w-[800px]">
        <h2 className="text-primary text-4xl leading-tight font-semibold mt-14">
          SINC Investors Network
        </h2>
        <p className="my-4">
          Our deals are structured not just to take in investments but to
          onboard owners passionate about our solutions. Our portfolio companies
          are valued at $50k at start, with these low valuation, you are
          guaranteed at least 2x-5x, usually been the first to invest.
        </p>
        <p className="mb-10">
          <strong>Disclaimer:</strong> These deal flows is a statement of our
          projections and may differ from stage to stage and from venture to
          venture and the guarantee is for deal 1, usually the first to invest
        </p>
      </div>
      <div>
        <p className="text-xl mb-3">
          <strong>Micro Angel Investors & Service incubators</strong> (Invest
          from $500 & above)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 border-t border-b border-r border-gray-400">
            <h3 className="text-xl font-medium mb-3">Deal 1</h3>
            <p>
              ✓ Idea Stage:
              <strong> $5k for 5% Equity</strong> <br /> ✓ Expected Revenue at
              This Stage This Stage: <strong> $0/mth</strong> <br />✓ Duration
              of Raise:
              <strong> 1mth</strong> <br />✓ Who Can Invest:
              <strong> People with Domain Expertise and Advisors</strong>
            </p>
          </div>
          <div className="p-4 border-t border-b border-r border-gray-400">
            <h3 className="text-xl font-medium mb-3">Deal 2</h3>
            <p>
              ✓ Build Stage:
              <strong> $25k worth of service for 10% Equity</strong> <br /> ✓
              Expected Revenue at This Stage: <strong> $100+/mth</strong> <br />
              ✓ Duration of Raise:
              <strong> 1-3mths</strong> <br />✓ Who Can Invest:
              <strong> Developers, Engineers, Growth Marketers</strong>
            </p>
          </div>
          <div className="p-4 border-t border-b border-r border-gray-400">
            <h3 className="text-xl font-medium mb-3"> Deal 3</h3>
            <p>
              ✓ Validation Stage
              <strong> $50k for 5% Equity</strong> <br /> ✓ Expected Revenue at
              This Stage: <strong> $1k+/mth</strong> <br />✓ Duration of Raise:
              <strong> 3-6mths</strong> <br />✓ Who Can Invest:
              <strong> Everyone</strong>
            </p>
          </div>
          <div className="p-4 border-t border-b  border-gray-400">
            <h3 className="text-xl font-medium mb-3">Deal 4</h3>
            <p>
              ✓ Traction Stage:
              <strong> $125k worth of service for 5% Equity</strong> <br /> ✓
              Expected Revenue at This Stage: <strong> $5k+/mth</strong> <br />✓
              Duration of Raise:
              <strong> 6-12mths</strong> <br />✓ Who Can Invest:
              <strong> Media, Influencers, Celebrity, Platform Owners </strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl mb-3">
          <strong>Angel Investors & Venture Capital</strong> (Invest from $50k
          and above)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 border-t border-b border-r border-gray-400">
            <h3 className="text-xl font-medium mb-3">Deal 5</h3>
            <p>
              ✓ Pre-seed Stage::
              <strong> 1.5M for 10% Equity</strong> <br /> ✓ Expected Revenue at
              This Stage This Stage: <strong> $50k+/mth</strong> <br />✓
              Duration of Raise:
              <strong> 6-18mths</strong> <br />✓ Who Can Invest:
              <strong> Angel Investors, VCs, PE, Institutions </strong>
            </p>
          </div>
          <div className="p-4 border-t border-b border-r border-gray-400">
            <h3 className="text-xl font-medium mb-3">Deal 6</h3>
            <p>
              ✓ Seed Stage:
              <strong> $7.5M for 20% Equity</strong> <br /> ✓ Expected Revenue
              at This Stage: <strong> $250k+/mth</strong> <br />✓ Duration of
              Raise:
              <strong> 12-24mths</strong> <br />✓ Who Can Invest:
              <strong> VCs, PE, Institutions</strong>
            </p>
          </div>
          <div className="p-4 border-t border-b border-r border-gray-400">
            <h3 className="text-xl font-medium mb-3"> Deal 7</h3>
            <p>
              ✓ IPO Stage
              <strong> $1.5B for 20% Equity</strong> <br /> ✓ Expected Revenue
              at This Stage: <strong> $1M+/mth</strong> <br />✓ Duration of
              Raise:
              <strong> 18-36mths</strong> <br />✓ Who Can Invest:
              <strong> The Public</strong>
            </p>
          </div>
          <div className="border-t border-b  border-gray-400">
            <div className="bg-[#101010] m-4 p-7 flex flex-col justify-between gap-3">
              <p className="text-white text-xl tracking-tighter leading-1 mb-2">
                Work with Service Incubators (SINC) to expedite your time to
                market
              </p>
              <div>
                <Button
                  backgroundColor="#303030"
                  textColor="#fff"
                  text="Join SINC Network"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinc;
