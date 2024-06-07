import './App.css';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import SectionD from './components/SectionD';
import SectionE from './components/SectionE';
import SectionF from './components/SectionF';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
