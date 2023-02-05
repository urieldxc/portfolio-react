import React from 'react'

function WorkTag({ tags }) {
    return (
        <>
            {tags.map((tag, index) =>
                <div key={index} className='workTag'>
                    <button>{tag}</button>
                </div>
            )}
        </>


    )
}

export default WorkTag