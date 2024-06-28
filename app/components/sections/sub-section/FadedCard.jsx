const FadedCard = () => {
  const data = [
    {
      header: 'SIP 1.0',
      text: 'SINC With Us',
    },
    {
      header: '40+',
      text: 'to be incubated',
    },
    {
      header: '$1M+',
      text: 'to be invested',
    },
  ];
  return (
    <div className="hidden md:block">
      {data.map((datum, index) => (
        <div
          className="text-white rounded-full bg-gradient-to-r from-black/50 via-black/70 to-black/20 px-6 py-2 p-3 mb-3 text-center"
          key={index}
        >
          <h1 className="text-xl font-bold">{datum.header}</h1>
          <p className="capitalize text-sm">{datum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FadedCard;
