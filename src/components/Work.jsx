import React from 'react'
import en from '../languages/en'
import es from '../languages/es'
import FilterTags from './FilterTags'
import WorkCard from './WorkCard'
import {workList} from '../works'

function Work({lang}) {
    const t = lang === "en" ? en : es
  return (
    <div id='workDiv' className="workDiv">
        <div className='workTitle'>
            <h2 className='workTitle'>{t.workTitle}</h2>
            <p>{t.workDescription}</p>
        </div>
        <div className='filterTagsDiv'>
            <FilterTags />
        </div>
        <div className='workGrid'>
            {workList.map( work => <WorkCard work={work} lang={lang} />)}
        </div>
    </div>
  )
}

export default Work