// import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { useState, useRef, useEffect } from 'react';
import Work from './components/Work';
import GoTop from './components/GoTop';
import Contact from './components/Contact';
import Resumee from './components/Resumee';
import ContactInfo from './components/ContactInfo';



function App() {
  const [lang, setLang] = useState("es");
  const refScrollUp = useRef();

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 400) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 400) {
      return setshowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <div className="App" ref={refScrollUp}>
      <Navbar lang={lang} setLang={setLang} />
      <div className='main-container'>
        <Hero lang={lang} />
        <Work lang={lang} />
        <ContactInfo lang={lang}/>
      </div>

      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
    </div>
  );
}

export default App;
