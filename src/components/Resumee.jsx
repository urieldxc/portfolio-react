import React from 'react'
import en from '../languages/en'
import es from '../languages/es'

const Resumee = ({lang}) => {

  const t = lang === "en" ? en : es

  return (
    <div className='resumeeDiv'>
      <h2> {t.resumeeTitle}</h2>
      <p> {t.resumeeText}</p>
      <button className='hover-scale'>{t.resumeeButton}</button>
    </div>
  )
}

export default Resumee