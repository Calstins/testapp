import Image from 'next/image';

const data = [
  {
    header: 'Platforms',
    linkText: [
      { text: 'kofoundme', url: '#' },
      { text: 'InResidency', url: '#' },
      { text: 'Service Market', url: '#' },
      { text: 'Founders School', url: '#' },
      { text: 'Metty', url: '#' },
      { text: 'Grantty', url: '#' },
      { text: 'Boldtell', url: '#' },
    ],
  },
  {
    header: 'Initiatives',
    linkText: [
      { text: 'Jabi Plains', url: '#' },
      { text: 'Local Pricing Initiative', url: '#' },
      { text: 'Scholarship Program', url: '#' },
      { text: 'SSMN Pricing', url: '#' },
      { text: 'University STEM  ', url: '#' },
      { text: 'University InResidency ', url: '#' },
      {
        text: '<span class="flex justify-center items-end gap-2">1M Nigeria <img src="/nigerianflag.png" height="12px" width="17px" /> Products</span>',
        url: '#',
      },
      {
        text: 'Founders Festival ',
      },
    ],
  },
  {
    header: 'About Us',
    linkText: [
      { text: 'Who We Are', url: '#' },
      { text: 'Our People', url: '#' },
      { text: 'Scholarship Program', url: '#' },
      { text: 'Concept Innovations', url: '#' },
      { text: 'Our Process  ', url: '#' },
      { text: 'Investors Network ', url: '#' },
      {
        text: 'CSR & Events',
        url: '#',
      },
      {
        text: 'Career',
        url: '#',
      },
      {
        text: 'Contact',
      },
    ],
  },
  {
    header: 'More',
    linkText: [
      { text: 'Services', url: '#' },
      { text: 'Equity Jobs', url: '#' },
      { text: 'EIR Program', url: '#' },
      { text: 'Offers', url: '#' },
      { text: 'Innovation News', url: '#' },
      { text: 'IFAQ ', url: '#' },
      {
        text: 'Blog & Resources',
        url: '#',
      },
      {
        text: 'Press',
        url: '#',
      },
    ],
  },
];

const MidFooter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
      <div className="col-span-1 flex flex-col justify-between gap-4 border-b  border-t pl-24 border-gray-500 pt-16 pb-4">
        <Image src="/brand-images/whitelogo.png" width={120} height={80} />
        <p className="text-xs">
          SINC Partners is a service incubation company connecting experts in
          product development and growth marketing willing to offer their
          services to amazing startups in exchange for minute equity (usually
          0.5% to 2%)
        </p>
      </div>
      <div className="col-span-2 border-b  border-t pl-16 border-gray-500 pt-16 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="col-span-2 flex justify-around">
            <div className="col-span-2">
              <h4 className="font-bold mb-7">{data[0].header}</h4>
              <ul className="flex flex-col justify-between h-48">
                {data[0].linkText.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="font-bold mb-7">{data[1].header}</h4>
              <ul className="flex flex-col justify-between h-48">
                {data[1].linkText.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      dangerouslySetInnerHTML={{ __html: link.text }}
                    ></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-2 flex justify-around ">
            <div className="col-span-2">
              <h4 className="font-bold mb-7">{data[2].header}</h4>
              <ul className="flex flex-col justify-between h-48">
                {data[2].linkText.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="font-bold mb-7">{data[3].header}</h4>
              <ul className="flex flex-col justify-between h-48">
                {data[3].linkText.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 border-b  border-t border-l px-4 border-gray-500 pt-16 pb-4">
        <div className="col-span-2">
          <h4 className="font-bold mb-7">Location</h4>
          <ul className="flex flex-col gap-2 mb-5">
            <li>
              <a href="">Abuja, Nigeria</a>
            </li>
            <li>
              <a href="">Lagos, Nigeria</a>
            </li>
            <li>
              <a href="">Philadelphia, USA</a>
            </li>
          </ul>
          <div className="flex justify-between">
            <div className="flex flex-col justify-end">
              <Image src="/business2.png" height={80} width={170} />
              <p className="mt-2">Trusted Business</p>
            </div>
            <div className="flex flex-col justify-end items-center cursor-pointer">
              <Image src="/whatsapp2.png" height={40} width={40} />
              <p className="mt-2">Chat with Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidFooter;
