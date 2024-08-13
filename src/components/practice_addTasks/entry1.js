import { useState } from 'react';
import AddTask from './entry1_AddTask';
import TaskList from './entry1_TaskList';

export default function() {
    const [tasks_fromState, setTasks] = useState(tasks23);
    function newTaskAdded(e) {
        console.log("new task added ==> ", e);
        setTasks([
            ...tasks_fromState, { id: nextId++, name: e, done23: false }
        ])
    }
    return (
        <>
            <h1>Practice Todo23</h1>
            <AddTask handleChange={newTaskAdded}/>
            <TaskList tasks={tasks_fromState}/>
        </>
    )
}

const tasks23 = [
    { id: 0, name: 'brush teeth', done23: true },
    { id: 1, name: 'take bath', done23: false },
    { id: 2, name: 'eat food', done23: false }
]

let nextId = 3;