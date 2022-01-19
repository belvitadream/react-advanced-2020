import React, { useState, useEffect } from 'react'
// cleanup function

// by default runs after every re-render
// useEffect is used to control side effects. Every time component is re-rendered
// we cannot place hooks (useEffect or useState) inside the "if statement"
// but conditions can be place within useEffect

// second parameter is 'list of dependencies'
// useEffect runs when the second argument is updated. so when we update/change 'value' second argument.
// if we don't have any dependencies, if we have [empty array], this use effect will run only on initial render

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call use effect')
    if (value >= 1) {
      document.title = `New messages(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log(
      'hellloooooo world\u{1F339}\u{1F339}\u{1F339}\u{1F339}\u{1F339}'
    )
  }, [])

  console.log('render component')

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
