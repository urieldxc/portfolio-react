// import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Work from './components/Work';



function App() {
  const [lang, setLang] = useState("es");
  return (
    <div className="App">
      <Navbar lang={lang} setLang={setLang}/>
      <div className='main-container'>
        <Hero lang={lang} />
        <Work lang={lang}/>
      </div>

    </div>
  );
}

export default App;
