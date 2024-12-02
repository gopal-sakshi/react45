Reducers - Idea is
- Move from setting state to dispatching actions.
- Write a reducer function.
- Use the reducer from your component.
=============================================================================
we have 3 event listeners
- handleAddTask
- handleChangeTask
- handleDeleteTask
=============================================================================
1) Move from setting state to dispatch actions

const [tasks, setTasks] = useState({})
- instead of setting tasks by calling setTasks()
- we dispatch an action

2) write reducer function
- it takes 2 args ---> state, action
- we write the state setting logic here instead of event handler
- 

3) Use reducer from the component
- useReducer hook --> similar to useState hook
=============================================================================

Component logic can be easier to read when you separate concerns like this. 
Now the <event handlers> only specify what happened by <dispatching actions>
and the <reducer function> determines how the <state updates> in response to them.

=============================================================================


reducers must be pure
— same inputs always result in the same output. 
— They should not 
    send HTTP requests, 
    schedule timeouts, 
    perform any side effects (operations that impact things outside the component)
— 