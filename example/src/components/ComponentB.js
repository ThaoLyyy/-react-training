import React, { useState } from 'react'
import ComponentC from './ComponentC'

function ComponentB({name}) {

    // const [name, setName] = useState('Lyy')
  return (
    <div>
        <h3>Component B</h3>
        {/* <p>Name is: {name}</p> */}
        <ComponentC name={name}/>
    </div>
  )
}

export default ComponentB