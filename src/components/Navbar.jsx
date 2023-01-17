import React, { useState } from 'react'
import en from '../languages/en'
import es from '../languages/es'
import { Squeeze as Hamburger } from 'hamburger-react'

function Navbar({ lang, setLang }) {
    const [isOpen, setOpen] = useState(false)

    const changeLang = (lang) => {
        setLang(lang)
    }

    const handleToggle = () => {
        document.querySelector(".menuLinks").classList.toggle("display")
    }
    const t = lang === "en" ? en : es
    return (
        <>
            <header>
                <div className='navbar'>
                    <a href='/' className='logo'>ST</a>
                    <div className='navLinks'>
                        <ul>
                            <li> <a href='#workDiv'>{t.work}</a></li>
                            <li>{t.contact}</li>
                            <li>{t.resumee}</li>
                        </ul>
                    </div>

                    <div className='navLang'>
                        <button onClick={() => changeLang("en")} className='buttonEN'>EN</button>
                        |
                        <button onClick={() => changeLang("es")} className='buttonES'>ES</button>
                    </div>



                    <Hamburger classList="hamburguerIcon" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                        if (toggled) {
                            handleToggle()
                        } else {
                            handleToggle()
                        }
                    }} />
                </div>
            </header>

            <div className='menuLinks display'>
                <ul>
                    <li> <a href='#workDiv'>{t.work}</a></li>
                    <li>{t.contact}</li>
                    <li>{t.resumee}</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar