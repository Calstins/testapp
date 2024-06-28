import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Links = ({ text, url }) => {
  return (
    <span className="mt-4 flex items-center justify-start group underline capitalize font-bold text-primary">
      <a href={url} className="flex items-center">
        {text}
        <HiArrowNarrowRight className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </span>
  );
};

export default Links;
