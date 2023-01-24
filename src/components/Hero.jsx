import React from 'react'
import en from '../languages/en'
import es from '../languages/es'
import portrait from '../img/guy.jpg'
import dotPattern from '../img/dotpattern.png'

function Hero({lang}) {
    const t = lang === "en" ? en : es
  return (
    <div className='hero'> 
        <div className="heroImgDiv">
            <img className='dotPattern' src={dotPattern}></img>
            <img className='portrait' src={portrait}></img>
            <img className='dotPattern2' src={dotPattern}></img>

        </div>

        <div className='heroTextDiv'>
            <p className='heroTitle'>{t.heroTitle} <span className='textDetail'>Junior Front-end Developer</span> </p>
            <p className='heroDescription'>{t.heroDescription}</p>
            <div className="heroButtons">
                <button><a href='#contact'>{t.contactMe} </a></button>
                <button><a href='#workDiv'>{t.checkMyWork} </a></button>
            </div>
        </div>
    </div>
  )
}

export default Hero