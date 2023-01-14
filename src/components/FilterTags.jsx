import React from 'react'
import { workTags } from '../works'

function FilterTags() {
    return (
        <>
            {workTags.map((tag) =>
                <div className='filterTag'>
                    <button>{tag}</button>
                </div>
            )}
        </>


    )
}

export default FilterTags