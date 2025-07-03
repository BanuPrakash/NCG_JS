import React from 'react'

export default function Filter({filterEvt}) {
  return (
    <div>
        <input type='text' placeholder='search by name' onChange={(event) => filterEvt(event.target.value)}/>
    </div>
  )
}
