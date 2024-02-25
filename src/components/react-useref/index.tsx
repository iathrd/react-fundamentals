import { useEffect, useRef } from "react"

const UseRefDemo = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[])

  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Type something.." />
    </div>
  )
}

export default UseRefDemo