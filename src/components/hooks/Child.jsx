import React from 'react'

const Child = ({setColor}) => {
  return (
      <div>
        <input onChange={(e) => setColor(e.target.value) }/>
    </div>
  )
}

export default Child