import React, { useState } from 'react';
import { data } from './data'




function FindArray() {
  const [name, setName] = useState(data)
  console.log(name);

  const removeItem = (id) => {
    const newName = name.filter((x) => x.id !== id)
    console.log(id);
    setName(newName);

  }

  return (
    <div>
      {name.map((item, i) => {
        const { name, id } = item
        return (

          <ul key={i}>
            <li>{name}
              <button onClick={() => removeItem(id)}>X</button>
            </li>
          </ul>
        )
      })}

    </div>
  )
}

export default FindArray
