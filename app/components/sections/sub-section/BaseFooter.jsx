import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { RiYoutubeFill, RiMediumFill } from 'react-icons/ri';

const BaseFooter = () => {
  return (
    <div className="py-9 container">
      <div className="grid grid-col-1 lg:grid-cols-3">
        <p className="col-span-2">
          Guaranteed 2x on your service or cash investment, usually been the
          first to invest. Get in early and SINC your guaranty!
        </p>
        <div className="span-col-1 flex justify-between ">
          <Image src="/gasus.png" height={70} width={200} />
          <p>
            We are a business built on the foundation of Christian values and
            belief
          </p>
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-3 mt-2">
        <p className="span-col-1">
          © 2023 SINC Partners Ltd. All rights reserved
        </p>
        <div className="span-col-1">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
          <a href="#" className="underline">
            Security
          </a>
        </div>
        <div className="span-col-1 flex justify-end gap-4 items-end">
          <FaFacebook className="h-6 w-6" />
          <FaTwitterSquare className="h-6 w-6" />
          <FaInstagramSquare className="h-6 w-6" />
          <RiMediumFill className="h-6 w-6" />
          <RiYoutubeFill className="h-6 w-6" />
          <IoLogoLinkedin className="h-6 w-6" />
          <Image src="/icon.png" height={24} width={24} />
        </div>
      </div>
      <span className="flex justify-center items-end gap-2 mt-2">
        Web in Nigeria{' '}
        <img src="/nigerianflag.png" height="12px" width="17px" />
      </span>
    </div>
  );
};

export default BaseFooter;
