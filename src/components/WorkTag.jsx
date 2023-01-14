import React from 'react'

function WorkTag({ tags }) {
    return (
        <>
            {tags.map((tag) =>
                <div className='workTag'>
                    <button>{tag}</button>
                </div>
            )}
        </>


    )
}

export default WorkTag