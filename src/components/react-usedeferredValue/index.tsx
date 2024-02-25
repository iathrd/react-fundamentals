import { useState,useDeferredValue } from "react"
import SlowList from "./SlowList"

const UseDifferedValueDemo = () => {
    const [query, setQuery] = useState('')

    const defferedQuery = useDeferredValue(query)

  return (
    <div>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
        <SlowList text={defferedQuery} />
    </div>
  )
}

export default UseDifferedValueDemo