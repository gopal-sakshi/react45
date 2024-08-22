npx create-react-app redux23
npm install @reduxjs/toolkit react-redux

Create a file named src/app/store.js
Import the configureStore API from Redux Toolkit

===============================================================


`redux`
- can be used in whatever environment - vanillaJS, react, angular

`react-redux`
- bindings between react & redux
- this npmjs package (or) this library provides hooks
    useSelector()
    useStore()
    useDispatch()
- use connect()
    to create HoCs (higher order components) that listen to the store's state changes, 
    prepare the props for the wrapped component, 
    and re-render the wrapped components when the state changes.

`redux-thunk`
- middleware that allows you to write action creators that return a function instead of an action

===============================================================