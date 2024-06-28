import React from 'react';
import Button from './Button';

const Newsletter = () => {
  return (
    <div className="py-14 container flex flex-col justify-start items-start gap-4">
      <h4 className="text-3xl font-semibold">Newletter</h4>
      <p>
        Get the latest about SINC Partners, our startup Incubator program,
        Portfolio <br /> company offerings - straight into your inbox.
      </p>
      <form className="border border-white rounded-full w-[30vw] flex justify-end items-center mt-7">
        <input type="email" name="email" id="" hidden />
        <Button text="Subscribe" textColor="#212121" backgroundColor="#fff" />
      </form>
    </div>
  );
};

export default Newsletter;
