import React from 'react';
import HeaderText from './sub-section/HeaderText';

const Innovation = () => {
  const data = [
    {
      cardHeader: 'Service Incubator',
      cardText:
        'A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP',
    },
    {
      cardHeader: 'Virtualting',
      cardText:
        'A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource',
    },
    {
      cardHeader: 'Diiming',
      cardText:
        'A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ',
    },
  ];
  return (
    <div className="container  flex flex-col items-center">
      <HeaderText
        header="Our Concept Innovations"
        text="We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;"
      />
      <div className="flex justify-between items-start gap-11 text-center h-full">
        {data.map((datum, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 flex-1 flex flex-col justify-start min-h-[250px]"
          >
            <h2 className="font-bold text-primary text-center">
              {datum.cardHeader}
            </h2>
            <p className="mt-6 flex-grow">{datum.cardText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Innovation;
