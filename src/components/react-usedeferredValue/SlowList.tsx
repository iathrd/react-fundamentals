import { memo } from "react"

const SlowList = memo(({text}:{text:string}) => {
    const items = []

    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />)
    }

    return <ul>{items}</ul>; // Replace null with your desired component implementation
})

const SlowItem = ({text}:{text:string}) => {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }

    return <li>TEXT: {text}</li>
}

export default SlowList