import { useReducer } from "react"

interface State {
    count: number
    error: string | null
}

interface Action { 
    type: 'increment' | 'decrement'
}

function reducer(state:State,action:Action) {
    const {type} = action;

    switch(type) {
        case 'increment': {
            const newCount = state.count + 1
            const hasError = newCount > 5
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Cannot exceed 5' : null}
            }
        case 'decrement':{
            const newCount = state.count - 1
            const hasError = newCount < 0;
            return {
                ...state,
                count: hasError ? state.count : newCount,
                error: hasError ? 'Cannot be less than 0' : null}
            }
        default:
            return state
    }
}

const UseReducerDemo = () => {
    const [state,dispatch] = useReducer(reducer,{count:0,error:null})

  return (
    <div>
        <div>Count: {state.count}</div>
        {state.error && <div>{state.error}</div>}
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default UseReducerDemo