import React from 'react';

const Button = ({ backgroundColor, textColor, text, onClick, border }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-5 rounded-full text-sm font-bold ${border}`}
      style={{ backgroundColor, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Button;
