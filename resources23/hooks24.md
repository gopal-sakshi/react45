useContext

State should be held by the highest parent component in the stack that requires access to the state.
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

