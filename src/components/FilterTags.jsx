import React, {useEffect, useState} from 'react'
import { workTags, numberJS, numberReact, numberAll, numberHtmlCss } from '../works'

function FilterTags({tag, handleFilter}) {
    const [totalNumber, setTotalNumber] = useState(numberAll)
    useEffect(()=>{
        if(tag === "HTML & CSS") setTotalNumber(numberHtmlCss)
        if(tag === "React") setTotalNumber(numberReact)
        if(tag === "JavaScript") setTotalNumber(numberJS)
    }, [])


    return (
        <div className='filterTag'>
            <button className='buttonFilter hover-scale' onClick={() =>handleFilter(tag)}> {tag} ({totalNumber})</button>
        </div>


    )
}

export default FilterTags