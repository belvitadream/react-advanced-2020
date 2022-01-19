import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer.js'

// reducer function

// from reducer function we should always return some "state", otherwise Error.
// depending on type, passed to dispatch function, will work the reducer function
// reducer function takes state just before the update. Then it does 'action' function on 'state' and then we return new state.

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      // this is just common to name whatever other arguments we want to add as 'payload'
      // another common practice is to name type as with all uppercase letters
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
