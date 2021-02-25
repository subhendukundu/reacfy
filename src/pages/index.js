import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

function CounterButton () {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
          console.log('button clicked')
          setCounter(counter + 1)
        }}
      >
        Counter {counter}
      </button>
    </div>
  )
}

const HocApp = () => (
  <div>
    <Helmet>
      <title>My Cool Site</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <body className="bg-gray-200 w-full h-screen flex items-center justify-center" />
    </Helmet>
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div>
        <h4 className="text-xl text-gray-900 leading-tight">🤠 Hello Dude!</h4>
        <CounterButton />
      </div>
    </div>
  </div>
)

export default HocApp
