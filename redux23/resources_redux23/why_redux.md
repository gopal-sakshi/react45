# REDUX
- Imagine a React application with 100 components
- we need to share <state> between these components


React library is mainly a Rendering library of JSX.
<State transfer between components> is pretty messy in React 
since it is hard to keep track of which component the data is coming from. 
because REACT == primarily rendering library
It becomes really complicated if users are working with a <large number of states> within an application.

Redux == solves the state transfer problem by storing all of the states in a single place called a store.

<!-- ---------------------------------------------------------------------------------------- -->

# Angular
- Angular offers Services to share and communicate the State within Components.


Centralized Store               -> In Angular is called Service.
State                           -> Info pushed to the Subjects of the Service.
Across your entire application  -> Dependency Injection of Services in the Constructors of the Components.
Actions                         -> Methods of the Service which pushes the info via next to your Subjects.

<!-- ---------------------------------------------------------------------------------------- -->