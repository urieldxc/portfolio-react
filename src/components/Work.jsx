import React, {useState, useEffect} from 'react'
import en from '../languages/en'
import es from '../languages/es'
import FilterTags from './FilterTags'
import WorkCard from './WorkCard'
import {workList, workTags} from '../works'

function Work({lang}) {
    const [filteredWork, setFilteredWork] = useState(workList)
    const handleFilter = (e) =>{
        const filtered = workList.filter(item => item.tags.includes(e))
        e !== "All" ? setFilteredWork(filtered) : setFilteredWork(workList)
    }
    const t = lang === "en" ? en : es
  return (
    <div id='workDiv' className="workDiv">
        <div className='workTitle'>
            <h2 className='workTitle'>{t.workTitle}</h2>
            <p>{t.workDescription}</p>
        </div>
        <div className='filterTagsDiv'>
            {workTags.map((e, index) => <FilterTags key={index} handleFilter={handleFilter} tag={e} />)}
        </div>
        <div className='workGrid'>
            {filteredWork.map( (work, i) => <WorkCard key={i} work={work} lang={lang} />)}
        </div>
    </div>
  )
}

export default Work