React renders HTML to the web page 
by using a function called 
    createRoot() and its method render()


Before React 16.8, Class components were the only way to track state and lifecycle on a React component. 
Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent to Class components. 
The differences are so minor that you will probably never need to use a Class component in React.

===============================================================================================


Keys allow React to keep track of elements. 
This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.


In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.

===============================================================================================

a state is private to the component
but the state is not stored in the component
React itself stores the state somewhere in its memory
when the component is destroyed/un-rendered ===> React destroys its state


