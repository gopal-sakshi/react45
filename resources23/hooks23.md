Hooks
- use different React features from your components
<!------------------------------------------------------------------------------------>
`State Hooks` 
- State lets a component remember information like user input.

useState            declares a state variable that you can update directly.
useReducer          declares a state variable with the update logic inside a reducer function.
<!------------------------------------------------------------------------------------>

`Context Hooks`
- lets a component receive information from distant parents without passing it as props

useContext          reads & subscribes to a context.
<!------------------------------------------------------------------------------------>

`Ref Hooks`
- let a component hold some information that isn’t used for rendering

useRef                  declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
useImperativeHandle     lets you customize the ref exposed by your component. This is rarely used.
<!------------------------------------------------------------------------------------>

`Effect Hooks`
- connect to and synchronize with external systems

useEffect           connects a component to an external system.
useLayoutEffect     fires before the browser repaints the screen. You can measure layout here.
useInsertionEffect  fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.
<!------------------------------------------------------------------------------------>

`Performance Hooks`
- To skip calculations and unnecessary re-rendering

useMemo             lets you cache the result of an expensive calculation.
useCallback         lets you cache a function definition before passing it down to an optimized component.
useTransition       lets you mark a state transition as non-blocking and allow other updates to interrupt it.
useDeferredValue    lets you defer updating a non-critical part of the UI and let other parts update first.

<!------------------------------------------------------------------------------------>

`Other Hooks`
- used by library authors..
- not for general developers

useDebugValue       lets you customize the label React DevTools displays for your custom Hook.
useId               lets a component associate a unique ID with itself. Typically used with accessibility APIs.
useSyncExternalStore lets a component subscribe to an external store.
useActionState      allows you to manage state of actions.

<!------------------------------------------------------------------------------------>

3 rules for hooks

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional


hooks should only be called at the top level of a React functional component 
because they must be guaranteed to run every time the component function is run.
Don’t call Hooks inside loops, conditions, nested functions

in dev mode -- useEffect runs twice
===================================================================================