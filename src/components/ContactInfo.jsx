import React from 'react'
import Contact from './Contact'
import Resumee from './Resumee'

const ContactInfo = ({lang}) => {
  return (
    <div className='contactInfo'>
        <Contact lang={lang}/>
        <Resumee lang={lang}/>
    </div>
  )
}

export default ContactInfo