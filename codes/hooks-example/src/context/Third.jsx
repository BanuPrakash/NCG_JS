import React, { useContext } from 'react'
import { PersonContext } from './Base'

export default function Third() {
  let { name, age } = useContext(PersonContext);

  return (
    <div>
      Third Component <br />
      Name : {name} <br />
      Age:  {age} <br />
    </div>
  )
}
