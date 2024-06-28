import Newsletter from './sections/sub-section/Newsletter';
import MidFooter from './sections/sub-section/MidFooter';
import BaseFooter from './sections/sub-section/BaseFooter';

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white text-xs">
      <Newsletter />
      <MidFooter />
      <BaseFooter />
    </div>
  );
};

export default Footer;
