import React from 'react'
import en from '../languages/en'
import es from '../languages/es'

const Contact = ({ lang }) => {
    const t = lang === "en" ? en : es
    return (
        <div className='contactDiv'>
            <div id="contact" className='contact'>
                <div className='contactText'>
                    <h2>{t.contactTitle}</h2>
                    <p>{t.contactText}</p>
                    <button><a href='mailto:sergiota.cs@gmail.com'> {t.contactButton}</a></button>
                </div>

                <div className='socialIcons'>
                    <iconify-icon icon="jam:twitter" width="50px"></iconify-icon>
                    <iconify-icon icon="jam:linkedin-square" width="50px"></iconify-icon>
                    <iconify-icon icon="jam:github" width="50px"></iconify-icon>
                </div>
            </div>
           
        </div>
    )
}

export default Contact