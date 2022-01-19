import React from 'react'
import { useState } from 'react'

const ErrorExample = () => {
  const [text, setText] = useState('Hello people <3')

  const handleClick = () => {
    if (text === 'Hello people <3') {
      setText('Nice picture 333')
    } else {
      setText('Hello people <3')
    }
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change text
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
