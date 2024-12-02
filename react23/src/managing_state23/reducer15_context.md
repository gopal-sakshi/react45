/*
    Reducers         let you consolidate a component’s state update logic. 
    Context         lets you pass information deep down to other components
    We will combine them both

    see reducer12.js
    - "tasks state" & "dispatch function" ===> ONLY available in the top-level "reducer12"
    - "AddTask"  & "TaskList" got squat; TaskList has another child component -- "Task"
    - to let other components read list of tasks/change ==> 
        we have to explicitly pass down current state & event handlers as props

    As an alternative to passing them through props, 
    you might want to put both the "tasks state" and the "dispatch function" into context. 


    combine a reducer with context:
    - Create the context.
    - Put state and dispatch into context.
    - Use context anywhere in the tree.
*/