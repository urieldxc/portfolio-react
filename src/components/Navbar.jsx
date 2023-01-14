import React from 'react'
import en from '../languages/en'
import es from '../languages/es'

function Navbar({lang, setLang}) {

    const changeLang = (lang) => {
        setLang(lang)
    }
    const t = lang === "en" ? en : es
  return (
    <>
    <header>
        <div className='navbar'>
            <a href='/' className='logo'>ST</a>
            <div className='navLinks'>
                <ul>
                    <li> <a href='#work'>{t.work}</a></li>
                    <li>{t.contact}</li>
                    <li>{t.resumee}</li>
                </ul>
            </div>

            <div className='navLang'>
                <button onClick={() => changeLang("en") } className='buttonEN'>EN</button>
                 | 
                 <button onClick={() => changeLang("es") } className='buttonES'>ES</button>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar