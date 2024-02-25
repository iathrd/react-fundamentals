import React, { useEffect } from 'react'

const UseEffectDemo = () => {
    const [count, setCount] = React.useState(0)

    useEffect(() => {
      console.log('The count is:', count);

      return () => {
        console.log('I am being cleaned up!');
      }

    }, [count])

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default UseEffectDemo