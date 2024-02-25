import { useState, forwardRef, useImperativeHandle } from "react"

export type CounterRef = {
    reset: () => void
}

const Counter = forwardRef<CounterRef>((_, ref) => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    const reset = () => setCount(0)

    useImperativeHandle(ref, () => ({ reset }))

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
})

export default Counter
