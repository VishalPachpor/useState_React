import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const incrValue = () => {
    setCount(count + 1);
  }

  const decrValue = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div>
       <h1>useState hook in React </h1>
        <h2>Counter Value :- {count}</h2>
        <button onClick={incrValue}> Increase Value</button>
        <button onClick={decrValue}> Decrease Value </button>

      </div>
      
    </>
  )
}

export default App
