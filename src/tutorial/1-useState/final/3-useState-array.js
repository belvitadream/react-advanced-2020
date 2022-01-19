import React from 'react'
import { data } from '../../../data'
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  // FUNCTIONAL APPROACH. If we need old value of the state. Also with async
  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople
    })
  }

  // value pasted as normal value
  // const removeItem = (id) => {
  //   setPeople(people.filter((p) => p.id !== id))
  // }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
