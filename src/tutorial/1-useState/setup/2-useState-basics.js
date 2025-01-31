import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateBasics = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    setPeople(people.filter((p) => p.id !== id))
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id)
              }}
            >
              remove
            </button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
    </>
  )
}

export default UseStateBasics
