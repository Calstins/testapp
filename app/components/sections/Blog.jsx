import React from 'react';
import HeaderText from './sub-section/HeaderText';
import Links from './sub-section/Links';
import Image from 'next/image';

const Blog = () => {
  const data = [
    {
      mainImage: '/frame1.png',
      cardHeader: 'Top Ten Most Powerful Startup',
      cardText:
        'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup',
      cardImage: '/frame4.png',
    },
    {
      mainImage: '/frame2.png',
      cardHeader: 'Top Ten Most Powerful Startup',
      cardText:
        'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup',
      cardImage: '/frame7.png',
    },
    {
      mainImage: '/frame2.png',
      cardHeader: 'Top Ten Most Powerful Startup',
      cardText:
        'Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup',
      cardImage: '/frame3.png',
    },
  ];

  return (
    <div className="container flex flex-col items-center gap-6">
      <HeaderText header="Blogs & Resources" />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {data.map((datum, index) => (
          <div key={index} className="text-sm">
            <div>
              <Image
                src={datum.mainImage}
                width={378}
                height={235}
                priority
                alt="main"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {data.map((datum, index) => (
          <div key={index} className="text-sm">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3  flex flex-col justify-between">
                <h4 className="font-medium mb-3">{datum.cardHeader}</h4>
                <p>{datum.cardText}</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <Image
                  src={datum.cardImage}
                  width={85}
                  height={79}
                  priority
                  alt="main"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Links text="See More Blogs & Resources" url="#" />
      </div>
    </div>
  );
};

export default Blog;
