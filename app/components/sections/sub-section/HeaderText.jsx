import React from 'react';

const HeaderText = ({ header, text }) => {
  return (
    <div className="w-[700px] text-center my-16">
      <h1 className="text-primary text-5xl leading-tight font-semibold">
        {header}
      </h1>
      <p className="text-gray-500 mt-4">{text}</p>
    </div>
  );
};

export default HeaderText;
