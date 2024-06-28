'use client';

import Image from 'next/image';
import Button from './sub-section/Button';
import FadedCard from './sub-section/FadedCard';

import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Hero() {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className} border border-1 bg-black"></span>`;
        },
      }}
      autoplay={{
        display: 2500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      className="swiper-container-1"
    >
      <SwiperSlide>
        <div className="flex w-full h-[500px]">
          <div className="flex flex-col w-1/2 justify-center gap-6 container">
            <h1 className="text-3xl font-bold">
              SINC Partners is a service incubation company
            </h1>
            <p className="text-xl">
              Connecting experts in product development and growth marketing
              willing to offer their services to amazing startups in exchange
              for minute equity (usually 0.5% to 2%).
            </p>
            <div>
              <Button
                backgroundColor="#303030"
                textColor="#fff"
                text="SINC With Us"
              />
            </div>
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/image.png"
              alt="Logo"
              priority
              layout="fill"
              objectFit="cover"
              className="w-full h-full hidden md:block"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-full h-[500px] relative">
          <div className="flex flex-col w-1/2 justify-center gap-6 container">
            <h1 className="text-3xl font-bold">
              Come with an idea, leave with a company
            </h1>
            <p className="text-xl">
              You, alongside seasoned service partners and investors, expedite
              the growth and market entry of your startup.
            </p>
            <div>
              <Button
                backgroundColor="#303030"
                textColor="#fff"
                text="SINC With Us"
              />
            </div>
          </div>
          <div className="w-1/2 h-full bg-background2 hidden md:block">
            <Image
              src="/image3.png"
              alt="hero-pics2"
              className="absolute hidden md:block top-0 right-[40%]"
              height={240}
              width={238}
              priority
            />

            <Image
              src="/image4.png"
              alt="hero-pics3"
              className="absolute top-[10%] right-1 hidden md:block"
              height={366}
              width={356}
              priority
            />
            <Image
              src="/image8.png"
              alt="hero-pics4"
              className="absolute bottom-0 right-0 hidden md:block"
              height={200}
              width={198}
              priority
            />
            <Image
              src="/image9.png"
              alt="hero-pics4"
              className="absolute bottom-4 right-[30%] hidden md:block"
              height={200}
              width={194}
              priority
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-full h-[500px] relative">
          <div className="flex flex-col w-1/2 justify-center gap-6 container">
            <h1 className="text-3xl font-bold ">
              We are big on these 3 things;
            </h1>
            <div className="text-xl flex flex-col">
              <span>✓ Service Incubation & Ecosystem Advocacy</span>
              <span>✓ Building SAAS & Marketing Tech Platforms</span>
              <span>✓ Institutional Innovations</span>
            </div>
            <div>
              <Button
                backgroundColor="#303030"
                textColor="#fff"
                text="SINC With Us"
              />
            </div>
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src="/image2.png"
              alt="Logo"
              priority
              layout="fill"
              objectFit="cover"
              className="w-full h-full hidden md:block"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FadedCard />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
