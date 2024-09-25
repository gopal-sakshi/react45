Redux  ---> <state-management-platform-library>
- is a pattern and library for managing & updating global application state
- the UI triggers events called <actions> to describe what happened
- separate update logic called <reducers> updates the state in response. 
- It serves as a centralized store for state 
- Redux helps you manage `global state` - state that is needed across many parts of your application.

<!---------------------------------------------------------------------------->
const [counter23, setCounter23] = useState(0)
- but counter23 is local only to that component
- but when multiple components need to share & utilize the same state
- we can resolve by <lifting state up> to parent components, but the method might not always help.
- REDUX = extracting shared states from the components and putting them outside the component tree at a centralized location. 
- that centralized location == <store>

<uni directional flow> in Redux

UI triggers (button click)
actions ---> reducer ---> corresponding value in store is updated
<!---------------------------------------------------------------------------->


created a new folder - redux23
all redux stuff will be inside this folder
cd redux23 & run the application

==========================================================================

`action` is a plain JavaScript object that has a type field
`action creator` is a function that creates and returns an action object.
`reducer` is a function that receives the <current state> and an <action object> and decides how to update the state
`store` the current Redux application state lives in an object called the store.
    store is created by <passing in a reducer>, and has a method called <getState> that returns the current state value
`dispatch`  only way to update state = <store.dispatch()> and <pass action object>
    dispatching actions is like === "triggering an event"
    Reducers act like event listeners, and when they hear an action they are interested in, they update the state
`selector` are functions that know how to extract specific pieces of information from a store state value
==========================================================================