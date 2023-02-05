import React from 'react'

const GoTop = ({showGoTop, scrollUp}) => {

  return (
    <>
      <div className={showGoTop} onClick={scrollUp}>
        <button className="goTop">
          <iconify-icon icon="material-symbols:arrow-upward" width="40" height="40"></iconify-icon>
        </button>
      </div>
    </>
  )
}

export default GoTop