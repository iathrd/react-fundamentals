import { useRef } from "react"
import Counter, { CounterRef } from "./Counter"


const UseImperativeHandleDemo = () => {
  const counterRef = useRef<CounterRef>(null)

  return (
    <div>
      <div>
      <Counter ref={counterRef} />
      </div>
      <button onClick={() => counterRef.current?.reset()}>Reset</button>
    </div>
  )
}

export default UseImperativeHandleDemo