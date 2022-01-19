import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  console.log('Heheheh suchka-vonuchka')

  return (
    <>
      {/* <p>short circuit</p>
      <h1>1. {firstValue}</h1>
      <h1>2. {secondValue}</h1> */}

      {/* <h1>{text && <h2>poka</h2>}</h1>
      <h1>{!text && <h2>poka</h2>}</h1> */}
      <h1>{text || 'privet'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>eto error.......</p>
      ) : (
        <div>
          <br />
          <h1> no error</h1>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
