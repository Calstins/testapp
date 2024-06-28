import Image from 'next/image';
import React from 'react';
import HeaderText from './sub-section/HeaderText';
import Button from './sub-section/Button';

const Feature = () => {
  return (
    <div className="py-14">
      <h2 className="font-semibold text-center py-8 text-xl">As Feature in</h2>
      <div className="grid grid-cols-5">
        <div className="bg-white col-span-1 -ml-12 mr-6 p-6 py-8 flex flex-col justify-between">
          <div>
            <Image src="/brand-images/punch.png" width={72} height={30} />
          </div>
          <h6 className="font-medium text-sm">
            SINC Partners invests over 200 million naira in 5 startups
          </h6>
          <p className="text-xs mb-7">
            SINC Partners invests over 200 million naira in 5 startups. SINC
            Partners invests over 200 million naira in 5 startups SINC Partners
            invests over 200 million naira in ....
          </p>
          <h6 className="uppercase">REPORTED BY:</h6>
          <p>Rema Viel</p>
        </div>
        <div className="col-span-2 ">
          <img src="/frame9.png" className="w-full h-full" />
        </div>
        <div className="bg-white col-span-1 text-xs p-6 py-8 flex flex-col justify-between">
          <div>
            <Image src="/brand-images/brand3.png" width={72} height={30} />
          </div>
          <h6 className="font-medium text-sm">
            SINC Partners invests over 200 million naira in 5 startups
          </h6>
          <p className="text-xs mb-7">
            SINC Partners invests over 200 million naira in 5 startups. SINC
            Partners invests over 200 million naira in 5 startups SINC Partners
            invests over 200 million naira in ....
          </p>
          <h6 className="uppercase">REPORTED BY:</h6>
          <p>Rema Viel</p>
        </div>
        <div className="col-span-1 ml-6">
          <img src="/frame10.png" className="w-full h-full" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <HeaderText header="Let's build companies that help everyone succeed" />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button
          text="SINC With Us"
          textColor="#303030"
          border="border-2 border-[#303030]"
        />
        <Button
          backgroundColor="#303030"
          text="Apply to SIP 1.0"
          textColor="#fff"
        />
      </div>
    </div>
  );
};

export default Feature;
