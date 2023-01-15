import React from 'react'
import { workTags } from '../works'

function FilterTags({handleFilter}) {
    return (
        <>
            {workTags.map((tag) =>
                <div className='filterTag'>
                    <button onClick={()=> handleFilter(tag)}>{tag}</button>
                </div>
            )}
        </>


    )
}

export default FilterTags