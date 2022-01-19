import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

// when we have 2-3 levels deep.

// step 1. Create Context
const PersonContext = React.createContext()
// you get two components: Provider (works as distributer), Consumer (as a getter)

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  // Step 2. Wrap the top whole component into Provider. this Provider needs to wrap the whole component tree
  // we pass this function as part of the object. We can pass like function, but better inside the object {}
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / UseContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const mainData = useContext(PersonContext)

  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  // step 3. Extract data from useContext
  // we destructure our function from the value argument of the Context

  const { removePerson } = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
