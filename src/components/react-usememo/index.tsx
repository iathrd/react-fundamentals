import { useState,useMemo } from "react"

const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

const MemoDemo = () => {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)

  const selectedItem = useMemo(() =>items.find(item => item.isSelected),[items] )

  return (
    <div className="tutorial">
      <h1>Number of items: {count}</h1>
      <h1>Selected Item : {selectedItem?.id}</h1>
      <button onClick={() => setCount(count+1)} >Incement</button>
    </div>
  )
}

export default MemoDemo