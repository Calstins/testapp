import Navbar from './components/NavBar';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}
