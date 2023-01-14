import React from 'react'
import WorkTag from './WorkTag'

const WorkCard = ({lang, work}) => {
console.log(lang)
  return (
    <div className='workCard'>
        <img src={work.image} />

        <h4>{work.title}</h4>
        <div className='workTagsDiv'>
            {work.tags && <WorkTag tags={work.tags}/>}

        </div>
        <div className='cardDescription'>
            <p>{lang === "en" ? work.descriptionEN : work.descriptionES}</p>
        </div>

        <div className='workButtons'>
            <button><iconify-icon icon="ic:outline-remove-red-eye" width="22" height="22"></iconify-icon>Preview</button>
            <button><iconify-icon icon="iconoir:github" width="20" height="20"></iconify-icon>Github</button>
        </div>
    </div>
  )
}

export default WorkCard