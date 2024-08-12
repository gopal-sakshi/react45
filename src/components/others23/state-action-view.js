import { useState } from 'react'

export default function Counter() {

    /* State: a counter value ***************************************************************/
    const [counter, setCounter] = useState(0)


    /* Action: code that causes an update to the state ****************************************/
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
    }


    /* View: the UI definition          *******************************************************/
    return (
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )
}

/*
    scenario = multiple components that need to share and use the same state
    plus, those components are located in different parts of the application. 
    Sometimes this can be solved by "lifting state up" to parent components, but that doesn't always help.

    
*/